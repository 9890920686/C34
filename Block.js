class Block {

constructor(x,y){

var options={'restitution':0.8,'friction':1,'density':0.04}

this.body=Bodies.rectangle(x,y,50,50,options)

this.width=50
this.height=50

World.add(wld,this.body)

}

display(){

    var posx=this.body.position.x
    var posy=this.body.position.y

    var angle=this.body.angle
    push();

    translate(posx,posy)

    rotate(angle)

    rectMode(CENTER)

    stroke("red")
    strokeWeight(4)

    fill("blue")

    rect(0,0,this.width,this.height)

    pop();



}

}