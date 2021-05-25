class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB: pointB,
            length: 8,
            stiffness : 0.04

        }
    this.sling = Constraint.create(options)
    this.bodyA = bodyA
    this.pointB = pointB
    World.add(world, this.sling)

    }

    attatch(body){
        this.sling.bodyA = body
    }
    
    fly(){
        this.sling.bodyA = null
    }

  
    display(){

    
    if(this.sling.bodyA){
            strokeWeight(4)
            stroke(73,36,16)
            stroke("green")
    line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
    }
}