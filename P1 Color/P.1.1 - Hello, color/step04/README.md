# P.1.1 - Hello, Color - Step 4

## The Code

The keyPressed function runs when a key is pressed...duh.

```js
function keyPressed() {}
```

If the key pressed is equal to s, lowercase or capital, run the saveCanvas command and name it with a timestamp in the generative design library. This saves the canvas as a png.

```js
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
```

## Examples

![Example](examples/181018_162731_182.png?raw=true "Example 1")
![Example](examples/181018_162804_726.png?raw=true "Example 2")
![Example](examples/181018_162809_159.png?raw=true "Example 2")
