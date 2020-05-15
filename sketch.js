const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pole1,pole2;
var b1,b2,b3;


function setup() {
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  pole1= new building(30,220,25,360);
  pole2=new building(375,220,25,360);

  b1=new building(90,300,70,200);
  b2=new building(160,310,57,190);
  b3=new building(230,270,70,280);
  b4=new building(310,280,60,250);
}

function draw() {
  background(0);  
  Engine.update(engine);
  triangle(100,140,)
  pole1.display();
  pole2.display();
  
  
  b1.display();
  triangle(55,198,125,198,90,130);
   b2.display();
   triangle(132,212,189,212,160,162);
   b3.display();
   triangle(195,128,266,128,230,55);
   b4.display();
   triangle(282,153,340,153,310,100);
   stroke("white");
   line(90,130,90,93);
   line(230,55,230,25);
   line(310,100,310,65);
   stroke("white");
   triangle(91,110,105,102,91,93);
   triangle(231,40,246,35,231,25);
   triangle(311,80,320,72,311,65);
  
}