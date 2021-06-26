var path,pathImg;
var runner,runnerImg;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,20,20);
  path.addImage(pathImg);
  path. velocityY = 2;
  runner = createSprite(200,20,20,20);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1;
}
function draw() {
  if(path.y > 400){
    path.y = hieght/2;
  }
  background(0);
  drawSprites();
}
