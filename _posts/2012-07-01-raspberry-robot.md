---
layout: post
title: "Raspberry PI robot - Tracking algorithm"
description: "Tracking algorithm on a Raspberry PI"
category: articles
modified: 2014-04-08
tags: [C++,Qt,OpenCV,Android,Raspberry PI,robot]
category: projects
projects: true
---

For our second year of engineering school project, we developed a tracking algorithm for an autonomous robot based on a Raspberry PI.
The goal was to set up an application with 3 people in order to pilot a robot using manual control (Qt graphical user interface) or autopilot by camera. We have chosen low costs components to build our robot, including the Raspberry PI itself, USB controller, a portable battery, a little webcam and some wheels.

Our tracking algorithm use **Meanshift** with a color filtered image as initialization to track a red item. Using Meanshift, we can easily follow people that have a red item on their legs. Lets see the video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/1C_zbBZSwMs" frameborder="0"> </iframe>

### We were 4 working on this project

- [Thomas Coulange](https://github.com/NitroG42)
- [Florian Rotagnon](https://github.com/k-yak)
- [Thomas Marques](https://github.com/ThomasMarques)
- [Kévin Renella](https://github.com/Drusy)