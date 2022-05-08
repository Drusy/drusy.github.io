---
layout: post
title: "Nanotechnology Image Processing"
description: "Nanotechnology Image Processing"
category: articles
modified: 2014-04-08
tags: [C++,Qt,OpenCV,Nanotechnology]
category: projects
projects: true
---

This project started from a school project in 2011 and I worked again on that in 2012 for the [LASMEA](http://w3.anr-proteus.fr/?q=node/124) laboratory.  

<div class="zoom-gallery">
    <figure class="half">
        <a href="/images/nanotechnology-image-processing/about.jpg"><img src="/images/nanotechnology-image-processing/about-small.jpg" /></a>
        <a href="/images/nanotechnology-image-processing/drop-detector.jpg"><img src="/images/nanotechnology-image-processing/drop-detector-small.jpg" /></a>
        <a href="/images/nanotechnology-image-processing/nano-hole-detector.jpg"><img src="/images/nanotechnology-image-processing/nano-hole-detector-small.jpg" /></a>
        <a href="/images/nanotechnology-image-processing/image-filters.jpg"><img src="/images/nanotechnology-image-processing/image-filters-small.jpg" /></a>
        <figcaption>Nanotechnology Image Processing screenshots</figcaption>
    </figure>
</div>

## Summary extracted from the project report

During the second year of our studies in Computer Science, we devoted 14 weeks to a tutored project, lead by M. Chausse, senior lecturer at the Physics Department of the  I.U.T.

The goal of this project was to develop a software application capable of analyzing pictures of nanomaterials, detecting roughly circular holes on those pictures, and determining the radius and smoothness of the detected holes, in order to calculate some physical properties of the pictured material. The final application had to be user-friendly and cross-platform, as it aimed to be used by both students and researchers. Initially, this project was a continuation of what had been started last year by another group of students. However, the existing code was hardly reusable, so we re-did everything from the ground up.

We first started by learning some mathematics and algorithms that are used in the complex fields of computer vision and feature detection. We chose to use the OpenCV library, which is composed of numerous highly-optimized real-time image processing algorithms. We then developed the core of the project, in paralell with the user interface. When both were sufficiently evolved, we linked them up.

The OpenCV built-in circle detection method had poor performance and the result quality was extremely dependant on parameters, which varied by great amounts from one image to another. For this reason, we developed a brand new algorithm to detect holes faster and with better accuracy. The blazing speed achieved by this new algorithm allowed us to implement image analysis on video streams provided by webcams or video records. It also permitted estimation of the holes' smoothness, which was not possible using the algorithm provided by OpenCV.

The application underwent many changes during its development, as users requested features and modifications. For example, we added a preview of the binary image our algorithm works on, as well as a user-driven detection method in which a user simply has to click a hole, and then lets the program do the rest. Considering we finished the application somewhat early, we later started developing some additional features that were not part of the initial project, such as tangent detection on microscopic drops.

## We were 4 working on this software

- Thomas Coulange
- Yannick Le Pennec
- Kévin Renella
- Jean-Baptiste Viller
