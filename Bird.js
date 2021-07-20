class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.birdtrajectary = loadImage("sprites/smoke.png");
    this.trajectary = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>1 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      console.log(this.birdtrajectary);
      this.trajectary.push(position);
    }
 
    for(var i = 0;i<this.trajectary.length; i++){
image(this.birdtrajectary,this.trajectary[i][0],[i][1])
    }


  }
}
