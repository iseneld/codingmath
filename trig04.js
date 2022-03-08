window.onload = function () {
  let canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  centerX = width / 2;
  centerY = height / 2;
  radius = 300;
  xangle = 0;
  yangle = 0;
  xspeed = 0.05;
  yspeed = 0.07;

  render();

  function render() {
    x = centerX + Math.cos(xangle) * radius;
    y = centerY + Math.sin(yangle) * radius;

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, false);
    context.fill();

    xangle += xspeed;
    yangle += yspeed;

    requestAnimationFrame(render);
  }
};
