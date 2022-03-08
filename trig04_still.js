window.onload = function () {
  let canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    centerX = width / 2,
    centerY = height / 2,
    radius = 300,
    angle = 0,
    numObjects = 20,
    slice = (Math.PI * 2) / numObjects;

  for (i = 0; i < numObjects; i++) {
    angle = i * slice;

    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;

    // context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, false);
    context.fill();
  }
};
