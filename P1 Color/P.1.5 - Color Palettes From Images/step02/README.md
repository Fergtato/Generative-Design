# P.1.5 - Color Palettes From Images - Step 2

## The Code

Define the number of tiles.

```js
var tileCount = 4;
```

Define the width of each tile.

```js
var rectSize = width / tileCount;
```

Empty the colors array each time the draw function loops.

```js
colors = [];
```

Loop through each row and column and work out a colour to be stored.

```js
for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

    }
}
```

Work out the x and y location of the pixel we need on the image.

```js
var px = int(gridX * rectSize);
var py = int(gridY * rectSize);
```

Convert this to an index value in the image pixels array.

```js
var i = (py * img.width + px) * 4;
```

Create the color object and push it to our colors array.

```js
var c = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
colors.push(c);
```
