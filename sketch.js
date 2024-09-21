let m = [];
let numMolds = 6000;
let d;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  d = pixelDensity();

  for(let i = 0; i < numMolds; i++)
  {
    m[i] = new Mold(random(width), random(height), 1, random(360), 45, 10, 1);
  }

  background(0);
}

function draw() {
  background(0, 5);
  loadPixels();
  
  for(let i = 0; i < numMolds; i++)
  {
    m[i].update();
    m[i].display();
  }
}

function keyPressed()
{
  if(key == 'g')
  {
    saveGif('slimeMold', 5);
  }
}