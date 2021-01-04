var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(650,30,20,20);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 3 , {restitution:1.1, isStatic:true, frictionAir: 2});
	World.add(world, starBody);

	console.log(starBody);
	
	

	Engine.run(engine);

	
	

}




function draw() {
  background(bgImg);

  Engine.run(engine);

  if(keyDown(LEFT)){
	  fairy.x = fairy.x - 10;
  }
  if(keyDown(RIGHT)){
	fairy.x = fairy.x + 10;
}

	star.x = starBody.position.x;
	star.y = starBody.position.y;

	if(starBody.position.y > 500){
		Matter.Body.setStatic(starBody, true);
	}


	text(mouseX + "," + mouseY, mouseX, mouseY);



  drawSprites();

}

function keyPressed() {

	if(keyCode === 32){
		 Matter.Body.setStatic(starBody, false);
		
	}
	
}
