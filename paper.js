class Paper{

    constructor(){
       
        var opt={
            density:1.2,
            restitution:1.3,
            friction:0
        }

        
        this.paperImage=loadImage("paper.png");

       
        this.paper=Matter.Bodies.circle(100,100,40,opt);
        Matter.World.add(world,this.paper)
        this.r=40;

    }

    display(){
        fill("grey")
        imageMode(CENTER)
        image(this.paperImage,this.paper.position.x,this.paper.position.y,this.r,this.r)
    }

}