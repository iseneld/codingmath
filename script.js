window.onload = function() {
  var canvas = document.querySelector("#canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

  for (i = 0; i < 100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }
}