# P.1.4 - Color Palettes Through Interpolation - Step 4

## The Code

Boolean to set which interpolation method to use.

```js
var interpolateShortest = true;
```

Depending on the interpolateShortest boolean set colorMode to RGB, set the lerpColor and then set it back to HSB.

```js
if (interpolateShortest) {
    colorMode(RGB);
    interCol = lerpColor(col1, col2, amount);
    colorMode(HSB);
} else {
    interCol = lerpColor(col1, col2, amount);
}
```
