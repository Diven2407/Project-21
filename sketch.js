var bullet, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  thickness = random(22, 83);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
  damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));
}

function draw() {
  background(0,0,0);
  bullet.collide(wall);
  if (damage >= 10) {
    wall.shapeColor = "red";
  }
  if (damage < 10) {
    wall.shapeColor = "green";
  }
  drawSprites();
}