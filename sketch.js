
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, line1, line2, line3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	line1 = createSprite(650, 600, 150, 20);
	line1.shapeColor= "white";
	
	line2 = createSprite(570, 535, 20, 150);
	line2.shapeColor = "white";
	
	
	line3 = createSprite(720, 535, 20, 150);
	line3.shapeColor = "white";
	
	
	paper = new Paper(100, 590, 15 );

	ground = createSprite(400, 610, 1000, 10);
	ground.shapeColor = "yellow";
  
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine);

	

}


function draw() {

	rectMode(CENTER);
  background(0); 
  
	
  
	paper.display();

	console.log();
		drawSprites();

keyPressed();
	 
}

function keyPressed(){

	if(keyDown === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85});	
	}

	 }




