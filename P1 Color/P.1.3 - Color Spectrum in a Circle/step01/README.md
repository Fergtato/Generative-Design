# P.1.3 - Color Spectrum in a Circle - Step 1

## The Code

Define how many segments the triangle fan will be broken into.

```js
var segmentCount = 360;
```

Define the radius of the triangle fan.

```js
var radius = 300;
```

Create a simple triangle fan using hard coded vertex points. The first vertex is the centre point with the rest being the points on the outside. The last first needs to be the same as the first outside point to complete the shape.

```js
beginShape(TRIANGLE_FAN);
vertex(57.5, 50); //centre point
vertex(57.5, 15); //top
vertex(92, 50); //right
vertex(57.5, 85); //bottom
vertex(22, 50); //left
vertex(57.5, 15); //top
endShape();
```
