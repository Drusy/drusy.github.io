---
layout: post
title: "Battery State"
description: "Laptop battery state (wear level)"
category: articles
modified: 2014-04-08
tags: [C++,Qt,battery,laptop]
comments: true
share: true
---

Any of the available software on windows fits my needs about battery usage, wear level etc. so I decided to made to develop my own. I would like a software that :

- is really light
- that can show me the waer level of my battery
- is running in background
- show the basics about the laptop battery

I have written this software with C++/Qt and using the native C API of windows to get the battery informations.

<figure class="half">
	<a href="/images/battery-state/battery-state.png"><img src="/images/battery-state/battery-state.png" /></a>
	<a href="/images/battery-state/battery-tray.png"><img src="/images/battery-state/battery-tray.png" /></a>
	<figcaption>Battery State screenshots</figcaption>
</figure>

Currently this is a quick and dirty implementation and it is restricted to Windows but I plan to extend the compatibility to OS X, make it a bit more sexy and clean the code to put it on GitHub.