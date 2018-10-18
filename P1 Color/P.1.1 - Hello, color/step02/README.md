# P.1.1 - Hello, Color - Step 2

## The Code

Hide the cursor on the canvas.

```js
noCursor();
```

Set the colour mode to HSB which stands for Hue, Saturation and Brightness and give it max values for each one.

```js
colorMode(HSB, 360, 100, 100);
```

Set the rect mode to centre so that the rectangle is drawn from the centre.

```js
rectMode(CENTER);
```

Turn off stroke so the rectangle has no border.

```js
noStroke();
```

Position the rectangle in the centre of the canvas using half of the width and height.

```js
rect(width/2, height/2, 100, 100);
```
