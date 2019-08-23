
let blobs = [];
let preds = [];

let blob = new Blob(550, 550, 15, 5000, 300, 1, [0,255,0])
blobs.push(blob)
blob = new Blob(50, 50, 15, 5000, 300, 1,[0,255,0])
blobs.push(blob)

let food = [];
let fps = 1

function setup() {
  createCanvas(800, 800)
  background(0)
  for (i = 0; i < 50; i++) {
    let meal = new Food(random() * 800, random() * 800, 2500)
    food.push(meal)
  }
  frameRate(30)
}


function draw() {
  //Environment
  background(0)
  for (i = 0; i < food.length; i++) {
    food[i].draw()
  }
  for (i = 0; i < fps; i++) {
    let meal = new Food(random() * 800, random() * 800, 2500)
    food.push(meal)
  }

  //Blob
  for (b = 0; b < blobs.length; b++){
    for (i = food.length; i > 0; i--) {
      if (blobs[b].touching(food[i - 1])) {
        blobs[b].feed(food[i - 1].energy)
        food.splice(i - 1, 1);
      }
    }
    blobs[b].move(food);
    blobs[b].draw();
    blobs[b].reproduce(blobs)
    //console.log(blobs[b].energy)
  }
  for (b = blobs.length; b > 0; b--) {
    if (blobs[b - 1].isDead()) {
      blobs.splice(b - 1, 1);
    }
  }

  let avgSpeed = 0
  let avgRange = 0
  let avgSize = 0
  
  for (i = 0; i < blobs.length; i++){
    avgSpeed += blobs[i].speed
    avgRange += blobs[i].range
    avgSize += blobs[i].size   
  }

  avgSpeed = avgSpeed / blobs.length
  avgRange = floor(avgRange / blobs.length)
  avgSize = floor(avgSize / blobs.length)

  console.log("Population Size:", blobs.length)
  console.log("Average Speed:", avgSpeed)
  console.log("Average Range:", avgRange)
  console.log("Average Size:", avgSize)
}

