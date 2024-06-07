//var for the img
let romeoandjuliet

function preload(){
  romeoandjuliet =loadImage("sergio.jpg")//load the img
}

function setup() {
  //clip romeo and juliet by sergio cupido
  createCanvas(600, 500)//canvas
  background("#1D1111")
  romeoandjuliet.resize(300, 200) //img size
  
  let block = createGraphics(500,400) //layer
  block.rect(0, 0, 900, 300)
  block.canvas.getContext("2d").clip() //clip
  romeoandjuliet.resize(510, 300)
  block.image(romeoandjuliet, -10, 0)//img positioning
  image(block, 47, 50) // img and rect together postion
  
  //clip quote
  quote = createGraphics(width, height)
  quote.fill("white")
  quote.textFont("Times New Roman") //font
  quote.rect(47, 340, 500, 100)//rect size
  quote.erase() // erased so that bg color and text color is the same
  quote.textSize(23) //text size
  quote.textAlign(CENTER) //alignment of text
  quote.text("For never was a story of more woe,\nThan this of Juliet, and her, Romeo.", 300, 381) //nums are the position
  image(quote, 0, 0) //the quote canvas is main
}
//THE END