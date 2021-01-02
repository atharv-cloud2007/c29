class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")

    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }

    display(){
        image(this.image1,140,140,80,80)
        image(this.image2,110,140,50,50)
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("rgb(50,23,8)")
            line(pointA.x, pointA.y,125, 150);
            line(pointA.x, pointA.y,185, 150);
            image(this.image3,pointA.x-25,pointA.y-10,15,30)
        }
    }
    
}