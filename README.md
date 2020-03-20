This repository contains files that I have made that can be used to help work with webpages.

# `images.js`
## Overview
`images.js` contains JavaScript functions that you can use to work with images.
## Requires
`images.js` does not require any files.
## Contents
### `showOnClick()`
The `showOnClick()` function listens for when an element is clicked, and then shows an image.
#### Usage
###### JavaScript
```javascript
showOnClick(imageId,otherItemId);
```
#### Result
This listens for when the element with an id of `otherItemId` is clicked and displays the image.

# `forms.js`
## Overview
`forms.js` contains JavaScript functions that you can use to work with forms.
## Requires
`forms.js` requires that you load jQuery first.
## Contents
### `formJSPro()`
The `formJSPro()` function styles forms to make them look great. It also helps out with creating quizzes.
#### Usage
###### HTML
```HTML
<form formjspro>...</form>
```
*For a quiz, use this format for input elements:*
```HTML
<input answers="(semicolon-seperated-answers)">
```
###### JavaScript
```javascript
formJSPro();
```
#### Result
This will style your form nicely. Any input elements with `answers` attributes will be turned into quiz items. When the form is submitted, all input elements will be disabled and quiz elements will be checked.
#### `formJS()`
This `formJS()` function creates forms and quizzes with JavaScript.
