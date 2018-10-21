var img;

var colors = [];

function preload() {
	img = loadImage('data/pic1.jpg');
}

function setup() {
	createCanvas(600,600);
	noStroke();
	noLoop();
}

function draw() {

	//define the number of tiles
	var tileCount = 4;

	//define the width of each tile
	var rectSize = width / tileCount;

	img.loadPixels();

	//empty the colors array each time the draw function loops
	colors = [];

	//loop through each row and column and work out a colour to be stored
	for (var gridY = 0; gridY < tileCount; gridY++) {
		for (var gridX = 0; gridX < tileCount; gridX++) {

			//work out the x and y location of the pixel we need on the image
			var px = int(gridX * rectSize);
			var py = int(gridY * rectSize);

			//convert this to an index value in the image pixels array
			var i = (py * img.width + px) * 4;

			//create the color object and push it to our colors array
			var c = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
			colors.push(c);
		}
	}

	console.log(colors);
}
