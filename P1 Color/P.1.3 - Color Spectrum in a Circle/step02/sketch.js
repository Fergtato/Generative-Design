var segmentCount = 360;
var radius = 300;

function setup() {
    createCanvas(800, 800);
    // noStroke();
}

function draw() {
    //define the amount that the angle will increase by, by dividing the circle (360) by the segment count
    var angleStep = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    //set the first vertex to the centre of the canvas
    vertex(width / 2, height / 2);

    //make a for loop that will create a vertex for every angle step the full way around the circle
    for (var angle = 0; angle <= 360; angle += angleStep) {
        //define the x and y coordinates of each vertex by adding cos and sin angle to centre point and multiplying it by the radius
        var vx = width / 2 + cos(radians(angle)) * radius;
        var vy = height / 2 + sin(radians(angle)) * radius;
        //display the vertex point using the coordinates
        vertex(vx, vy);
    }
    endShape();
}
