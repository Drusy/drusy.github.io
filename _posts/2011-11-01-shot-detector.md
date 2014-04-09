---
layout: post
title: "Shot detector"
description: "Competitive Shooting Program"
category: articles
modified: 2014-04-08
tags: [C++,Qt,OpenCV,shooting,competition]
comments: true
share: true
---

For a long time, Metallic silhouette shooting was one of my passion :)

## Metallic silhouette shooting ?

<figure>
	<img src="/images/shot-detector/sms-targets.jpg" />
</figure>


> Silhouette shooting involves firing at steel targets shaped like chickens, pigs, turkeys, and rams from various distances depending on the specific match. Unlike most conventional target games that utilize paper targets and numerical scoring rings, every shot fired at a metallic silhouette produces an immediate and clearly visible and audible result. It is either a hit or a miss.
>
> All metallic silhouette shooting events held at Zia, whether using rifles or handguns, are fired standing from the unsupported off hand position. Accessories such as adjustable or hooked butt plates, palm rests, shooting coats, or slings are not allowed.

So, the goal is to shoot  small (too small...) metallic targets on various distances, and all of that is outdoor. But what happen if it's a hard winter, a very very important championship is coming and you have to train yourself ?!

The shot detector is made for you, you can adapt your guns with a beam pointer laser, shot indoor (without real bullets...) and see your results with the shot detector app!

<figure>
	<a href="/images/shot-detector/shot-detector.png"><img src="/images/shot-detector/shot-detector-small.png" /></a>
	<figcaption>Shot detector screenshot</figcaption>
</figure>

For this software, I have chosen C++/Qt and OpenCV for camera handler and image processing.