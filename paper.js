  class Paper{
	constructor(x,y,r)
	{
		this.image=loadImage("paper.png")

	var options={
        isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}

	function keyPressed() {
		if(keyCode === UP_ARROW)
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
		
	}
  }
  