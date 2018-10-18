# P.1.1 - Hello, Color - Step 3

## The Code

Set the background's hue to the mouse Y position and divide by 2 as the canvas is double the size of the max value set for the hue.

```js
background(mouseY / 2, 100, 100);
```

Set the rectangles hue to 360 minus the mouse Y position divided by 2 to give a contrasting colour to the background.

```js
fill(360 - mouseY / 2, 100, 100);
```

Set the rectangles width and height to the mouse X position and add 1 to prevent the size from being 0.

```js
rect(width/2, height/2, mouseX + 1, mouseX + 1);
```
