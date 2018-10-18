function setup() {
    createCanvas(720, 720);
    noCursor();

    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(mouseY / 2, 100, 100);

    fill(360 - mouseY / 2, 100, 100);
    rect(width/2, height/2, mouseX + 1, mouseX + 1);
}

//keyPressed function runs when a key is pressed...duh
function keyPressed() {
    //if the key pressed is equal to s, lowercase or capital, run the saveCanvas command and name it with a timestamp in the generative design library. This saves the canvas as a png.
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
