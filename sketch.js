
var line1;
var line2;
var line3;
var car1;
var car2;
var car3;
var car4;
var wall1;
var wall2;
var wall3;
var wall4;
function setup() {
  createCanvas(800,400);
  line1=createSprite(400, 100, 800, 5);
  line2=createSprite(400, 200, 800, 5);
  line3=createSprite(400, 300, 800, 5);
  
  car1=createSprite(10,50,20,20);
  car2=createSprite(10,150,20,20);
  car3=createSprite(10,250,20,20);
  car4=createSprite(10,350,20,20);

  wall1=createSprite(790,55,15,50);
  wall2=createSprite(790,155,15,50);
  wall3=createSprite(790,255,15,50);
  wall4=createSprite(790,355,15,50);

 
}

function draw() {
  background(0); 

  car1.shapeColour("white");

  drawSprites();
}