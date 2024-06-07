//the cars
class Car {
  constructor() {
    this.width = 90 //car width
    this.height = 50 //car height
    this.x = width //left n right position
    this.y = height - 90 //up n down position
    this.speed = random(3, 4) //random speed between the no.
    this.counted = false //checks for scoring
  }

  //moves the car in the road
  move() {
    //moves car by minusing the x cords by speed
    this.x -= this.speed 
  }

  //shows the car image plus its pos in canvas
  show() {
    image(vroom, this.x, this.y, this.width, this.height)
  }
}
//THE END