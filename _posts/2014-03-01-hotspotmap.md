---
layout: post
title: "HotspotMap"
description: "Find the best place to work when you are far from your workplace or your home."
category: articles
modified: 2014-04-08
tags: [PHP,Silex,developer,JavaScript]
comments: true
share: true
---

HotspotMap is an application that shows Hotspots dedicated to developpers. The goal is to find the best place to work when you are far from your workplace or your home.

HotspotMap is my first project using PHP 5.0. My academic background usually turned me through Java EE and I was happy to discover how are really made most of the website we can find over the internet. To be efficient, we used a Symphony based framework called [Silex](http://silex.sensiolabs.org/).

## Silex

> **A PHP micro-framework standing on the shoulder of giants**
>
>Silex is a PHP microframework for PHP 5.3. It is built on the shoulders of Symfony2 and Pimple and also inspired by sinatra.
>
> A microframework provides the guts for building simple single-file apps. Silex aims to be:
>
> - *Concise*: Silex exposes an intuitive and concise API that is fun to use.
> - *Extensible*: Silex has an extension system based around the Pimple micro service-container that makes it even easier to tie in third party libraries.
> - *Testable*: Silex uses Symfony2's HttpKernel which abstracts request and response. This makes it very easy to test apps and the framework itself. It also respects the HTTP specification and encourages its proper use.

## HotspotMap

HotspotMap use a lot of JavaScript and particulary the Google Map API. Furthermore, we provided a REST API to communicate with the application so we had an intensive use of ajax to populate our view.

<figure class="half">
	<a href="/images/hotspotmap/hotspotmap-index.png"><img src="/images/hotspotmap/hotspotmap-index-small.jpg" /></a>
	<a href="/images/hotspotmap/hotspotmap-details.png"><img src="/images/hotspotmap/hotspotmap-details-small.jpg" /></a>
</figure>
<figure>
	<a href="/images/hotspotmap/hotspotmap-connection.png"><img src="/images/hotspotmap/hotspotmap-connection.png" /></a>
</figure>

## GitHub

HotspotMap is Open Source and [can be found on GitHub there](https://github.com/Drusy/HotspotMap).
This is an engineering school project ([ISIMA](http://www.isima.fr)), we had time restrictions and so it is a quick & dirty implementation. This project aims to practice and get started with PHP & Silex.

## We were 2 working on this software

- [Florian Rotagnon](https://github.com/k-yak)
- [Kévin Renella](https://github.com/Drusy)
