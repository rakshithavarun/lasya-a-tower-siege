
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var polyimg;
var hexagon;
var launcher;

function preload(){
    polyimg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground(600,580,1200,20);

    stand=new Stand(730,440,180,20);

    block1=new Box(670,410,30,40);
    block2=new Box(700,410,30,40);
    block3=new Box(730,410,30,40);
    block4=new Box(760,410,30,40);
    block5=new Box(790,410,30,40);
    block6=new Box(685,370,30,40);
    block7=new Box(715,370,30,40);
    block8=new Box(745,370,30,40);
    block9=new Box(775,370,30,40);
    block10=new Box(700,330,30,40);
    block11=new Box(730,330,30,40);
    block12=new Box(760,330,30,40);
    block13=new Box(715,290,30,40);
    block14=new Box(745,290,30,40);
    block15=new Box(730,250,30,40);

    hexagon=Bodies.circle(250,300,20);
    World.add(world,hexagon);
   
    launcher=new Launch(this.hexagon,{x:100,y:200});

    
}

function draw(){
    background("black");

    Engine.update(engine);

    ground.display();

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    imageMode(CENTER);
    image(polyimg,hexagon.position.x,hexagon.position.y,40,40);

    launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}