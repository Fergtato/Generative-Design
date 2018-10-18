# P.1.2 - Color Spectrum in a Grid - Step 4

## The Code

Add the save as image function to save your creations as a PNG.

```js
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```
