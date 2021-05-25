class Block{
    constructor(x, y, width, height) {
        var options = {
            friction : 0.01
          
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png")
        this.visibility = 255
      }
      display(){

        //console.log(this.body.speed)
        var angle = this.body.angle;
        var pos= this.body.position;


        if(this.body.speed < 3){

        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }

      else{
        push()
        //console.log("yes it doesnt work")
        this.visibility = this.visibility - 10
        World.remove(world,this.body);
        tint(255, this.visibility)
        imageMode(CENTER)
        image(this.image,this.body.position.x, this.body.position.y)
        pop()
      }
      }
}
