const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;


var ice=[];
var maxSnow=50;
var boy;
var boyimg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  boyimg = loadImage("boy.png");
 
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  

if(frameCount % 175 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }

  boy = createSprite(1100,550);
  boy.addImage("boy",boyimg);
  boy.scale = 0.1;

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }      
  drawSprites();

}