function setup() {
  createCanvas(400, 400);//canvas size
}

function draw() {
  background("#fffff")
  
  //bg
  fill ("#D3D3D3")
  rect (0, 60, 270, 180)
  
  //back wheel 
  fill ("#2C313A")
  ellipse (290, 275, 60, 56)
  ellipse (150, 255, 45, 50)
  
  //quad shapes for more defined look
  translate (-60, -75)
  fill ("#BA181B")
  noStroke()
  quad (104, 267, 316, 312, 319, 371, 104, 321)
  describe ('a 3d looking shape for the cars base')
  
  //bumper
  translate (27, -99)
  noStroke()
  quad (285, 412, 409, 396, 409, 441, 288, 470)
  
  //right window base
  translate (50, 11)
  noStroke()
  quad (93, 312, 159, 321, 176, 389, 62, 365)
  
  //front base window
  translate(48)
  noStroke()
  quad (159, 321, 231, 312, 269, 364, 174, 389)
  quad (228, 373, 172, 389, 244, 404, 368, 387)
  
  //hood of the car shade
  fill("#E5383B")
  quad (269, 364, 162, 380, 244, 404, 368, 387)
  translate (0, 1)
  quad (231, 312, 153, 306, 93, 312, 140, 323 )
  quad (62, 365, 23, 356, 72, 348)
  
  //main glass
  fill ('#23292F')
  quad (147, 330, 168, 380, 264, 364, 231, 320)
  quad (141, 332, 155, 376, 98, 364, 111, 325)
  quad (108, 324, 95, 362, 77, 356, 93, 320)
  
  //wheel casings
  fill ('#161A1D')
  quad (216, 455, 214, 432, 189, 417, 159, 417)
  quad (159, 417, 151, 425, 151, 440, 216, 455)
  quad (77, 422, 77, 409, 62, 399, 34, 413)
  quad (62, 399, 48, 396, 37, 399, 34, 413)
  
  //wheels
  translate (2, 27)  
  fill ('#161A1D')
  ellipse (182, 419, 64, 60)
  ellipse (53, 395, 45, 50)

  //side view mirror
  fill("#E5383B")
  translate (-15, -28)
  quad (161, 367, 170, 376, 173, 383, 156, 371)
  stroke('#BA181B')
  strokeWeight(1)
  ellipse (150, 365, 30, 15)
  
  //door details
  translate (13.5,-2)
  noStroke ()
  fill("#A4161A")
  quad (98, 364, 93, 364, 89, 376, 93, 376)
  translate (-0.5, 0)
  quad (89, 376, 89, 393, 93, 395, 93, 376)
  quad (89, 393, 89, 425, 93, 426, 93, 395)
  quad (89, 376, 89, 383, 113, 327, 109, 327)
  
  //door handle
  fill ("#161A1D")
  quad (102, 381, 111, 384, 111, 387, 102, 384)
  //spoilers
  quad (23, 344, 84, 331, 91, 318, 34, 330)
  quad (62, 360, 51, 337, 45, 339, 52, 357)
  
  //window shine
  fill ("#fffff")
  quad (217, 324, 251, 369, 244, 370, 211, 325)
  quad (200, 327, 235, 372, 231, 373, 196, 327)
  
  fill ("#161A1D")
  quad (250, 410, 355, 395, 350, 410, 248, 428)
  
  //plate number
  fill ("#fffff")
  translate (-9, 0)
  stroke ("#161A1D")
  quad (344, 422, 344, 441, 290, 451, 290, 430)

  //hood design
  translate (-3, 0)
  fill ("#161A1D")
  noStroke ()
  quad (239, 395, 244, 385, 264, 383, 272, 390)
  translate (45, -7)
  quad (239, 395, 244, 385, 264, 383, 272, 390)
}
//this took approximately 5 hours of figuring out how to place them
//THE END
