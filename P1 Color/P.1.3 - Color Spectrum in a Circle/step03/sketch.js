var segmentCount = 360;
var radius = 300;

function setup() {
    createCanvas(800, 800);
    noStroke();
}

function draw() {
    //set colour mode to HSB setting the hue max to 360 for the circle and saturation and brightness to the canvas width and height for the mouse interactivity
    colorMode(HSB, 360, width, height);
    background(360, 0, height);

    var angleStep = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);

    for (var angle = 0; angle <= 360; angle += angleStep) {
        var vx = width / 2 + cos(radians(angle)) * radius;
        var vy = height / 2 + sin(radians(angle)) * radius;
        vertex(vx, vy);
        //the segment fill hue changes as it goes around the circle using the angle variable and the mouse position controls the saturation and brightness
        fill(angle, mouseX, mouseY);
    }
    endShape();
}
