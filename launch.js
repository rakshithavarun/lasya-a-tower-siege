class Launch{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1   
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var a=this.sling.bodyA.position;
            var b=this.pointB;
            strokeWeight(3);
            stroke("turquoise");
            line(a.x,a.y,b.x,b.y);
        }
    }
}