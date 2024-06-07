var img, x, y

function preload() { //load the img
  img = loadImage("howl.jpg")
}

function setup() {
  createCanvas (400, 400)//canvas
  background(0)
  noStroke()//no stroke on the circles
}

function draw() {
  img.resize(400,400)//resizing the img
  x = random(width)
  y = random(height)
  //filling the canvas with circles
  var c = img.get(x, y)
  fill(c[0], c[1], c[2], 200)
  ellipse (x, y, 10, 10)//circle size
}
//THE END