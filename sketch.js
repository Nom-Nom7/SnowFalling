const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var snowimg;

var snowflakes = [];

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snowimg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(backgroundImg);  

  if(frameCount % 90 === 0){
    snowflakes.push(new Snow(random(width/2-10,width/2+10),10,10));
  }

  for (var e = 0; e < snowflakes.length; e++) {
    snowflakes[e].display();
  }

  drawSprites();
}
