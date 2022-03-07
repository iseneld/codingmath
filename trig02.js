window.onload = function () {
  let canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  let centerY = height * 0.5,
    centerX = width * 0.5,
    offset = width / 4,
    baseRadius = width / 3,
    baseAlpha = 0.52,
    offsetAlpha = 0.1,
    speed = 0.01,
    angle = 0;

  function render() {
    let y = centerY * Math.sin(angle) + baseRadius;
    radius = baseRadius + Math.sin(angle) * offset;
    alpha = baseAlpha + Math.sin(angle) * offsetAlpha;

    context.lineWidth = 40;
    context.strokeStyle = "white";
    context.fillStyle =
      "rgba(" + y + ", " + radius / 2 + ", " + angle * 5 + ", " + alpha + ")";
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(centerX, y, radius, 0, Math.PI * 2, false);
    context.stroke();
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  }

  render();
};
