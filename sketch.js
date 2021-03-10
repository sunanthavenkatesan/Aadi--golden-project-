const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var planet;

function setup() {
  var canvas=createCanvas(innerWidth,innerHeight);
  engine = Engine.create();
  world = engine.world;
  planet = new Planet(innerWidth/2,innerHeight/2,2)
}

function draw() {
  background(255,0,255); 
  Engine.update(engine);
  
 
  

  planet.display();
} 