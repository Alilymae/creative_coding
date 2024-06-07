var img;
function preload(){//load the image
  img = loadImage("eye.png")
}
function setup() {
  createCanvas(400, 400)//canvas
}

function draw() {
  translate (-180, -220)//repositioning the img
  image(img, 0, 0)
  var v = map(mouseX, 0, width, 2, 20)//mouse interaction w/ filter
  filter(BLUR, v)//filter
}
//THE END