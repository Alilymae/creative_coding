let appsu

//csv data file
function preload() {
  table = loadTable('My Phone Apps screentime usage - Sheet1.csv', 'csv', 'header')
}

//canvas
function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  noLoop()
}

//the bg
function draw() {
  background(255)
  textAlign(CENTER, CENTER)
  
  //the text designs
  textSize(24)
  textStyle(BOLD) //becus im blind and reegular hurts my eyes
  textFont("times")
  fill(0)
  
  // Draw title
  text("MY PHONE APPS SCREEN TIME USAGE", width / 2, 100)
  
  //draw pie
  drawthepie(width / 2, height / 2 + 50, 300, table)
}

//function to draw the chart
function drawthepie(x, y, diameter, data) {
  let total = 0
  let values = []

  //storing values
  for (let i = 0; i < data.getRowCount(); i++) {
    let value = float(data.getString(i, 1).replace('%', ''))
    values.push({ key: data.getString(i, 0), value: value })
    total += value
  }

  //adding colors so its pretty
  let colors = [
    color("#FD7277"),
    color("#FD5E64"),
    color("#FD494F"),
    color("#FD353C"),
    color("#FD2128"),
    color("#FD0D15"),
    color("#DE020A"),
    color("#CA0209"),
    color("#B60208"),
    color("#A20207"),
    color("#8D0106")
  ]

  //start of the angles
  let sAngle = 0
  textSize(12)
  
  //draws the actual circle
  for (let i = 0; i < values.length; i++) {
    let key = values[i].key;
    let value = values[i].value;
    let angle = map(value, 0, total, 0, 360);
    stroke("white");
    fill(colors[i % colors.length]);
    arc(x, y, diameter, diameter, sAngle, sAngle + angle, PIE)

    /*this thing calculates the positions
    of the labels and theyre not even cus some app names are just too long*/
    let midAngle = sAngle + angle / 2
    
    //lnr (left and right)
    //und (up and down)
    let lnr = x + (diameter / 2 + 60) * cos(midAngle)
    let und = y + (diameter / 2 + 35) * sin(midAngle)
    
    //the lables
    fill(0)
    noStroke()
    text(key, lnr, und)
    
    //updates the angles
    sAngle += angle
  }
}
//THE END
//IM SO TIRED 