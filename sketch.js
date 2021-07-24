
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball(100,200);
	ground1= new Ground (400, 650, 810, 100 );
	log1= new Log (700,525,30,150,PI/2);
	log2= new Log (500,525,30,150,PI/2);
	log3= new Log (600,585,170,30,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
	ball1.display();
    ground1.display();
	//log1.display();
	//log2.display();
	log3.display();


	if (keyDown(UP_ARROW)) {
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:10, y:-15})
}

  drawSprites();
 
}



