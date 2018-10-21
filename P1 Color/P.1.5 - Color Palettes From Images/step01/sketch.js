var img;

function preload() {
	//loads an image from the given path and creates a p5.Image from it
	img = loadImage('data/pic1.jpg');
}

function setup() {
	createCanvas(600,600);
	noStroke();

	//stops loop afect of the draw function
	noLoop();
}

function draw() {
	//loads pixel data from the image into the [pixels] attribute
	img.loadPixels();

	//returns the first value of the first pixel
	console.log(img.pixels[0]);

	console.log(img);
}
