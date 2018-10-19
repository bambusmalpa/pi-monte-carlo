let canvSize = 400;
let canvOrigin = canvSize / 2;
let arrSize = 500;
let points = [];
let iterator = 0;
let conTrue = 0;
let monitor;
let start;
let sampleInput;

function setup() {
    createCanvas(canvSize, canvSize);
    monitor = createP("");
    start = createButton("START");
    sampleInput = createInput("PODAJ LICZBĘ");
    createRandomPoints();


}


let createRandomPoints = () => {
    for (let i = 0; i <= arrSize; i++) {
        let x = random(0, canvSize);
        let y = random(0, canvSize);
        points[i] = [x, y]
    }
}

function draw() {
    drawBoard();
    drawPoints();

    if (iterator >= arrSize) {
        noLoop();
    }
}
let drawBoard = () => {
    noFill();
    stroke(10);
    ellipse(canvSize / 2, canvSize / 2, canvSize, canvSize);
    rect(0, 0, canvSize - 1, canvSize - 1);
}

let drawPoints = () => {
    fill(0);
    noStroke();
    if (dist(points[iterator][0], points[iterator][1], canvOrigin, canvOrigin) <= canvOrigin) {

        fill(255, 0, 0)
        conTrue++
    }
    ellipse(points[iterator][0], points[iterator][1], 3, 3)
    iterator++;
    monitor.html(conTrue / iterator * 4)
}