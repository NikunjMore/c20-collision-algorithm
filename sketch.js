var fixedRect, movingRect
function setup() {
  createCanvas(1475,800);
  fixedRect=createSprite (900,400,50,50)
  movingRect=createSprite (600,400,100,100)
  movingRect.shapeColor="Green"
  fixedRect.shapeColor="purple"
  movingRect.debug=true
  fixedRect.debug=true
}

function draw() {
  background(0);  
  movingRect.y=World.mouseY
  movingRect.x=World.mouseX

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="Yellow"
    fixedRect.shapeColor="Yellow"
    }
    else{
      movingRect.shapeColor="Green"
      fixedRect.shapeColor="purple"
    }
  drawSprites();
}