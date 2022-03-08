window.onload = function () {
  let canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  centerX = width / 2;
  centerY = height / 2;
  xradius = 300;
  yradius = 500;
  xangle = 0;
  yangle = 0;
  xspeed = 0.03;
  yspeed = 0.01;

  render();

  function render() {
    x = centerX + Math.cos(xangle) * xradius;
    y = centerY + Math.sin(yangle) * yradius;

    context.fillStyle =
      "rgba(" + y + ", " + xradius / 2 + ", " + x + ", " + 0.9 + ")";
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 80, 0, Math.PI * 2, false);
    context.fill();

    xangle += xspeed;
    yangle += yspeed;

    requestAnimationFrame(render);
  }
};
