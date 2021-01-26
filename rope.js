class Rope{

constructor(bodyA,pointB){

var options={bodyA:bodyA,pointB:pointB,stiffness:0.5,length:400}

this.pointB=pointB

this.rope=Constraint.create(options)

World.add(wld,this.rope)

}

display(){

if(this.rope.bodyA){

    var pointA = this.rope.bodyA.position
    var pointB = this.pointB

    push();

    stroke("pink")
    strokeWeight(4)

    line(pointB.x,pointB.y,pointA.x,pointA.y)

    pop();

}

}

}