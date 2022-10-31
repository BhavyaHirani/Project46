var bg, bg_img;
var balloon, balloon_anim;
var topObstacle1, topObstacle2;
var bottomObstacle1, bottomObstacle2, bottomObstacle3;
var topObs, topObs_group;
var bottomObs, bottomObs_group

function preload(){
  bg_img = loadImage("assets/bg.png");

  balloon_anim = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

  topObstacle1 = loadImage("assets/obsTop1.png");
  topObstacle2 = loadImage("assets/obsTop2.png");

  bottomObstacle1 = loadImage("assets/obsBottom1.png");
  bottomObstacle2 = loadImage("assets/obsBottom2.png");
  bottomObstacle3 = loadImage("assets/obsBottom3.png");
}

function setup(){
  createCanvas(600,600);

  bg = createSprite(300,300,50,50);
  bg.addImage(bg_img);

  balloon = createSprite(100,300,50,50);
  balloon.addAnimation("balloon",balloon_anim);
  balloon.scale = 0.4;

  topObs_group = new Group();
} 

function draw(){
  background(0);

  spawnObsTop();

  drawSprites();
}

function spawnObsTop(){
  if(World.frameCount % 150 === 0){
    topObs = createSprite(600, Math.round(random(60,100)), 10, 10)
    topObs.velocityX = -4;
    topObs.scale = 0.15;

    var rand = Math.round(random(1,2))
    switch(rand){
      case 1: topObs.addImage(topObstacle1);
              break;
      case 2: topObs.addImage(topObstacle2);
              break;
      default:break;        
    }
    topObs.lifetime = 200;
    topObs_group.add(topObs);
  }
} 