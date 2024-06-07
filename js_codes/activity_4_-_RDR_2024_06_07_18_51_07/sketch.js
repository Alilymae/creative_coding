//activity_4
function setup() {
  createCanvas(400, 400) //canvas
  background("#0b090a") //bg color
}

function draw() {
  size = 15 //size of the spaces in line
  /*sc is the var scale for the smoothness of the Perlin noise,
  the greater the more messier looking*/
  let sc = 0.05 
  
  //for loop for the creation of the maze
  for (let m = 0; m < width; m += size + 0) {
    for (let a = 0; a < height; a += size + 0) {
      
      //creates the perlin noise w/ random values between -0.2 and 0.05
      n = noise (m * sc, a * sc)- 0.2
      z = random (5) //randomization 
      z = n * 4
      
      //if statements
      if (z < 1) { //if z is < 1 then line stroke is red
        stroke("#ba181b")
        //red line from top-l to bottom-r
        line (m, a, m + size, a + size) //
      }
      else { //if z is > 1 then line stroke is blue 
        stroke("#abc4ff")
        //blue line from top-r to bottom-l
        line (m, a + size, m + size, a) 
      }
    }
  }
}
//headache pt. 2
//THE END >:(