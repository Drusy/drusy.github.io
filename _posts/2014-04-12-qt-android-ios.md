---
layout: post
title: "Qt 5.2 - Android &amp; iOS"
description: ""
category: articles
modified: 2014-04-12
tags: [Qt 5.2,QtQuick,QML,Android,iOS]
comments: true
share: true
---

Today, after a long break working with Qt, I decided to test how it looks on it version 5.2 and particulary to try the Android and iOS integration for `QtWidgets` and `QtQuick`. I encountered many troubles setting up the projects and I will try to share my advices to build your applications.

## Windows

My first try was under Windows, and unfortunately, building an application targeted to Android was not so obvious. So, once you have installed the [Qt 5.2 bundle for Android](http://download.qt-project.org/official_releases/qt/5.2/5.2.1/qt-opensource-windows-x86-android-5.2.1.exe), follow these steps :

#### Android dependencies

Configure Qt with your Apache Ant installation, Android SDK, Android NDK and your JDK path :

<div class="zoom-gallery">
    <figure>
        <a href="/images/qt-android-ios/qt-android-settings.jpg"><img src="/images/qt-android-ios/qt-android-settings.jpg" /></a>
    </figure>
</div>

The SDK, NDK and Apache Ant folders may **not** contain any spaces.

#### Android compilers

If there are not already added, simply search the `qmake.exe` files for each Android compiler provided by Qt.

<div class="zoom-gallery">
    <figure>
        <a href="/images/qt-android-ios/qt-compilers-settings.jpg"><img src="/images/qt-android-ios/qt-compilers-settings.jpg" /></a>
    </figure>
</div>

#### Windows PATH

Here is the key, first of all, you need the set `JAVA_HOME` to your JDK installation. Then, imagine you have Qt intalled at `C:/Qt`, you will have to add `C:/Qt/Tools/mingw48_32/bin` to your path.

#### Issues
 
If your program does not build for Android and in your build/run setting you see the message **mingw32-make not found in the environment**, override mingw32-make with the path to the file, for example: `C:/Qt/Tools/mingw48_32/bin/mingw32-make.exe`

#### Result

Finally, after some fixes, I can see my Qt applications running on my Android device. `QtWidget` based applications looks good and the layouts are respected but I can see some issues with the Qt components and Android (`QTextEdit` for example does not grab the virtual keyboard properly). `QtQuick` applications looks like a charm and seems to be perfectly integrated to the system. 

## OS X

For MAC addicts, there is no hidden issues, only set up the Android compilers and the Android dependencies and it should work for Android and iOS.

I hope that this article will help any people that struggle with these issues.