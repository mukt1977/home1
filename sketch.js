var fixRect,moveRect;

function setup() {
  createCanvas(1600,400);
 fixRect= createSprite(400, 200, 50, 50);
 this.fixRect.shapeColor="green";
  moveRect=createSprite(100,100,50,50);
  this.moveRect.shapeColor="red";
}

function draw() {
  background(0);  
   moveRect.x=World.mouseX;
   moveRect.y=World.mouseY;
   if (moveRect.x - fixRect.x<fixRect.width/2 + moveRect.width/2
      &&  moveRect.y - fixRect.y< fixRect.height/2 + moveRect.height/2
      && fixRect.x - moveRect.x<fixRect.width/2 + moveRect.width/2
      &&  fixRect.y - moveRect.y<fixRect.height/2 + moveRect.height/2
      
      ){
    this.fixRect.shapeColor="blue";
    this.moveRect.shapeColor="blue";
   }
   else {
    this.fixRect.shapeColor="green";
    this.moveRect.shapeColor="red";
   }
    
   
  drawSprites();
  }