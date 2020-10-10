
var MovingRect;
var FixedRect;



function setup() {
  createCanvas(800,400);
  FixedRect=createSprite(700, 200, 50, 50);
  MovingRect=createSprite(200,200,60,70);

  FixedRect.shapeColor="green";
  MovingRect.shapeColor="green";

  FixedRect.velocityX=-3;
  MovingRect.velocityX=2;
}




function draw() {
 background(255,255,255);
 
 if(FixedRect.x-MovingRect.x < MovingRect.width/2+FixedRect.width/2 && 
  MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2 && 
  FixedRect.y-MovingRect.y < MovingRect.height/2+FixedRect.height/2 && 
  MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2 ){

   MovingRect.velocityX=MovingRect.velocityX*-1;
   FixedRect.velocityX=FixedRect.velocityX*-1;
   MovingRect.velocityY=MovingRect.velocityY*-1;
   FixedRect.velocityY=FixedRect.velocityY*-1;
  }

  else{
    MovingRect.shapeColor="green";
    FixedRect.shapeColor="green";
  }

  drawSprites();
}