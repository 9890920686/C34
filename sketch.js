const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

var eng
var wld

var Ground,Groundb

var b1,b2,b3,b4,b5

var c1,c2,c3,c4,c5,c6

var wball,wrope

function setup(){

    createCanvas(1200,500)

    eng=Engine.create()
    wld=eng.world

    

    var options = {isStatic:'true'}

    
    
    Groundb=Bodies.rectangle(600,495,1200,10,options)

    World.add(wld,Groundb)

    b1 = new Block(800,465)
    b2 = new Block(800,415)
    b3 = new Block(800,365)
    b4 = new Block(800,315)
    b5 = new Block(800,265)

    c1 = new Block(850,465)
    c2 = new Block(850,415)
    c3 = new Block(850,365)
    c4 = new Block(850,315)
    c5 = new Block(850,265)
    c6 = new Block(850,215)

    wball = new Ball(400,300)
    wrope = new Rope(wball.body,{x:600,y:50})

}

function draw(){


    Engine.update(eng)


background(0);

rectMode(CENTER);

fill("red")
rect(Groundb.position.x,Groundb.position.y,1200,10)

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

c1.display();
c2.display();
c3.display();
c4.display();
c5.display();
c6.display();

wball.display();
wrope.display();

}

function mouseDragged(){

    Matter.Body.setPosition(wball.body,{x:mouseX,y:mouseY})
}

