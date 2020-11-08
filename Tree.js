class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.TreeW=400;
		this.TreeH=500;
		this.TreeThickness=10;
		
		this.image=loadImage("images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.TreeW, this.TreeThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.TreeH/2, this.TreeThickness, this.TreeH, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.TreeW/2, this.y-this.TreeH/2, this.TreeThickness, this.TreeH, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.TreeH/2,this.TreeW, this.TreeH)
			pop()
			
	}

}