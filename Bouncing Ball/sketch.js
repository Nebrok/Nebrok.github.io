let x = 0;
let y = 0;
let x_speed = Math.random()*10;
let y_speed = Math.random()*10;
let yarp = true;
let pg;
let px = 10;
let py = 10;
let looping = true;

function setup() {
    createCanvas(750,750);
    background(0,0,0);
    pg = createGraphics(width,height);
    pg.background(0,0,0);
}

function draw() {
  for (let i = 0; i < 2; i++) {
    background(0,0,0);

    if (x > width || x < 0) {
      x_speed = x_speed * -1;
    }
    if (y > height || y < 0) {
      y_speed = y_speed * -1;
    }

    x += x_speed;
    y += y_speed;

    if (frameCount != 1) {
      pg.stroke(255);
      pg.strokeWeight(2);
      pg.line(px,py,x,y);
    }
    px = x;
    py = y;
    image(pg,0,0);   

    fill(255);
    noStroke();
    ellipse(x,y,10,10);
  } 
}

function mousePressed() {
  noLoop();
}
