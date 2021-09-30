var player, playerImage , airDefense1 ,airDefense1Image , airDefense2 , airDefense2Image ;
var enemyBase , enemyBaseImage , enemyHQ , enemyHQImage ;
var playerMissile , playerMissileImage , enemyMissile , enemyMissileImage ;

function preload(){ 
playerImage = loadImage("./assets/Jet.png");
airDefense1Image = loadImage("./assets/Air Defense 1.png");
airDefense2Image = loadImage("./assets/Air Defense 2.png");
enemyBaseImage = loadImage("./assets/background.jpg");
enemyHQImage = loadImage("./assets/Enemy HQ.png");
playerMissileImage = loadImage("./assets/Player missile.png");
enemyMissileImage = loadImage("./assets/Enemy Missile (1).png");

}

function setup(){
   createCanvas(windowWidth , windowHeight);

   player = createSprite(windowWidth - 150, 85 ,20,20);
   player.addImage(playerImage);
   player.scale =0.6;

   airDefense1 = createSprite(200,windowHeight - 100,10,10);
   airDefense1.addImage(airDefense1Image);
   airDefense1.scale =1.5;

   airDefense2 = createSprite(windowWidth - 200, windowHeight-100,10,10);
   airDefense2.addImage(airDefense2Image);
   airDefense2.scale = 2.0;

   enemyHQ = createSprite(windowWidth -600, windowHeight -200,10,10);
   enemyHQ.addImage(enemyHQImage);
   enemyHQ.scale = 1.5;




  

}


function draw(){
  background(enemyBaseImage);

 if(keyDown("LEFT_ARROW")) {
   player.x += -6;
 }

 if(keyDown("RIGHT_ARROW")) {
  player.x += 6;
}

  drawSprites();
}