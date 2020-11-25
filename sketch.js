
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, paper1, box1, box2, box3;

function preload()
{
	
dustbinImage = loadImage("dustbingreen image.png");

	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,370,1200,20);

	box1 = new Box(900,350,200,15);
	box2 = new Box(800,300, 15, 100);
	box3 = new Box(1000, 260, 15, 200);



	paper1 = new Paper(100,350, 50, 50);
	

  
}


function draw() {
  rectMode(CENTER);

  background(255,255,255);
  
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	paper1.display();

	image(dustbinImage, 900,225, 270, 270);

	Engine.update(engine);
 
}


function keyPressed () {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:140, y:-140});

	}
}














