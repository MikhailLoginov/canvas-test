const pointRadius = 2,
    maxAnimationRadius = 200,
    animationStep = 1;

var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    points = [],
    x,
    y,
    pointsNumber;

canvas.addEventListener("mousedown", function (e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    context.strokeStyle = document.getElementById("myColor").value;
    context.fillStyle = document.getElementById("myColor").value;
    context.beginPath();
    context.arc(x, y, pointRadius, 0, 2 * Math.PI, true);
    context.fill();

    pointsNumber = document.getElementById("myNumber").value;
    if (points.length < pointsNumber) {
        pointsNumber = points.length;
    };

    while (pointsNumber > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(points[points.length - pointsNumber][0], points[points.length - pointsNumber][1]);
        context.stroke();
        pointsNumber--;
    }

    points.push([x, y]);
});
