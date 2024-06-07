function setup() {
  createCanvas(400, 400);//canvas
}

function draw() {
  background("#5168ae") //bg
  
  //the base of the alien
  fill("#ba2b2f")
  stroke (0)
  strokeWeight (2)
  translate ( width/2 - 150, 0) //moving from org point
  beginShape() //start shape
  vertex(-3, 159); //point in shape where curve and edges meet
  bezierVertex(-10, 100, 50, 0, 100, 100) //create curve
  bezierVertex (100, 100, 150, 200, 200, 100)
  bezierVertex( 200, 100, 250, 0, 300, 100)
  bezierVertex (350, 230, 101, 471 , -3, 160)
  endShape()
  
  //faial features
  stroke (0)
  fill(0)
  circle (100, 200, 20)
  circle (180, 200, 20)
  push()
  fill(220)
  stroke(220)
  circle (108, 194, 7)
  circle (187, 194, 7)
  pop()
  
  //The eyebrows
  ellipse(107, 180, 50, 5)
  ellipse(180, 180, 50, 5)
  
  //the mouth
  fill("#debf0c")
  ellipse(144, 250, 60, 40)
  fill(0)
  ellipse(144, 250, 30, 5)
  
  push()
}
//THE END >:d 