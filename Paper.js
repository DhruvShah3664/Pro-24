class Paper {
    constructor(x, y, radius) {
      var options = {
        'isStatic': true, 
        'restitution':0.2,
        'friction':0.3,
        'density':1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius, options);
     
      
      
      World.add(world, this.body);
    }
    display(){
      
   
      var pos =this.body.position;
      
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y,  this.radius, this.radius)
    }
  };