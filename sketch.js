var bg;
var ground;
var elsa,elsaImage;
var topGround;
var obs1,obs2;
var top;
var cloudsGroup, cloudImage;
var snowflackes;



function preload(){
bg=loadImage("assets/bg 5.jpg");
cloudImage = loadImage("assets/clouds2.png");
  
elsaImage=loadImage("assets/elsa2.png");
obs1=loadImage("assets/m.png");
obs2=loadImage("assets/monster 2.jpg");
snowflackes=loadImage("assets/snow.png");

}





function setup() {
  createCanvas(1000,600);
  ground=createSprite(300,300,2000,600);
  ground.addImage("ground",bg);
  ground.scale=2.6;
 ground.velocityX=-3;

 elsa=createSprite(50,100)
 elsa.addImage("elsa",elsaImage);
 elsa.scale=0.2;

 topGround = createSprite(500,10,800,20);

 topGround.visible = false;


}

function draw() {
  background(255,255,255);
  if (ground.x<0) {
    ground.x=ground.width/2;
  } 
  topObs();
  elsa.y=World.mouseY;
  if (keyWentDown("space")) {
    shoot();
  }
  
  
  
  
  drawSprites();
}

function topObs() {
  if (World.frameCount%250===0) {
  var top= createSprite(500,300,40,40);
  top.addImage(obs1);
  top.scale=0.2
  
   top.velocityX=random(-5,5);
   top.y=random(100,500); 
   var r=Math.round(random(1,2));
  if (r===1) {
     top.addImage("top1",obs1);
   } else {
    top.addImage("top2",obs2);
   }



  }

}

function shoot() {
  var snow=createSprite(elsa.x,elsa.y);
  snow.addImage("snow",snowflackes);
  snow.velocityX=5;
  snow.scale=0.05;
}














