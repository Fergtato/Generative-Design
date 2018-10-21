# P.1.5 - Color Palettes From Images - Step 1

## The Code

Load an image from the given path and create a p5.Image from it.

```js
img = loadImage('data/pic1.jpg');
```

Stop loop effect of the draw function.

```js
noLoop();
```

Load pixel data from the image into the [pixels] attribute.

```js
img.loadPixels();
```

Return the first value of the first pixel.

```js
console.log(img.pixels[0]);
```
