class Polygon{
    constructor(x,y,width,height){

        var options = {

        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("polygon.png")
        World.add(world, this.body)
       
    }    
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        

        image(this.image, 10,10, 60,60)
 
        pop()
    }
    
}