
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  tree=loadImage("images/tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(950,350,30);
  mango2=new mango(1050,350,30);
	mango3=new mango(1010,315,30);
	mango4=new mango(1160,310,30);
	mango5=new mango(1105,265,30);
	mango6=new mango(1030,240,30);
	mango7=new mango(1065,185,30);
	mango8=new mango(968,280,30);

  stoneObj = new Stone(345,430,60);
  groundObject=new ground(width/2,600,width,20);
	slingshot = new Slingshot(stoneObj.body,{x:345,y:398})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,300,250,200,500);
  image(tree,900,100,300,600)

  
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display()
  slingshot.display()
  groundObject.display();
  isTouching(stoneObj,mango1)
  isTouching(stoneObj,mango2)
  isTouching(stoneObj,mango3)
  isTouching(stoneObj,mango4)
  isTouching(stoneObj,mango5)
  isTouching(stoneObj,mango6)
  isTouching(stoneObj,mango7)
  isTouching(stoneObj,mango8)
  
  text("X"+mouseX+","+"Y"+mouseY,40,20);
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function isTouching(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.radius/2 + object1.radius/2
    && object2.body.position.x - object1.body.position.x < object2.radius/2 + object1.radius/2
    && object1.body.position.y - object2.body.position.y < object2.radius/2 + object1.radius/2
    && object2.body.position.y - object2.body.position.y < object2.radius/2 + object1.radius/2) {
    
    Matter.Body.setStatic(object2.body,false);
  }
  
}