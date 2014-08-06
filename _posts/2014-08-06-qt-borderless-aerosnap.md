---
layout: post
title: "Qt borderless window - Native Windows events (aerosnap)"
description: ""
category: articles
modified: 2014-08-06
tags: [Qt,C++,Windows,Aerosnap,Native events]
comments: true
share: true
---

It's been a long time I was looking for a nice Qt borderless window as we can see on many application nowadays. So I first tryed making my own Qt window, it worked pretty well and I've got a nice and interactive window. The issue was that it was not able to catch Windows native events :

* Aerosnap (maximize the window hitting the top of the screen for example)
* System shadow
* Minimizing animation
* Aero shake effect (minimize all other apps)

Today, I found this wonderful [GitHub repository](https://github.com/deimos1877/BorderlessWindow) that handle all my needs !
Thanks a lot [deimos1877](https://github.com/deimos1877) for sharing your work. You will help many people making cross platform apps with a native look and feel!

<div class="zoom-gallery">
    <figure>
        <a href="/images/qt-borderless-aerosnap/qt-borderless-window.png"><img src="/images/qt-borderless-aerosnap/qt-borderless-window.png" /></a>
        <figcaption>Qt borderless window</figcaption>
    </figure>
</div>


