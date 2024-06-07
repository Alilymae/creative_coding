let trail = []//to store the values of the mouse's movements

function setup() {
  createCanvas(400, 400)//canvas
}

function draw() {
  background("#ffff")//bg

  //if mouseIsPressed then the point is created 
  if (mouseIsPressed) {
    let points = {
      x: mouseX,
      y: mouseY,
      color: color("#6a040f")//line color
    }
    //add the new point into the trail var
    trail.push(points) 
  }
  //for loop for the connection of the points which looks like a pen line
  for (let pen = 1; pen < trail.length; pen++) {
    //before and after is the points in which the line will be drawn
    let after = trail[pen]
    let before = trail[pen - 1]
    stroke(after.color)
    strokeWeight(2)
    line(after.x, after.y, before.x, before.y)//line and its positions 
    /*only problem is the lines connect even after cutting
    and idk how to fix it >:c*/
  }
}

//if s is pressed then the design saves
function keyPressed() {
  if (key === 's' || key === 'S') {
    save("design.jpg") //file name
  }
}
//headache
//THE END