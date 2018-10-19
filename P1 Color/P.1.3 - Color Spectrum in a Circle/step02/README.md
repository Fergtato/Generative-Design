# P.1.3 - Color Spectrum in a Circle - Step 2

## The Code

Define the amount that the angle will increase by, by dividing the circle (360) by the segment count.

```js
var angleStep = 360 / segmentCount;
```

Set the first vertex to the centre of the canvas.

```js
vertex(width / 2, height / 2);
```

Make a for loop that will create a vertex for every angle step the full way around the circle.

```js
for (var angle = 0; angle <= 360; angle += angleStep) {

}
```

Define the x and y coordinates of each vertex by adding cos and sin angle to centre point and multiplying it by the radius.

```js
var vx = width / 2 + cos(radians(angle)) * radius;
var vy = height / 2 + sin(radians(angle)) * radius;
```

Display the vertex point using the coordinates.

```js
vertex(vx, vy);
```
