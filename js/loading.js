var canvas = document.getElementById("loading");
canvas.width = 200;
canvas.height = 200;
canvas.style.backgroundColor = "white";

var ctx = canvas.getContext("2d");

var bigCircle = {
    center: {
        x: 100,
        y: 100
    },
    radius: 50,
    speed: 4
}

var smallCirlce = {
    center: {
        x: 100,
        y: 100
    },
    radius: 30,
    speed: 2
}

var progress = 0;

function loading() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    progress += 0.01;
    if (progress > 1) {
        progress = 0;
    }

    drawCircle(bigCircle, progress);
    drawCircle(smallCirlce, progress);

    requestAnimationFrame(loading);
}
loading();

function drawCircle(circle, progress) {
    ctx.beginPath();
    var start = accelerateInterpolator(progress) * circle.speed;
    var end = decelerateInterpolator(progress) * circle.speed;
    ctx.arc(circle.center.x, circle.center.y, circle.radius, (start - 0.5) * Math.PI, (end - 0.5) * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function accelerateInterpolator(x) {
    return x * x;
}

function decelerateInterpolator(x) {
    return 1 - ((1 - x) * (1 - x));
}