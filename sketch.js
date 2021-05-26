var backgroundImg;
var snowimg;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snowimg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  snowgroup = new Group;
}

function draw() {
  background(backgroundImg);  

  spawnSnow();

  drawSprites();
}

function spawnSnow() {

  if (frameCount % 100 === 0) {
    snow = createSprite(Math.round(random(50,750)),0,10,10);
    snow.addImage(snowimg);
    snow.scale = random(0.05,0.1);
    snow.velocityX = Math.round(random(-1,1));
    snow.velcoityY = -3;

    snowgroup.add(snow);
  }
  
}