class Paper
{

	constructor(x,y,r)
     
	{
     var options = {
 
      isStatic: false,
      restitution:0.3,
      friction:0,
      density:1.2

     }





		this.x=x;
		this.y=y;
		this.r=r;
		
	    this.image = loadImage("paper.png");
		

		this.Body=Bodies.circle(this.x,this.y,this.r);
		
		World.add(world, this.Body);
	
	}

	display()

	{

			var pos=this.Body.position
			

			

			push();

			translate(pos.x, pos.y);
            circle(0,0,this.r)
			rectMode(CENTER)
            image(this.image, 0,-this.Height/2,this.Width, this.Height)
			pop();

	
	}

}