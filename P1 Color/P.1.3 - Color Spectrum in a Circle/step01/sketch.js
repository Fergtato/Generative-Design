//define how many segments the triangle fan will be broken into
var segmentCount = 360;
//define the radius of the triangle fan
var radius = 300;

function setup() {
    createCanvas(800, 800);
    // noStroke();
}

function draw() {
    //create a simple triangle fan using hard coded vertex points. The first vertex is the centre point with the rest being the points on the outside. The last first needs to be the same as the first outside point to complete the shape.
    beginShape(TRIANGLE_FAN);
    vertex(57.5, 50); //centre point
    vertex(57.5, 15); //top
    vertex(92, 50); //right
    vertex(57.5, 85); //bottom
    vertex(22, 50); //left
    vertex(57.5, 15); //top
    endShape();
}
