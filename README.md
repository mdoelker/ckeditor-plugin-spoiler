CKEditor Spoiler Plugin
=======================

This plugin let's you create a spoiler box that can be toggled to show it's contents. It is based on the CKEditor widget system.

![Screenshot](https://s3.amazonaws.com/f.cl.ly/items/1S2T133R1b470c1v261o/Image%202015-02-27%20at%202.52.13%20nachm..png)

The plugin will create the following structure which can be styled to fit your needs.

```html
<div class="spoiler">
    <h6 class="spoiler-title">Title</h6>
    <div class="spoiler-content"><p>Hidden content</p></div>
</div>
```

To open the spoiler box it should receive the `spoiler-open` class on the outer div.

There is an example with some default style and some js to make the toggling work.


## Installation

Install with Bower using `bower install ckeditor-plugin-spoiler`

or

1. Copy the spoiler directory into the "plugins" folder of CKEditor.
2. Add the following to the CKEditor config.js file:
   `config.extraPlugins = 'spoiler';`
3. Add the `spoiler/css/spoiler.css` stylesheet to your document or create your own style.


## Options

`config.spoiler_template` - Specify to override the default template seen above. Placeholders in curly braces will be replaced with language vars. E.g. `{defaultTitle}` will become `Title`.
