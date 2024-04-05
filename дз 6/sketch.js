var groundHeight;
var mountain1;
var mountain2;
var tree;
var moon;
var sun;
var darkness;
var cloudsa;
var cloudsb;
var cloudsc;

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isRight;
var isLeft;
var isFalling;
var isPlummeting;
var speed;
var jump_speed;

function setup() {
  createCanvas(800, 600);
  groundHeight = (height / 3) * 2;

  mountain1 = {
    x: 400,
    y: groundHeight,
    height: 320,
    width: 230
  };
  mountain2 = {
    x: 550,
    y: groundHeight,
    height: 200,
    width: 130
  };

  tree = {
    x: 150,
    y: groundHeight - 150,
    trunkWidth: 40,
    trunkHeight: 150,
    canopyWidth: 120,
    canopyHeight: 100
  };

  sun = {
    x: 150,
    y: 70,
    diameter: 80,
  };

  moon = {
    x: 700,
    y: 70,
    diameter: 80,
    brightness: 255 
  };
  cloudsa = {
    x: 50,
    y: 350,
    diameter: 80,
  };
  cloudsb = {
    x: 100,
    y: 275,
    diameter: 50,
  };
  cloudsc = {
    x: 10,
    y: 275,
    diameter: 60,
  }

  floorPos_y = groundHeight;
  gameChar_x = width/2;
  gameChar_y = floorPos_y;
  speed = 4;
  jump_speed = 17;
  isRight = false;
  isLeft = false;
  isFalling = false;
  isPlummeting = false;

}

function draw() {
  background(150, 200, 255);
  noStroke();

  fill(255, 255, 0);
  ellipse(sun.x - 80, sun.y, sun.diameter);

  fill(255, 255, 255);
  ellipse(cloudsa.x + 300, cloudsa.y / 2, cloudsa.diameter);

  fill(255, 255, 255);
  ellipse(cloudsb.x + 290, cloudsb.y / 2, cloudsb.diameter);

  fill(255, 255, 255);
  ellipse(cloudsc.x + 295, cloudsc.y / 2, cloudsc.diameter);

  fill(255, 255, 255, moon.brightness); 
  ellipse(moon.x, moon.y, moon.diameter);

  fill(70, 200, 0);
  rect(0, groundHeight, width, height - groundHeight);

  fill(120);
  triangle(mountain1.x, mountain1.y,
    mountain1.x + mountain1.width, mountain1.y,
    mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

  triangle(mountain2.x, mountain2.y,
    mountain2.x + mountain2.width, mountain2.y,
    mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

  fill(139, 69, 19); 
  rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
  fill(34, 139, 34); 
  ellipse(tree.x + tree.trunkWidth / 2, tree.y - tree.canopyHeight / 2, tree.canopyWidth, tree.canopyHeight);

  
   
 

  ///////////DRAWING CODE//////////

  if(isLeft && isFalling)
  {
    makeJump();
    drawJumpingLeft();
    gameChar_x -= speed;
  }
  else if(isRight && isFalling)
  {
    makeJump();
    drawJumpingRight();
    gameChar_x += speed;
  }
  else if(isLeft)
  {
    drawGoLeft();
    gameChar_x -= speed;
  }
  else if(isRight)
  {
    drawGoRight()
    gameChar_x += speed;
  }
  else if(isFalling || isPlummeting)
  {
    drawJumpingFront();
    makeJump();
  }
  else
  {
    drawStandingFront();
  }

}

function keyPressed() {
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);
  if (keyCode == RIGHT_ARROW) {
    isRight = true;
  }
  if (keyCode == LEFT_ARROW) {
    isLeft = true;
  }
  if (keyCode == 32) {
    isFalling = true;
  }
}

function keyReleased() {
  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);
  if (keyCode == RIGHT_ARROW) {
    isRight = false;
  }
  if (keyCode == LEFT_ARROW) {
    isLeft = false;
  }
}

function makeJump() {
  gameChar_y -= jump_speed;
  jump_speed -= 1;
  if (jump_speed == -18) {
    isFalling = false;
    jump_speed = 17;
  }
}

function drawJumpingLeft() {
  //Jumping to the left
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-60,30,30);
  //body
  fill(155,79,79);
  rect(gameChar_x-5,gameChar_y-45,12,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-3,gameChar_y-55,8,17);
  //leg_left
  fill(151,38,38);
  rect(gameChar_x-5,gameChar_y-23,15,10);
}

function drawJumpingRight() {
  //Jumping to the right
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-60,30,30);
  //body
  fill(155,79,79);
  rect(gameChar_x-5,gameChar_y-45,12,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-3,gameChar_y-53,8,17);
  //leg_right
  fill(151,38,38);
  rect(gameChar_x-10,gameChar_y-23,15,10);
}

function drawGoLeft() {
  //Walking to the left
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-50,30,30);

  //body
  fill(155,79,79);
  rect(gameChar_x-5,gameChar_y-35,12,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-3,gameChar_y-35,8,17);
  //leg_right
  fill(151,38,38);
  rect(gameChar_x-5,gameChar_y-13,10,15);
}

function drawGoRight() {
  //Walking to the right
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-50,30,30);
  //body
  fill(155,79,79);
  rect(gameChar_x-5,gameChar_y-35,12,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-3,gameChar_y-35,8,17);
  //leg_right
  fill(151,38,38);
  rect(gameChar_x-3,gameChar_y-13,10,15);
}

function drawJumpingFront() {
  //Jumping forwards
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-60,30,30);
  //body
  fill(155,79,79);
  rect(gameChar_x-10,gameChar_y-45,20,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-20,gameChar_y-45,10,15);
  //arm_right
  fill(151,38,38);
  rect(gameChar_x+10,gameChar_y-45,10,10);
  //leg_right
  fill(151,38,38);
  rect(gameChar_x+2,gameChar_y-23,8,15);
  //leg_left
  fill(151,38,38);
  rect(gameChar_x-10,gameChar_y-23,8,10);
}

function drawStandingFront() {
  //Standing facing front
  //head
  fill(218,169,193);
  ellipse(gameChar_x,gameChar_y-50,30,30);
  //body
  fill(155,79,79);
  rect(gameChar_x-10,gameChar_y-35,20,22);
  //arm_left
  fill(151,38,38);
  rect(gameChar_x-20,gameChar_y-35,10,15);
  //arm_right
  fill(151,38,38);
  rect(gameChar_x+10,gameChar_y-35,10,15);
  //leg_right
  fill(151,38,38);
  rect(gameChar_x+2,gameChar_y-13,8,15);
  //leg_left
  fill(151,38,38);
  rect(gameChar_x-10,gameChar_y-13,8,15);
}
