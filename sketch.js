var ground,box1,box2,box3,paper; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 500);

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color("yellow");

	boxSprite1=createSprite(850,440,200,20);
	boxSprite1.shapeColor = "white";
	boxSprite2=createSprite(950,400,20,100);
	boxSprite2.shapeColor = "white";
	boxSprite3=createSprite(750,400,20,100);
	boxSprite3.shapeColor = "white";

	boxSprite1.debug = true;
	boxSprite2.debug = true;
	groundSprite.debug = true;

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(75, 340, 50, {restitution:0.3, isStatic:false, friction:2.5, density:1.2});
	World.add(world, paperBody);
	
	ground = Bodies.rectangle(groundSprite.x, groundSprite.y + 35, groundSprite.width, 10, {isStatic:true});
	World.add(world, ground);
	ground.shapeColor = "yellow";

	box1 = Bodies.rectangle(850,440,200,20,{isStatic:true});
	World.add(world, box1);
	box2 = Bodies.rectangle(950,400,200,20,{isStatic:true});
	World.add(world, box2);
	box3 = Bodies.rectangle(950,400,200,20,{isStatic:true});
	World.add(world, box3);

	Engine.run(engine);
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  push();
  translate(paperBody.position.x, paperBody.position.y)

  ellipseMode(CENTER);
  ellipse(0, 0, 50);

  pop();

  //paperSprite.x= paperBody.position.x;
  //paperSprite.y= paperBody.position.y;
  //console.log(paperBody.body.position.x);
  drawSprites();
}
function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paperBody, paperBody.position, {x:380, y:-605});	
	}
}	