var cat;//cat varible for the img
function preload() { //loadingthe image
  cat = loadImage ("cat 2.jpg") //load the image
}

function setup(){
  createCanvas(400, 400) //canvas
  background(0)
}

function draw() {
  background(0)
  //mouse interaction
  x = mouseX
  y = mouseY
  //position
  image(cat, -120, -110);
  var c = get (x,y);
  fill(c);
  rect(x, y, 30 ,30) //pixel data shape
}
//THE END