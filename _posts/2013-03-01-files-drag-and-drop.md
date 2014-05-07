---
layout: post
title: "Files Drag &amp; Drop"
description: "Simpler file transfer between your devices and your computer"
category: articles
modified: 2014-04-08
tags: [Wi-Fi,network,transfer,drag & drop,filesdnd,android]
comments: true
share: true
link: http://www.filesdnd.com
---

<img style="float: right;" src="/images/filesdnd/logo-blue-filesdnd.png" />
Files Drag &amp; Drop is a software that will let you easily transfer files from a computer to another one, and from a computer to an Android device.

The goal was to make transfers between an Android device and a computer (running on Windows, OS X and Linux) easier. 

## How it works : 
Once you have installed the app on two devices (or on PC/Mac with the desktop version), Files Drag &amp; Drop will automatically detect your devices on the Wi-Fi network. Then, simply drag & drop the content you want to send onto the device of your choice and your data will be transferred.
From an Android device, use the share function of your device and choose Files Drag &amp; Drop.

More technicaly, we are using the Apple Bonjour protocol to detect devices over the Wi-Fi network. After a few days testing the app, we met some issues detecting devices due to multicast compatibility of routers and devices. So we decided to implement a broadcast detection manually to resolve our detection problems. Once your devices are properly detected and you simply drop a file (or text/url) on them, a TCP connection is established and the transfer begins.

Try it, it's awesome. 

## Why should you choose Files Drag &amp; Drop ?
You don't need to get the IP address of your device, don't need to remember a password, and with the full version you can open files remotely !
It works only through Wi-Fi for now, but we have plans to widen the possibilities in future.

## How it looks :

<div class="zoom-gallery">
    <figure class="half">
        <a href="/images/filesdnd/screen-android-home.jpg"><img src="/images/filesdnd/screen-android-home.jpg" /></a>
        <a href="/images/filesdnd/screen-android-send.jpg"><img src="/images/filesdnd/screen-android-send.jpg" /></a>
        <figcaption>Files Drag &amp; Drop Android</figcaption>
    </figure>

    <figure>
        <a href="/images/filesdnd/screen-desktop.png"><img src="/images/filesdnd/screen-desktop.png" /></a>
        <figcaption>Files Drag &amp; Drop Desktop</figcaption>
    </figure>
</div>

## Pricing
The desktop version is completly free, but the Android version is a trial. You can use most of the features, but you are limited to 5 file downloads per day (but no limit on upload, or text/url).
You can buy the full version in app, for approximatively $3.

Here's the list of features for the full version :

* Receiving multiple files at once
* Receiving a folder
* Unlimited download
* Open received files automatically (very useful !)
* Background service (you don't have to keep the app in the foreground) 
* No advertisements

The desktop version is Open Source and [available on GitHub](https://github.com/filesdnd), you can find the Android app on the [Android Market](https://play.google.com/store/apps/details?id=com.filesdnd).

## More
Files Drag &amp; Drop is a software made by [Thomas Coulange](https://github.com/NitroG42) & [Kévin Renella](https://github.com/Drusy), for our personnal use. We hope that it could help some more people :)

Don't hesitate to write any questions/suggestions/not-happy-feedback at contact@filesdnd.fr !