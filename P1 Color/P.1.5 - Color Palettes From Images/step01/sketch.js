//the setup function runs before the draw function and does not loop. This is used to create or setup anything needed before the draw loop runs e.g. Canvas, Canvas Size, Color Mode.
function setup() {
    //initialise the canvas and give it its size in width and height
    createCanvas(720, 720);
}

//the draw function loops and can draw elements to the canvas
function draw() {
    //set the colour of the background
    background(255,255,255);

    //set the fill colour of the rectangle
    fill(0);
    //create a rectangle with (x position, y position, width, height)
    rect(0,0,100,100);
}
