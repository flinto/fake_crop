# FakeCrop, by Flinto

A jQuery plugin for &ldquo;cropping&rdquo; an image within an HTML element. FakeCrop will scale the image to fit within the element, and center it.

## Installation

Download and include the jquery.fake_crop.js file in your project after including jQuery.

````html
<script src="jquery.fake_crop.js"></script>
````

## Basic Usage

Initialize the plugin by calling `fake_crop()` on the element you&rsquo;d like to use it on.

````html
<div id="crop_me">
  <img src="foo.jpg">
</div>
````

````javascript
$('#crop_me').fakeCrop()
````