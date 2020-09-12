class Block extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.Visibility = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
    World.remove(world, this.body);
  }
 }
}