var car,carImage;
var bgImage,road;
var score=0;

function preload(){
  bgImage=loadImage("road.png");
  carImage=loadImage("blueCar.png");
  redCarImage=loadImage("redCar.png");
  pinkCarImage=loadImage("pinkCar.png")
}

function setup() {
  createCanvas(400,500);
  
  

  road=createSprite(100,200,200,300);
  road.addImage("road",bgImage);
 road.velocityY=20;

 car=createSprite(300,300,20,20);
 car.addImage("car",carImage)
 car.scale=0.7

 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;
 
 //create right Boundary
 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;
  

 
}

function draw() {
  background(0);  

  background(255);

  textSize(25)
  text("Score: "+ score, 100,100);
  score = score + Math.round(getFrameRate()/60);

  edges= createEdgeSprites();
  car.collide(leftBoundary);
  car.collide(rightBoundary);

  if(keyDown("right")){
    car.x=car.x+10
  }

  if(keyDown("left")){
    car.x=car.x-10
  }

   if(road.y>325){
    road.y=200;
}

redCars();
pinkCars();

  drawSprites();
}

function redCars(){
  if (frameCount % 80 === 0) {
  
    var redCar=createSprite(600,20,20);
    redCar.x=Math.round(random(100,350));
    redCar.addImage("redcar",redCarImage)
    redCar.scale=0.7
    redCar.velocityY=10
    redCar.lifeTime=150
}
}

function pinkCars(){
  if (frameCount % 150 === 0) {
  
    var pinkCar=createSprite(600,20,20);
    pinkCar.x=Math.round(random(100,350));
    pinkCar.addImage("pinkCar",pinkCarImage)
    pinkCar.scale=0.7
    pinkCar.velocityY=10
    pinkCar.lifeTime=150
}
}
