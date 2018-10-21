# P.1.5 - Color Palettes From Images - Step 4

## The Code

Set key inputs to change the color sort modes using functions from the generative design library.

```js
function keyReleased() {
	if (key == '5') sortMode = null;
	if (key == '6') sortMode = gd.HUE;
	if (key == '7') sortMode = gd.SATURATION;
	if (key == '8') sortMode = gd.BRIGHTNESS;
	if (key == '9') sortMode = gd.GREYSCALE;
}
```
