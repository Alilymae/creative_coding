//variables
let chicken
let carvroom = [] //holds the cars
let gameState = "title" //tracks the game's state
let score = 0 //score
let charac, vroom, bg //imags

//preloads the imgs that we need
function preload() {
  charac = loadImage("chiga.png") //the chicken
  vroom = loadImage("car.png") //the car
  bg = loadImage("sebuneleben.jpg") //the bg
}

function setup() {
  createCanvas(700, 400) //canvas size
  chicken = new Chichi() //the chicken
}

//controls
//32 = spacebar, 87 = W, 38 = arrow_up
function keyPressed() {
  //if they press the controls then game starts
  if (gameState === "title" && (keyCode === 32 || keyCode === 87 || keyCode === 38)) {
    gameState = "playing"
  }
  
  //if the game is being played n they any of the controls then chicken jumps
  else if (gameState === "playing" && (keyCode === 32 || keyCode === 87 || keyCode === 38)) {
    chicken.jump()
  }
  
  //if the player loses then they press spacebar then it restarts
  else if (gameState === "gameover" && keyCode === 32) {
    resetGame()
    gameState = "title"
  }
}


function draw() {
  background(bg) //bg

  //the loop that updates the screens
  if (gameState === "title") {
    showTS()
  } else if (gameState === "playing") {
    playGame()
  } else if (gameState === "gameover") {
    showGOS()
  }
}

//the title screen
function showTS() {
  //design
  textSize(25) //text size
  fill(255) //black color
  textFont("times") //font
  textAlign(CENTER, CENTER) //alignmet

  //rect for bg contrast
  fill(0, 0, 0, 200)
  //rect size
  let rectWidth = 450
  let rectHeight = 200
  let rectX = (width - rectWidth) / 2
  let rectY = (height - rectHeight) / 2 - 20
  rect(rectX, rectY, rectWidth, rectHeight, 20); //corner radius

  // Draw text
  fill(255)
  //title of the game
  text("Why would the chicken cross the road?", width / 2, height / 2 - 20)
  textSize(20)
  //instructions to start the game
  text("Press Space, W, or Up Arrow to Start", width / 2, height / 2 + 20)
}

//when the game is playing fucntion
function playGame() {
  if (frameCount % 60 === 0 && random(1) < 0.3) { //adjusts the amount of cars
    let newCar = new Car()
    let overlap = false //doesnt allow cars to overlap

    //makes sures the cars does not overlap
    for (let car of carvroom) {
      if (newCar.x < car.x + car.width && newCar.x + newCar.width > car.x) {
        overlap = true
        break
      }
    }

    //adds new car if it doesnt overlap
    if (!overlap) {
      carvroom.push(newCar)
    }
  }

  //moves n shows each car
  for (let i = carvroom.length - 1; i >= 0; i--) {
    carvroom[i].move()
    carvroom[i].show()

    //checks if cars hits the chicken then it game over
    if (chicken.hits(carvroom[i])) {
      gameState = "gameover"
    } else {
      
      //add 1 score if car passed
      if (carvroom[i].x < chicken.x && !carvroom[i].counted) {
        score++
        carvroom[i].counted = true; //counts the car
      }

      //removes cars that passed already
      if (carvroom[i].x < -carvroom[i].width) {
        carvroom.splice(i, 1)
      }
    }
  }

  //shows chicken
  chicken.show()
  chicken.move()
}

//gameoverscreen
function showGOS() {
  //design
  //same old
  textSize(30)
  fill("white")
  textAlign(CENTER, CENTER)

  fill("black")
  let rectWidth = 400
  let rectHeight = 200
  let rectX = (width - rectWidth) / 2
  let rectY = (height - rectHeight) / 2 - 20
  rect(rectX, rectY, rectWidth, rectHeight, 10)

  //gameover messg
  fill(255)
  text("Game Over", width / 2, height / 2 - 50) 
  textSize(25)
  //shows score
  text("Score: " + score, width / 2, height / 2)
  text("Press Space to Restart", width / 2, height / 2 + 50)
}

  //restart option
function resetGame() {
  chicken = new Chichi() //new chicken
  carvroom = [] //clears array
  score = 0 //back to 0
  loop() //loops game
}
//after 8hrs of suffering, Im done
//THE END!