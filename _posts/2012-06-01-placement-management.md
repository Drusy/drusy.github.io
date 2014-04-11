---
layout: post
title: "Placement manager"
description: "Lagrange interpolation plotter"
category: articles
modified: 2014-04-08
tags: [C++,Qt,SQLite,placement,manager]
comments: true
share: true
---

I worked for the [LASMEA](http://w3.anr-proteus.fr/?q=node/124) laboratory in 2012 to improve the [hole detector](/articles/nanotechnology-image-processing/) and to develop a placement manager in C++/Qt. Before the development of this software, the management of students placements was done by editing Excel files. So, the goal is to simply :

- manage the students for schools and companies
- assign placements to students 
- real time saving using SQLite
- advanced settings using XML
- print internship agreement
- have a reminder for todo tasks
- embedded search

<div class="zoom-gallery">
    <figure class="half">
        <a href="/images/placement-manager/report.jpg"><img src="/images/placement-manager/report-small.jpg" /></a>
        <a href="/images/placement-manager/settings.jpg"><img src="/images/placement-manager/settings-small.jpg" /></a>
        <a href="/images/placement-manager/summary.jpg"><img src="/images/placement-manager/summary-small.jpg" /></a>
        <a href="/images/placement-manager/todo-list.jpg"><img src="/images/placement-manager/todo-list-small.jpg" /></a>
        <figcaption>Placement Manager screenshots</figcaption>
    </figure>
<div class="zoom-gallery">

At this point, I began to be experienced with Qt, so I tried to make my code as generic as possible using dynamic views and stacked views. I also implemented multi-threaded SQLite request to optimize automatic saves and give to the user a better experience.