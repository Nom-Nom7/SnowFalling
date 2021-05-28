const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var snowimg;

var ice = [];
var maxSnow=50;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
}

function draw() {
  background(backgroundImg);  

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

  drawSprites();
}
