class Snow{
    constructor(x,y){
        var options = {restitution: 1,friction: 0,isStatic:false}

    this.image= loadImage("snow4.webp");
    this.radius = 10;
    this.lifetime = 1000;
    this.body = Bodies.circle(x,y,this.radius,options); 
    World.add(world,this.body);
    }
    
    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
        }
    display(){
        push();
        
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    }
}