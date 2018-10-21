# P.1.4 - Color Palettes Through Interpolation - Step 2

## The Code

Create arrays for the fill colours of the boxes on the left and right side.

```js
var colorsLeft = []
var colorsRight = [];
```

Create a colors array to save the lerp colors.

```js
var colors = [];
```

Call the shakeColors function to fill the arrays with random colours.

```js
shakeColors();
```

Set the starting and ending colour for lerp colour to mix between.

```js
var col1 = colorsLeft[gridY];
var col2 = colorsRight[gridY];
```

Map the amount value to between 0 and 1 as the lerpColor function takes a 0-1 value for amount.

```js
var amount = map(gridX, 0, tileCountX - 1, 0, 1);
```

Generate the inbetween colour for the current step on the x axis and use in fill.

```js
interCol = lerpColor(col1, col2, amount);
fill(interCol);
```

For however many tiles there are going down fill the arrays with random colours.

```js
for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 180), random(0, 100), 100);
    colorsRight[i] = color(random(180, 360), 100, random(0, 100));
}
```
