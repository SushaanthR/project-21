
var bullet,wall,thickness;
var speed,weight;
 
function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,60,height/2);

  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
    
}

function draw() {
  background(0); 
  wall.velocityX=0;
 
}
function hasCollided(){ 
if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5 * bulletweight * bulletspeed * bulletspeed/(thickness*thickness*thickness);

    if(damage>10){
       wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
    wall.shapeColor=color(0,255,0);
    }
  
  
  drawSprites();
}}