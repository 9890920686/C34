class Ball {

    constructor(x,y){
    
    var options={'frictionAir':0.005,'density':1}
    
    this.body=Bodies.rectangle(x,y,50,50,options)
    
    this.width=30
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
    
        ellipseMode(RADIUS)
    
        stroke("red")
        strokeWeight(4)
    
        fill("blue")
    
        ellipse(0,0,this.width)
    
        pop();
    
    
    
    }
    
    }