const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground; 
var d1,d2,d3,d4,d5;

function preload()
{
	
} 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new Paper(100,698);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	ground= new Ground(400,700,800,20);
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	
	d1=new Dustbin(520,630,10,100); 
	d2=new Dustbin(600,685,150,10); 
	d3=new Dustbin(680,630,10,100);  
	d4=new Dustbin(500,580,50,10);
	d5=new Dustbin(700,580,50,10);
	//d6=new Dustbin(500,580,50,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageBody.display(); 
  ground.display(); 
  d1.display(); 
  d2.display(); 
  d3.display(); 
  d4.display(); 
  d5.display(); 
  keyPressed();  
  keyDown();

 /* if(packageBody.body.position.x===600 && packageBody.position.y===630){ 
	packageBody.velocityX===-5; 
	packageBody.velocityY===5; 
	
}*/
  
 
}
function keyPressed(){ 
	if(keyCode === UP_ARROW) { 
		Matter.Body.applyForce(packageBody.body,packageBody.body.position, {x:20,y:-25});  
		
	} 
	
}  
function keyDown(){ 

	if(keyCode === DOWN_ARROW){ 
		Matter.Body.applyForce(packageBody.body,packageBody.body.position, {x:-5,y:5});  


	}

}
 