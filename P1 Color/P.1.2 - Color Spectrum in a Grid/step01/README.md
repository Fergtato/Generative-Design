# P.1.2 - Color Spectrum in a Grid - Step 1

## The Code

Define variables for how many rectangles there will be on the X and Y coordinates.

```js
var stepX;
var stepY;
```

Hard code the steps to 10 and 10 for now.

```js
stepX = 10;
stepY = 10;
```

Using a for loop draw a line of rectangles on the Y axis, the amount is defined by stepY.

```js
for(var gridY = 0; gridY < height; gridY += stepY) {
    rect(0, gridY, stepX, stepY);
}
```

Set the rectangles position to gridY and its width and height to the step count.

```js
rect(0, gridY, stepX, stepY);
```
