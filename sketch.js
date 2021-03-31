var canvas,bg;
var together;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
function preload() {
  bg=loadImage("images/garden.png");
  catImg1=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  catImg3=loadImage("images/cat4.png");
  
  
  mouseImg1= loadImage("images/mouse1.png");
  mouseImg2=loadImage("images/mouse2.png","images/mouse3.png");
  mouseImg3=loadImage("images/mouse4.png");
  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2) {
cat.velocityX=0;
cat.addAnimation("catLastImage", catImg3);
cat.changeAnimation("cat will stop");
cat.x=300;
cat.scale=0.2;

mouse.addAnimation("");
mouse.addAnimation("jerryLastImage",mouseImg3);
mouse.scale=0.15;
mouse.changeAnimation("mouseLastImage");
}
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    mouse.addImage("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }
  if(keyCode===RIGHT_ARROW){
    mouse.addImage("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }

}


