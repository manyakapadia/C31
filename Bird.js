class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   if(this.body.position.x > 200 && this.body.velocity.x > 10){
      
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    }

    for(var positionIndex = 0; positionIndex<= this.trajectory.length - 1; positionIndex++){
    image(this.smokeImage, this.trajectory[positionIndex][0], this.trajectory[positionIndex][1]);
    }

    console.log(this.trajectory);


    super.display();
  }
}
