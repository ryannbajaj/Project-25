class Log{
    constructor(x, y, width, height,angle) {
      
      
        var options = {
            isStatic: true,
            'restitution':0.2,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png")

        World.add(world, this.body);
      
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        //translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-65,this.width, this.height*5);
        pop();
    }
  };