class Stone {
    constructor(x,y,radius) {
        var options={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)

    }
    display() {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        strokeWeight(2)
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}