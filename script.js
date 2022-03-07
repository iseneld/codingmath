window.onload = function() {
  var canvas = document.querySelector("#canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

  console.log(width, height);
  context.fillRect(0, 0, width, height);
}