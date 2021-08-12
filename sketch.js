const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var leftWall
var rightWall
var bridge
var jointPoint
var jointLink
var stones=[]
var zombie,zombie1,zombie2,zombie3,zombie4
var backgroundImage
var breakButton

function preload() {
  zombie1 = loadImage("assets/zombie1.png")
  zombie2 = loadImage("assets/zombie2.png")
  zombie3 = loadImage("assets/zombie3.png")
  zombie4 = loadImage("assets/zombie4.png")
  backgroundImage = loadImage("assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  zombie = createSprite(width/2,height-110)
  zombie.addAnimation("lefttoright", zombie1,zombie2,zombie1)
  zombie.addAnimation("rightotleft", zombie3,zombie4,zombie3)
  zombie.scale = 0.1
  zombie.velocityX = 10

  breakButton = createButton("")
  breakButton.position(width-200,height/2-50)
  breakButton.class("breakButton")
  breakButton.mousePressed(handleButtonPress)

  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new Base(0,height-10,width*2,20,"#795548",true)
  leftWall=new Base(300,height/2+50,600,100,"#8d6e63",true)
  rightWall=new Base(width-300,height/2+50,600,100,"#8d6e63",true)
  bridge=new Bridge(15,{x:width/2-1000,y:height/2+30})
  jointPoint=new Base(width-300,height/2+30,40,20,"#8d6e63",true)
  Matter.Composite.add(bridge.body,jointPoint)
  jointLink=new Link(bridge,jointPoint)
  for (var i = 0; i <= 8; i++) {
    var x = random(width/2-200, width/2+300);
    var y = random(-20,140);
    var stone = new Stone(x,y,40,40)
    stones.push(stone)
  }
}

function draw() {
  background(backgroundImage);


  Engine.update(engine);
  ground.display()
  leftWall.display()
  rightWall.display()
  bridge.show()
  drawSprites()
  for (var i of stones) {
    i.display()
  }

  
  
}

function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
    bridge.breakButton();
  }, 1500);
}