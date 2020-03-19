# bushbushsaur.github.io
This repository contains files that I have made that can be used to help work with webpages.

## `images.js`
### Overview
`images.js` contains JavaScript functions that you can use to work with images.
### Requires
`images.js` does not require any files.
### Contents
#### `showOnClick()`
The `showOnClick()` function listens for when an element is clicked, and then shows an image. Here's how to use it:
###### JavaScript
```javascript
showOnClick(imageId,otherItemId);
```
This listens for when the element with an id of `otherItemId` is clicked and displays the image.

## `forms.js`
### Overview
`forms.js` contains JavaScript functions that you can use to work with forms.
### Requires
`forms.js` requires that you load jQuery first.
### Contents
#### `formJSPro()`
The `formJSPro()` function styles forms to make them look great. It also helps out with creating quizzes. Here's how to use it:
###### HTML
```HTML
<form formjspro>...</form>
```
###### JavaScript
```javascript
formJSPro();
```
