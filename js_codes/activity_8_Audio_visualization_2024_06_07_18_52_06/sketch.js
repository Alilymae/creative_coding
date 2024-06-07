//the sounds
var sound
var fft
//the background and line color
var bg
var ln
//flying particles
var smolc = []

//loads the sound
function preload() {
  // Sound 1 - nggyu.mp3 >:D
  // Sound 2 - maestro.mp3
  sound = loadSound("nggyu.mp3")
}

function setup() {
  angleMode(DEGREES)
  //sets canvas size to window
  createCanvas(windowWidth, windowHeight)
  fft = new p5.FFT()
  colorChange()
  // Changes colors every 3 secs
  setInterval(colorChange, 3000) 
}

function draw() {
  background(bg)
  stroke(ln)
  noFill()
  strokeWeight(3)
  translate(width / 2, height / 2)

  var w = fft.waveform()

  //uses for loop to make the circle whole
  for (var cc = -1; cc <= 1; cc += 2) {
    beginShape()
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, w.length - 1))
      var c = map(w[index], -1, 1, 140, 300)
      var a = c * sin(i) * cc
      var b = c * cos(i)
      vertex(a, b)
    }
    endShape()
  }

  //updates the partcile
  smolc.forEach(particle => particle.update())

  // adds new particles
  if (frameCount % 10 === 0) {
    smolc.push(new Particle())
  }

  // removes extra particles that goes out of the screen
  smolc = smolc.filter(particle => !particle.isOffScreen())
}

//pause and play option 
function mouseClicked() {
  if (sound.isPlaying()) {
    sound.pause()
    noLoop()
  } else {
    sound.play()
    loop()
  }
}

//color changer
function colorChange() {
  bg = color(random(255), random(255), random(255))
  ln = color(random(255), random(255), random(255))
}

//volume changer
// 87 = W, 83 = S
function keyPressed() {
  let vol = sound.getVolume()
  if (keyCode === 87) {
    vol = min(vol + 0.1, 1)
  } else if (keyCode === 83) {
    vol = max(vol - 0.1, 0)
  }
  sound.setVolume(vol)
}

// class for the particles
class Particle {
  //sets the positon, size, and color
  constructor() {
    this.x = random(-width / 2, width / 2)
    this.y = random(-height / 2, height / 2)
    this.size = random(5, 15)
    this.color = color(random(255), random(255), random(255))
    this.speed = createVector(random(-2, 2), random(-2, 2))
  }

  //updates the paticles based off speed, color, and etc
  update() {
    var amp = fft.getEnergy('bass') 
    this.size = map(amp, 0, 255, 5, 20)
    this.color = color(amp, random(255), random(255))

    this.x += this.speed.x
    this.y += this.speed.y
    fill(this.color)
    noStroke()
    ellipse(this.x, this.y, this.size)
  }

  isOffScreen() {
    return (
      this.x < -width / 2 || this.x > width / 2 ||
      this.y < -height / 2 || this.y > height / 2
    )
  }
}
//THE END