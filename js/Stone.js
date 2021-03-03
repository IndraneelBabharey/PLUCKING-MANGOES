class Stone  {
    constructor(x,y,radius){
        var options = {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 1.2
        }
      
		    
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display()
    {
      var stoneP=this.body.position;	
      push()
      translate(stoneP.x, stoneP.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      ellipseMode(RADIUS);
      
      image(this.image, 0,0,this.radius, this.radius)
      pop()
   }



  }
