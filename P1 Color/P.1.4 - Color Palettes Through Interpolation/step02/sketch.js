var tileCountX = 20;
var tileCountY = 10;

//create arrays for the fill colors of the boxes on the left and right side
var colorsLeft = []
var colorsRight = [];
//create a colors array to save the lerp colors
var colors = [];

function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    //call the shakeColors function to fill the arrays with random colours
    shakeColors();
}

function draw() {
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;

    //initialise a variable for the inbetween colours
    var interCol;
    //clear the colors array each time (for when mouse movement is added)
    colors = [];

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        //set the starting and ending colour for lerp colour to mix between
        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];

        for (var gridX = 0; gridX < tileCountX; gridX++) {
            //map the amount value to between 0 and 1 as the lerpColor function takes a 0-1 value for amount
            var amount = map(gridX, 0, tileCountX - 1, 0, 1);
            //generate the inbetween colour for the current step on the x axis and use in fill
            interCol = lerpColor(col1, col2, amount);
            fill(interCol);

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            rect(posX, posY, tileWidth, tileHeight);

            //save the lerp color to the colors array
            colors.push(interCol);
        }
    }
}

function shakeColors() {
    //for however many tiles there are going down fill the arrays with random colours
    for (var i = 0; i < tileCountY; i++) {
        colorsLeft[i] = color(random(0, 180), random(0, 100), 100);
        colorsRight[i] = color(random(180, 360), 100, random(0, 100));
    }
}
