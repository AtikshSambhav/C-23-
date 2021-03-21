// Giving nickname to Matter.Engine, Matter.World and Matter.bodies.
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld;
var ground;
var box;
var box2;
function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld= myEngine.world;

  //Creating Bodies/Objects
  ground=new Ground();
  box= new Box(200,200,50,50);
  box2=new Box(240,100,40,70);
  
}

function draw() {
  background("black"); 
  Engine.update(myEngine);
  //Drawing
  ground.display();
  box.display();
  box2.display();
  
  
  
}