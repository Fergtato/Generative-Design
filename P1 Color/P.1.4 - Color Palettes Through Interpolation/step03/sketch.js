var tileCountX = 20;
var tileCountY = 10;

var colorsLeft = []
var colorsRight = [];
var colors = [];

function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    shakeColors();
}

function draw() {
    //map the tile count x and y to the mouse position
    tileCountX = int(map(mouseX, 0, width, 2, 100));
    tileCountY = int(map(mouseY, 0, height, 2, 10));

    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;

    var interCol;
    colors = [];

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];

        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var amount = map(gridX, 0, tileCountX - 1, 0, 1);
            interCol = lerpColor(col1, col2, amount);
            fill(interCol);

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            rect(posX, posY, tileWidth, tileHeight);

            colors.push(interCol);
        }
    }
}

function shakeColors() {
    for (var i = 0; i < tileCountY; i++) {
        colorsLeft[i] = color(random(0, 180), random(0, 100), 100);
        colorsRight[i] = color(random(180, 360), 100, random(0, 100));
    }
}
