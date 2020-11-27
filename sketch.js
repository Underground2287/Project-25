const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var paper;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,660,width,20);
    box1 = new Dustbin(1200,650);
    paper = new Paper(200,450,60);

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    paper.display();

}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    }
}
