var spaceCraft,spaceCraftImg;
var spaceBgImg;
var boeingStarliner,boeingStarlinerImg1,boeingStarlinerImg2,boeingStarlinerImg3,boeingStarlinerImg4;
var gameState=5;
var invisibleGround;

function preload(){
     spaceCraftImg=loadImage("iss.png");
     spaceBgImg=loadImage("spacebg.jpg");
     boeingStarlinerImg1=loadAnimation("spacecraft1.png");
     boeingStarlinerImg2=loadAnimation("spacecraft2.png");
     boeingStarlinerImg3=loadAnimation("spacecraft3.png");
     boeingStarlinerImg4=loadAnimation("spacecraft4.png");
     
}
function setup() {
  createCanvas(2000,1000);

  spaceCraft=createSprite(400, 400, 50, 50);
  spaceCraft.scale=1.5;
  spaceCraft.addImage(spaceCraftImg);

  invisibleGround=createSprite(293,405,50,10);

  boeingStarliner=createSprite(333,800,50,50);
  boeingStarliner.scale=0.5;
  boeingStarliner.addAnimation("ideal",boeingStarlinerImg1);
  boeingStarliner.addAnimation("ideal1",boeingStarlinerImg2);
  boeingStarliner.addAnimation("ideal2",boeingStarlinerImg3);
  boeingStarliner.addAnimation("ideal3",boeingStarlinerImg4);
}

function draw() {
  background(spaceBgImg); 
 console.log("x: "+boeingStarliner.x);
 console.log("y: "+boeingStarliner.y);
  boeingStarliner.changeAnimation("ideal",boeingStarlinerImg1);
  if(gameState===0){
    boeingStarliner.changeAnimation("ideal3",boeingStarlinerImg4);
  }
  if(gameState===1){
    boeingStarliner.changeAnimation("ideal2",boeingStarlinerImg3);
  }
  if(gameState===3){
    boeingStarliner.changeAnimation("ideal1",boeingStarlinerImg2);
  }
  boeingStarliner.depth = spaceCraft.depth;
  spaceCraft.depth = spaceCraft.depth + 1;
 if(invisibleGround.isTouching(boeingStarliner) && boeingStarliner.x===293 && boeingStarliner.y===550){
   fill("white")
   textSize(64);
   text("Docking Successful!",763,780)
 }

  drawSprites();
}
function keyPressed(){
    if(keyIsDown(RIGHT_ARROW)){
     
      boeingStarliner.x=boeingStarliner.x+10
      gameState=0;
      
    }
    if(keyIsDown(LEFT_ARROW)){
      
      boeingStarliner.x=boeingStarliner.x-10
      gameState=1;
      
    }
    if(keyIsDown(UP_ARROW)){
      
      boeingStarliner.y=boeingStarliner.y-10
      gameState=2;
     
    }
    if(keyIsDown(DOWN_ARROW)){
     
      boeingStarliner.y=boeingStarliner.y+10
      gameState=3;
      
    }
}