---
layout: post
title: "Image processing - SKFCM algorithm"
description: "Medical image segmentation"
category: articles
modified: 2014-04-08
tags: [C,CImg,SKFCM,algorithm,image processing]
comments: true
share: true
---

## Subject presentation

Image segmentation plays a crucial role in many areas of medical imaging. We have implemented a solution for segmenting image from the article [31] Dao-Qiang Zhang and Chen Song-Can, researchers from the Chinese Academy of Sciences (coupled to the computer department of the Chinese University of Aeronautics and astronautics).

The image processing method presented in this article, Spatially constrained KFCM (SKFCM) allows an image segmentation fuzzy regions, inspired by the Fuzzy C-Means method (FCM), but using a distance induced by a kernel function (from vector machines support or SVM), and a consideration of the neighborhood by the introduction of spatial constraints in the objective function of FCM.

## Theory

It is first necessary to define what a fuzzy set.

A fuzzy set is a set whose edges are poorly defined. This results to a membership function values in [0,1], as opposed to the conventional case where the membership function takes two values 0 or 1. This allows to define sets of a more flexible manner, tolerant inaccurate, incomplete and / or uncertain.

This property is exploited by image processing, and more precisely in classification where the classes, also known as regions are represented by fuzzy sets. This is useful when the regions can not be defined clearly and precisely. Their handling gradant the vagueness can handle imprecise data, uncertain and / or redundant in a more flexible manner.

Fuzzy clustering allows overlapping classes (also called regions). A non-fuzzy segmentation can be obtained by assigning each pixel to the class for which its membership degree is maximum.

The algorithm of the Fuzzy C-Means (FCM) is a fuzzy clustering algorithm based on optimization of a quadratic criterion of classification where each class is represented by its center of gravity. The algorithm requires knowing the number of classes in advance and generates classes itératiff process by minimizing an objective function. Thus, it provides a fuzzy partition of the image by giving each pixel a degree of membership in a given region.

## Results

<div class="zoom-gallery">
    <figure class="third">
        <a href="/images/skfcm-algorithm/brain.jpg"><img src="/images/skfcm-algorithm/brain-small.jpg" /></a>
        <a href="/images/skfcm-algorithm/brain-exclusive.jpg"><img src="/images/skfcm-algorithm/brain-exclusive-small.jpg" /></a>
        <a href="/images/skfcm-algorithm/brain-shared.jpg"><img src="/images/skfcm-algorithm/brain-shared-small.jpg" /></a>
        <figcaption>SKFCM on brain RMI images</figcaption>
    </figure>
</div>

<div class="zoom-gallery">
    <figure class="third">
        <a href="/images/skfcm-algorithm/fish.jpg"><img src="/images/skfcm-algorithm/fish.jpg" /></a>
        <a href="/images/skfcm-algorithm/fish-exclusive.jpg"><img src="/images/skfcm-algorithm/fish-exclusive.jpg" /></a>
        <a href="/images/skfcm-algorithm/fish-shared.jpg"><img src="/images/skfcm-algorithm/fish-shared.jpg" /></a>
        <figcaption>SKFCM on a fish</figcaption>
    </figure>
</div>

The SKFCM algorithm provides a segmented image noised and respecting the fuzzy regions of the original image. Indeed, this aspect is very well represented by the picture of the fish. In the original image can be difficult to distinguish caudal fins of fish. With SKFCM algorithm, fuzzy segmentation and reconstruction help highlight these fins on the processed image.

On MRI images taken in recent appear slightly noisy. It is for this reason that conventional segmentation methods as FCM does not allow a clear image segmentation. However, algortihme SKFCM provides a clear segmented image from an image with Gaussian noise characteristic of catches taken by magnetic resonance. That is why this method seems very appropriate for this kind of images, particularly useful for the detection of tumors in the brain.

## GitHub

Our implementation of the SKFCM algorithm is Open Source and [can be found on GitHub there](https://github.com/Drusy/SKFCM-Algorithm).

## We were 2 working on this project

- Maxime Arriaza
- Kévin Renella