# P.1.3 - Color Spectrum in a Circle - Step 3

## The Code

Set colour mode to HSB setting the hue max to 360 for the circle and saturation and brightness to the canvas width and height for the mouse interactivity.

```js
colorMode(HSB, 360, width, height);
```

The segment fill hue changes as it goes around the circle using the angle variable and the mouse position controls the saturation and brightness.

```js
fill(angle, mouseX, mouseY);
```
