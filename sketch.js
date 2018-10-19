let canvSize = 400;
let canvOrigin = canvSize / 2;
let arrSize = 10000;
let points = [];
let iterator = 0;
let conTrue = 0;
let monitor;
let start;
let sampleInput;
let action = false;
let currentPi;
let piArr = [];
let resetButton;

function setup() {
    createCanvas(canvSize, canvSize);
    resetButton = createButton("RESET");
    resetButton.mouseClicked(reset)
    monitor = createP("");
    start = createButton("START");
    sampleInput = createInput(arrSize);
    start.mouseClicked(function () {
        if (action == false) {
            action = true;
        } else {
            action = false;
        }
    })
    createRandomPoints();


}

let reset = () => {
    action = false;
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
    chartUpdate();
    if (iterator >= arrSize) {
        noLoop();
    }
    chartRun();
}
let drawBoard = () => {
    noFill();
    stroke(10);
    ellipse(canvSize / 2, canvSize / 2, canvSize, canvSize);
}

let drawPoints = () => {
    if (action) {
        fill(0);
        noStroke();
        if (dist(points[iterator][0], points[iterator][1], canvOrigin, canvOrigin) <= canvOrigin) {

            fill(255, 0, 0)
            conTrue++
        }
        ellipse(points[iterator][0], points[iterator][1], 3, 3)
        iterator++;
        currentPi = conTrue / iterator * 4;
        monitor.html(currentPi);
        piArr.push(currentPi);

    }
}
let chartUpdate = () => {

    return currentPi;
}




Plotly.plot('chart', [{
    y: [chartUpdate()],
    type: 'line'
}]);

let chartRun = () => {
    if (action == true) {
        Plotly.extendTraces('chart', {
            y: [
                [chartUpdate()]
            ]
        }, [0]);
    }
}




// setInterval(function () {
//     Plotly.extendTraces('chart', {
//         y: [
//             [chartUpdate()]
//         ]
//     }, [0])
// }, 100);