# P.1.2 - Color Spectrum in a Grid - Step 2

## The Code

Set step X and Y to mouse X and Y to make the size of the boxes follow the position of the mouse and add 2 to prevent it from crashing.

```js
stepX = mouseX + 2;
stepY = mouseY + 2;
```

For every row print rectangles along the X axis as well.

```js
for(var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
        fill(255);
        rect(gridX, gridY, stepX, stepY);
    }
}
```
