---
layout: layouts/post.njk
title: Alberta Children Hospital Scoliosis Detection
date: 2013-10-01
permalink: /posts/ach/
keywords: ""
---
In 2013, at the University of Calgary, we developed a scoliosis detection system for the Alberta Children's Hospital. The objective was to create an accurate 3D model of a patient's body, enabling doctors to study spinal deformities more effectively. Although the hospital previously used laser scanners, they proved impractical, as patients often struggled to remain still long enough for a complete scan. As a result, a single-shot 3D reconstruction system was needed.
In this project, I developed software capable of calibrating 26 cameras for both internal and external parameters. I also contributed to the 3D reconstruction software which processed the images and export a point cloud.

My colleague is posing as a patient here:

<img src="ACH.JPG" width="400">

This is the test field we used, which includes a mix of coded targets and regular targets. By identifying the coded targets in the images, we were able to label the other targets in each of the images in all the 26 cameras. The 2D coordinate of these targets plus their 3D coordinate in the test field were entered into a bundle adjustment, which could estimate the internal and external parameters of the cameras. 


<img src="testfield.jpg" width="400">