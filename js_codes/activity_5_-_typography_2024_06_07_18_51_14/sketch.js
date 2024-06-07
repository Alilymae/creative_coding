//var for the font
var font;

function preload() { 
  font = loadFont("Whisper-Regular.ttf") }
  var a

 function setup() { 
  createCanvas(700, 400) //big canvas
  noStroke()
   
  /*converts the text into an array of points
  the sample factor is the amount of shapes in the outline*/
  a = font.textToPoints("Bath Spa University", 11, 
  220, 100, { sampleFactor: 0.19 }); 
  background("#b5e2fa") //bg of canvas
  
  //underline under text for design
  fill ("#03045e")
  rect (260, 240, 360, 2)
  rect (10, 240, 240, 2)

//for loop for the repetition of shapes as the outline of the font
for (var shape = 0; shape < a.length; shape++) { 
  var p = a[shape]
    rect (p.x, p.y, 4)
    //random for adding multiple colors into the rect
    fill (random(10), random(10), random(255))
  }
}
//THE END