# P.1.1 - Hello, Color - Step 1

## The Code

The setup function runs before the draw function and does not loop. This is used to create or setup anything needed before the draw loop runs e.g. Canvas, Canvas Size, Color Mode.

```js
function setup() {}
```

Initialise the canvas and give it its size in width and height.

```js
createCanvas(720, 720);
```

The draw function loops and can draw elements to the canvas.

```js
function draw() {}
```

Set the colour of the background.

```js
background(255,255,255);
```

Set the fill colour of the rectangle. For now we'll just set it to black.

```js
fill(0);
```

Create a rectangle with the structure: (x position, y position, width, height)

```js
rect(0,0,100,100);
```
