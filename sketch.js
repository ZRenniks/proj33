var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var X,Y
var man
var bg
var snowFlakes = [];

function preload() {
  bg=loadImage("snow2.jpg")
  man=loadImage("gingy.png")
  X = 200;
  Y = 340;
}
function setup() {
  createCanvas(1280,720);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);
  Engine.update(engine);

  if(keyDown("w")){
    Y = Y - 5
  }
  if(keyDown("s")){
    Y = Y + 5
  }
  if(keyDown("d")){
    X = X + 5
  }
  if(keyDown("a")){
    X = X - 5
  }
  image(man,X,Y,200,300);
  
  if(frameCount%2===0){
    snowFlakes.push(new Snow(random(0,1280), 10));
  }

  for (var p = 0; p < snowFlakes.length; p++) {
    var thisOneSnowflake = snowFlakes[p];
    thisOneSnowflake.display();
    if(thisOneSnowflake.body.position.y > 700) {
      snowFlakes.splice(p,1);
      thisOneSnowflake.remove();
    }
  }
  
   
  
}
function mouseReleased(){
  snowFlakes.push(new Snow(random(0,1280),10));
}