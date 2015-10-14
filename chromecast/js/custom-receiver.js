var CFFChromeCastJsonObjectType = {
    Unknown       : -1,
    ArticleDetail : 0,
    TypeVideo     : 1
}

var CFFChromeCastApplication = {
    LaMontagne       : 'lamontagne',
    LaRep            : 'larep',
    LeBerry          : 'leberry',
    LEchoRepublicain : 'lechorepublicain',
    LeJDC            : 'lejdc',
    LePopulaire      : 'lepopulaire',
    Lyonne           : 'lyonne'
}

window.onload = function() {
    cast.receiver.logger.setLevelValue(0);
    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
    console.log('Starting Receiver Manager');

    // handler for the 'ready' event
    castReceiverManager.onReady = function(event) {
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        window.castReceiverManager.setApplicationState("Application status is ready...");
    };

    // handler for 'senderconnected' event
    castReceiverManager.onSenderConnected = function(event) {
        console.log('Received Sender Connected event: ' + event.data);
        console.log(window.castReceiverManager.getSender(event.data).userAgent);
    };

    // handler for 'senderdisconnected' event
    castReceiverManager.onSenderDisconnected = function(event) {
        console.log('Received Sender Disconnected event: ' + event.data);
        if (window.castReceiverManager.getSenders().length == 0 && event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
            window.close();
        }
    };

    // handler for 'systemvolumechanged' event
    castReceiverManager.onSystemVolumeChanged = function(event) {
        console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
        event.data['muted']);
    };

    // create a CastMessageBus to handle messages for a custom namespace
    window.messageBus =
    window.castReceiverManager.getCastMessageBus(
        'urn:x-cast:fr.centrefrance.afpmobile');

    // handler for the CastMessageBus message event
    window.messageBus.onMessage = function(event) {
        console.log('Message [' + event.senderId + ']: ' + event.data);
        // display the message from the sender
        var jsonObject = JSON.parse(event.data)

        switch (jsonObject.type) {
            case CFFChromeCastJsonObjectType.ArticleDetail:
                displayArticle(jsonObject);
                break;

            case CFFChromeCastJsonObjectType.TypeVideo:
                displayVideo(jsonObject);
                break;

             default:
                displaySplashScreen();
                break;
         }

        // inform all senders on the CastMessageBus of the incoming message event
        // sender message listener will be invoked
        window.messageBus.send(event.senderId, event.data);
    }

    // initialize the CastReceiverManager with an application status message
    window.castReceiverManager.start({statusText: "Application is starting"});
    console.log('Receiver Manager started');

    window.video = document.getElementById('video-container');
    window.mediaSource = new MediaSource();
    window.video.src = window.URL.createObjectURL(window.mediaSource);
    window.allSegments = null;
};

function displaySplashScreen() {
    document.getElementById('logo-cf').style.display = 'block';
    document.getElementById('article-container').style.display = 'none';

    //document.getElementById("video-container").pause();

    window.castReceiverManager.setApplicationState("splashscreen");
}

function clearSlider() {
    cbpBGSlideshow.stopSlideshow();
    document.getElementById("cbp-bislideshow").innerHTML = "";
}

function startSlider(images) {
    clearSlider();

    images.forEach(addImageToSlider);

    cbpBGSlideshow.reset();
    cbpBGSlideshow.init();
}

function addImageToSlider(element, index, array) {
    var li = document.createElement("li");
    document.getElementById("cbp-bislideshow").appendChild(li);

    var image = document.createElement("img");
    image.setAttribute("src", element);
    image.setAttribute("class", "article-image max-size");
    li.appendChild(image);
}

function displayVideo(jsonObject) {
    document.getElementById('logo-cf').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('article-container').style.display = 'block';
    document.getElementById('article-app-icon').style.display = 'block';

    document.getElementById("article-app-icon").src = 'images/' + jsonObject.application + ".png";
    document.getElementById("article-title").innerHTML = jsonObject.title;
    document.getElementById("article-subtitle").innerHTML = jsonObject.subtitle;

    window.sourceBuffer = window.mediaSource.addSourceBuffer(
        'video/mp4; codecs="avc1.42c01e"');
    fileDownload(jsonObject.video);

    //document.getElementById("video-container-src").src = jsonObject.video;
    //document.getElementById("video-container").play();

    window.castReceiverManager.setApplicationState(jsonObject.title);
};

function displayArticle(jsonObject) {
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('logo-cf').style.display = 'none';
    document.getElementById('article-container').style.display = 'block';
    document.getElementById('article-app-icon').style.display = 'block';

    document.getElementById("article-app-icon").src = 'images/' + jsonObject.application + ".png";
    document.getElementById("article-title").innerHTML = jsonObject.title;
    document.getElementById("article-subtitle").innerHTML = jsonObject.subtitle;

    //document.getElementById("video-container").pause();

    startSlider(jsonObject.images);

    window.castReceiverManager.setApplicationState(jsonObject.title);
};

/**
* Processes the next video segment for the video.
*/
function processNextSegment() {
    // Wait for the source buffer to be updated
    if (!window.sourceBuffer.updating && window.sourceBuffer.buffered.length > 0) {
        // Only push a new fragment if we are not updating and we have
        // less than 10 seconds in the pipeline
        if (window.sourceBuffer.buffered.end(window.sourceBuffer.buffered.length - 1) - window.video.currentTime < 10) {
            // Append the video segments and adjust the timestamp offset forward
            window.sourceBuffer.timestampOffset = window.sourceBuffer.buffered.end(this.sourceBuffer.buffered.length - 1);
            window.sourceBuffer.appendBuffer(window.allSegments);
        }
        // Start playing the video
        if (window.video.paused) {
            window.video.play();
        }
    }
    setTimeout(processNextSegment, 1000);
};

function onLoad(arrayBuffer) {
    if (!arrayBuffer) {
        window.video.src = null;
        return;
    }
    window.allSegments = new Uint8Array(arrayBuffer);
    window.sourceBuffer.appendBuffer(window.allSegments);
    processNextSegment();
}

/**
* Sends the xhr request to download the video.
* @param {string} url to load.
*/
function fileDownload(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.send();
    xhr.onload = function(e) {
        if (xhr.status != 200) {
            onLoad();
            return;
        }
        onLoad(xhr.response);
    };
    xhr.onerror = function(e) {
        window.video.src = null;
    };
};
