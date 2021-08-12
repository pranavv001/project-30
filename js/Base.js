class Base {
    constructor(x,y,width,height,color,isStatic) {
        var options ={
            isStatic:isStatic
        }
        this.x=this.x
        this.y=this.y
        this.width=this.width
        this.height=this.height
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.color=color 

    }
    display() {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill(this.color)
        rect(0,0,this.width,this.height)
        pop()
    }
}