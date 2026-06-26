let molds = [];
const NUM_MOLDS = 4000;
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  d = pixelDensity();
  angleMode(DEGREES);
  background(0);

  for (let i = 0; i < NUM_MOLDS; i++) {
    molds.push(new Mold());
  }
}

function draw() {
  // Decay trails with a semi-transparent black overlay
  noStroke();
  fill(0, 18);
  rect(0, 0, width, height);

  // Load pixel buffer so molds can sense trail intensities
  loadPixels();

  for (let mold of molds) {
    mold.update();
  }

  updatePixels();

  // Deposit trails on top of decayed background
  for (let mold of molds) {
    mold.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
