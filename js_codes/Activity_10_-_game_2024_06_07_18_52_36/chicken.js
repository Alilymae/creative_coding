//this is the character
class Chichi {
  constructor() {
    this.x = 130 //chickens position left n right
    this.y = height - 130 //chickens position up n down
    this.gravity = 0.45 //gravity so the chick wont fly
    this.lift = -15 //how high it jumps
    this.velocity = 0 //velocity
    this.onGround = true; //only makes the chick jump when its on the groynd
  }

  //shows the chicken n the image
  show() {
    image(charac, this.x, this.y, 90, 90)
  }

  //makes the chicken jump if on the gound
  jump() {
    if (this.onGround) { 
      this.velocity = this.lift
      this.onGround = false //no jumping in air
    }
  }

  //updates chicks velocity so he goes down with gravity
  move() {
    this.velocity += this.gravity
    this.y += this.velocity

    //higher base cus i dont want it to look flat
    if (this.y > height - 130) { 
      this.y = height - 130
      this.velocity = 0
      this.onGround = true; //true cus he landed on the floor
    }

    //if chicks position goes above canvas
    if (this.y < 0) {
      this.y = 0
      this.velocity = 0 //then velocity 0
    }
  }

  //colliding thing where chick hit car
  hits(car) {
    //detecs the collision
    return collideRectRect(
      this.x, this.y, 30, 90, //chickens size
      car.x, car.y, car.width, car.height //car pos n size
    )
  }
}
//THE END
//i hate this