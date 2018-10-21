# P.1.4 - Color Palettes Through Interpolation - Step 1

## The Code

Define the amount of rows and columns for the boxes.

```js
var tileCountX = 5;
var tileCountY = 10;
```

Define the width and height of the boxes by dividing the canvas dimensions by the tile counts.

```js
var tileWidth = width / tileCountX;
var tileHeight = height / tileCountY;
```

For loops to create boxes on both the x and y axis'.

```js
for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {

    }
}
```

Set the x and y position of each box by multiplying the boxes size by the grid position.

```js
var posX = tileWidth * gridX;
var posY = tileHeight * gridY;
```

Display the rectangle using all the calculated variables.

```js
rect(posX, posY, tileWidth, tileHeight);
```
