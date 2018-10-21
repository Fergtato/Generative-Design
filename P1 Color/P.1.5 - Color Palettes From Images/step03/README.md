# P.1.5 - Color Palettes From Images - Step 3

## The Code

Draw the colours from the colors array with rectangles.

```js
var i = 0;
for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

        fill(colors[i]);
        rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
        i++;
    }
}
```
