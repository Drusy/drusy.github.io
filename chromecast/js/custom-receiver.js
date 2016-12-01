var CFFChromeCastJsonObjectType = {
    Unknown       : -1,
    ArticleDetail : 0,
    TypeVideo     : 1
}

var CFFChromeCastApplication = {
    LaMontagne          : 'lamontagne',
    LaRep               : 'larep',
    LeBerry             : 'leberry',
    LEchoRepublicain    : 'lechorepublicain',
    LeJDC               : 'lejdc',
    LePopulaire         : 'lepopulaire',
    Lyonne              : 'lyonne',
    LEveil              : 'leveil',
    SportsAuvergne      : 'sportsauvergne'
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
                displaySplashScreen(jsonObject);
                break;
         }

        // inform all senders on the CastMessageBus of the incoming message event
        // sender message listener will be invoked
        window.messageBus.send(event.senderId, event.data);
    }

    window.mediaElement = document.getElementById('video-container');
    window.mediaManager = new cast.receiver.MediaManager(window.mediaElement);
    window.castReceiverManager.start({statusText: "Application is starting"});
};

function displaySplashScreen(jsonObject) {
    clearSlider();

    if( jsonObject.application == "sports-auvergne" ) {
        document.getElementById("logo-cf").src = "images/sport-auvergne-logo.png";
    } else {
        document.getElementById("logo-cf").src = "images/groupe-centre-france.jpg";
    }

    document.getElementById('logo-cf').style.display = 'block';
    document.getElementById('cbp-bislideshow').style.display = 'none';
    document.getElementById('article-container').style.display = 'none';
    document.getElementById('chromecast-loader').style.display = 'none';

    document.getElementById("video-container").pause();

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
    clearSlider();

    document.getElementById('chromecast-loader').style.display = 'none';
    document.getElementById('logo-cf').style.display = 'none';
    document.getElementById('cbp-bislideshow').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('article-container').style.display = 'block';
    document.getElementById('article-app-icon').style.display = 'block';

    document.getElementById("article-app-icon").src = 'images/' + jsonObject.application + ".png";
    document.getElementById("article-title").innerHTML = jsonObject.title;
    document.getElementById("article-subtitle").innerHTML = jsonObject.subtitle;

    window.castReceiverManager.setApplicationState(jsonObject.title);
};

function displayArticle(jsonObject) {
    document.getElementById('chromecast-loader').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('logo-cf').style.display = 'none';
    document.getElementById('article-container').style.display = 'block';
    document.getElementById('article-app-icon').style.display = 'block';
    document.getElementById('cbp-bislideshow').style.display = 'block';

    document.getElementById("article-app-icon").src = 'images/' + jsonObject.application + ".png";
    document.getElementById("article-title").innerHTML = jsonObject.title;
    document.getElementById("article-subtitle").innerHTML = jsonObject.subtitle;

    document.getElementById("video-container").pause();

    startSlider(jsonObject.images);

    window.castReceiverManager.setApplicationState(jsonObject.title);
};
