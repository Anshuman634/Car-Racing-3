var state=0;
var pcount=0;
var database,form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var track;
var ground;
var c1,c2,c3,c4;
var rank=0;
var check=0;
function preload()
{
    track=loadImage("track.jpg");
    ground=loadImage("ground.png");
    c1=loadImage("car1.png");
    c2=loadImage("car2.png");
    c3=loadImage("car3.png");
    c4=loadImage("car4.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game1=new Game();
  game1.getState();
  game1.start();



}
function draw()
{
  
  
  if(pcount===4)
  {
    game1.update(1);
    state=1;
  }
  game1.getState()

  if(state===1)
  {
    //drawSprites();
    //clear()
    game1.play();
  }
  if(state==2)
  {
    game1.end();
  }
  game1.getRank();
}