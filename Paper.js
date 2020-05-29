class Paper{ 
    constructor(x,y){ 
        var options={ 
        'isStatic':false, 
        'friction':0.5, 
        'density':1.2

    } 
    this.body= Bodies.circle(x,y,50,options); 
    World.add(world, this.body);
}  
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("cyan");
    ellipse(pos.x, pos.y, 50,50);
  }

}  

