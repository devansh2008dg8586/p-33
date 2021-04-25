
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
var divisions =[];
var particles =[];
var plinko =[];

function preload()
{
	
}

function setup() {
	createCanvas(600, 700);

	var divisionHeight=300;

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	for(var k=15;k <=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}

	for(var j=75;j<=width;j=j+50){
		plinko.push(new Plinko(j,75,5));
	}

	for(var j=50; j<=width-10;j=j+50){
		plinko.push(new Plinko(j,175,5));
	}

	for(var j=75; j<=width;j=j+50){
		plinko.push(new Plinko(j,275,5));
	}

	for(var j=50;j<=width-10;j=j+50){
		plinko.push(new Plinko(j,375,5))
	}

	ground=new Ground(350,695,700,10)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  if(frameCount%30===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
  for(var k=0; k< divisions.length;k++){
	divisions[k].display();
  }
  for(var j=0; j< particles.length;j++){
	particles[j].display();
  }
  for(var j=0;j<plinko.length;j++){
	  plinko[j].display();
  }


  ground.display();
}



