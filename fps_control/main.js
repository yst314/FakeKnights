var box = document.getElementById('box'),
    boxPos = 10,
    limit = 300,
    boxVelocity = 0.08,
    delta = 0;


function draw() {

    box.style.left = boxPos + 'px';
}

function update(delta) {
    boxPos += boxVelocity * delta;
    if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

var lastFrameTimeMs = 0,
    maxFPS = 10;

function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta = timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;
    update(delta);
    draw();
    requestAnimationFrame(mainLoop);
}

// Start things off
requestAnimationFrame(mainLoop);