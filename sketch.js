const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot, polygon;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //next bottom
  block17 = new Block(640,180,30,40);
  block18 = new Block(670,180,30,40);
  block19 = new Block(700,180,30,40);
  block20 = new Block(730,180,30,40);
  block21 = new Block(760,180,30,40);

  //second
  block22 = new Block(670,120,30,40);
  block23 = new Block(700,120,30,40);
  block24 = new Block(730,120,30,40);


  //third
  block25 = new Block(700,80,30,40);


  polygon = new Polygon(20,20,20,20)


  slingShot = new Slingshot(polygon.body, {x: 200, y: 100});

  console.log(block1.body.speed)
  

  

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  push()
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  slingShot.display();
  polygon.display();
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y: mouseY})  
}

function mouseReleased(){
  slingShot.fly()
}

function keyPressed(){
  if(keyCode === 32){
  slingShot.attatch(polygon.body);
}

}
