//var of the items
let creationofadam //painting img 1
let imgquote //quote img 2

//loading the imgs
function preload(){
  creationofadam =loadImage("download.jpg")
  imgquote =loadImage("quote.jpg")
}

function setup() {
  //clip creation of adam
  createCanvas(600, 500)
  background("#D5B895")
  creationofadam.resize(300, 200) //img size
  let block = createGraphics(500,400) //layer
  block.rect(0, 0, 900, 300)
  block.canvas.getContext("2d").clip() //clip
  creationofadam.resize(510, 300)
  block.image(creationofadam, -10, 0)//img positioning
  image(block, 47, 50)// img and rect together postion
  
  //mask quote
  let blocktwo = createGraphics(500,90) //layer 2
  blocktwo.rect(0, 0, 1100, 100)
  imgquote.mask(blocktwo) //mask
  imgquote.resize(500, 90) //resize cus its too big
  blocktwo.image(imgquote, 0, 0)//img positioning
  image(blocktwo, 47, 340) // img and rect together postion
}
//THE END