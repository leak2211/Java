/*

The Game Project

Week 3

Game interaction

*/

var mountain = {
    mountainX1: 300,
    mountainY1: 432,
    mountainX2: 600,
    mountainY2: 100,
    mountainX3: 900,
    mountainY3: 432
};
var tree;
var groundHeight;
var treeHeight;
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isFalling;
var isRight;
var isPlummeting;
var speed;
var jumpSpeed;
var scorenow = 0;
var coin;



function setup()
{
	createCanvas(1024, 576);
	groundHeight = 400;
    treeHeight = 100;
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	speed = 4;
	jumpSpeed = 15;
	tree = {
        x: 200,
        y: groundHeight,
        trunkWidth: 30,
        trunkHeight: 20,
        canopyWidth: 120,
        canopyHeight: 100
    };
	coin = {
		x: 200,
		y: floorPos_y,
		radius: 30
	}
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	// Draw the mountain
    noStroke();
    fill(100, 100, 100); // Gray color for the mountain
    triangle(mountain.mountainX1 + 70, mountain.mountainY1, mountain.mountainX2 + 70, mountain.mountainY2 - 50, mountain.mountainX3 + 70, mountain.mountainY3); // Draw a triangle for the mountain
    fill(250, 250, 250); // Gray color for the mountain
    triangle(mountain.mountainX1 + 170, mountain.mountainY1 - 130, mountain.mountainX2 + 70, mountain.mountainY2 - 50, mountain.mountainX3 - 25, mountain.mountainY3 - 130);
    fill(128, 128, 128); // Gray color for the mountain
    triangle(mountain.mountainX1, mountain.mountainY1, mountain.mountainX2, mountain.mountainY2, mountain.mountainX3, mountain.mountainY3); // Draw a triangle for the mountain
    fill(255, 255, 255); // Gray color for the mountain
    triangle(mountain.mountainX1 + 120, mountain.mountainY1 - 130, mountain.mountainX2, mountain.mountainY2, mountain.mountainX3 - 120, mountain.mountainY3 - 130);

    // Draw the tree
    fill(139, 69, 19); // Brown color for the trunk
    rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight + 20); // Draw the trunk

    fill(50, 190, 50); // Light green color for the first layer of leaves
    triangle(tree.x - 80, tree.y, tree.x, tree.y - 150, tree.x + 120, tree.y);
    fill(50, 100, 50); // Dark green color for the second layer of leaves
    triangle(tree.x + 35, tree.y, tree.x, tree.y - 150, tree.x + 120, tree.y);

    fill(50, 190, 50); // Light green color for the first layer of leaves
    triangle(tree.x - 70, tree.y - 50, tree.x, tree.y - 200, tree.x + 100, tree.y - 50);
    fill(50, 100, 50); // Dark green color for the second layer of leaves
    triangle(tree.x + 24, tree.y - 50, tree.x, tree.y - 200, tree.x + 100, tree.y - 50);

    fill(50, 190, 50); // Light green color for the first layer of leaves
    triangle(tree.x - 55, tree.y - 100, tree.x, tree.y - 250, tree.x + 80, tree.y - 100);
    fill(50, 100, 50); // Dark green color for the second layer of leaves
    triangle(tree.x + 17, tree.y - 100, tree.x, tree.y - 250, tree.x + 80, tree.y - 100);

    // 4. a canyon
    // NB. the canyon should go from ground-level to the bottom of the screen
    noStroke();
	fill(75,30,0);
	rect(25,450,150,100);
    fill(0,0,0);
    ellipse(100,453,150,50);
	//6. Sun
  //само солнце
  fill(255, 204, 0);
  noStroke(); 
  ellipse(width - 100, 100, 100, 100); //координаты
  // лучики
  for (let angle = 0; angle < 360; angle += 11.25) { 
    let x1 = width - 100 + cos(radians(angle - 5)) * 50;
    let y1 = 100 + sin(radians(angle - 5)) * 50;
    let x2 = width - 100 + cos(radians(angle)) * 100;
    let y2 = 100 + sin(radians(angle)) * 100;
    let x3 = width - 100 + cos(radians(angle + 5)) * 50;
    let y3 = 100 + sin(radians(angle + 5)) * 50;
    // полупрозрачность лучиков
    if (angle % 22.5 === 0) { 
      fill(255, 204, 0, 127); // полупрозрачный
    } else {
      fill(255, 204, 0); // просто желтый
    }
    triangle(x1, y1, x2, y2, x3, y3);
      
  }
  //облако    

  noStroke();
  fill(255);
  ellipse(200,100,50,25);
  ellipse(170,110,40,40);
  ellipse(170,95,40,40);
  ellipse(155,100,40,40);
  ellipse(210,110,50,25);
  ellipse(230,100,50,25);
  ellipse(190,120,50,25);
  ellipse(190,80,50,25);
  ellipse(220,90,50,25);
  ellipse(215,115,50,25);
  text("cloud", 200, 100);

  //door

  fill(0);
  rect(600,360,60,70);
  ellipse(630,360,60,60);


  
  


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		drawJumpingLeft();
		makeJump();
		gameChar_x -=speed;
		coincheck(coin);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		drawJumpingRight();
		makeJump();
		gameChar_x += speed;
		coincheck(coin);

	}
	else if(isLeft)
	{
		// add your walking left code
		drawGoLeft();
		gameChar_x -= speed;
		checkKan();
		coincheck(coin);

	}
	else if(isRight)
	{
		drawGoRight();
		gameChar_x += speed;
		checkKan();
		coincheck(coin);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		drawJumpingFront();
		makeJump();
		coincheck(coin);

	}
	else
	{
		// add your standing front facing code
		drawStandingFront();

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	fill(0);
	text("X: "+ mouseX,10,15);
	text("Y: "+ mouseY,10,45);
	text("gameChar_X: "+ gameChar_x,50,15);
	text("gameChar_Y: "+ gameChar_y,50,45);
	text("Score: "+ scorenow,10,75);
	drawCoin();
	

}

function drawCoin(){
	fill("yellow");
	stroke(5);
	ellipse(coin.x,coin.y,coin.radius);
	stroke(0)
}

function coincheck(coin){
	if (dist(gameChar_x,gameChar_y,coin.x,coin.y)<coin.radius){
		scorenow+=25;
		coin.x = random(100,600);
	}
}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	if (keyCode == RIGHT_ARROW){
		isRight = true;
	}
	if (keyCode == LEFT_ARROW){
		isLeft = true;
	}
	if (keyCode == 32){
		isFalling = true;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	if (keyCode == RIGHT_ARROW){
		isRight = false;
	}
	if (keyCode == LEFT_ARROW){
		isLeft = false;
	}
}

function makeJump() {
	gameChar_y -= jumpSpeed;
	jumpSpeed -= 1;
	if (jumpSpeed == -16){
		isFalling = false;
		jumpSpeed = 15;
	}
}
function drawJumpingLeft() {
	//Jumping to the left
	  //head
	  fill(200,150,150);
	  ellipse(gameChar_x,gameChar_y - 50, 30);
	  fill(250,0,0);
	  rect(gameChar_x - 5, gameChar_y - 35,10,30);
	  fill(0,0,0);
	  rect(gameChar_x - 5, gameChar_y - 5, 8,8);
}
  
function drawJumpingRight() {
	   //head
	   fill(200,150,150);
	   ellipse(gameChar_x,gameChar_y - 50, 30);
	   fill(250,0,0);
	   rect(gameChar_x - 5, gameChar_y - 35,10,30);
	   fill(0,0,0);
	   rect(gameChar_x - 3, gameChar_y - 5, 8,8);
}
  
function drawGoLeft() {
	   //head
	   fill(200,150,150);
	   ellipse(gameChar_x,gameChar_y - 50, 30);
	   fill(250,0,0);
	   rect(gameChar_x - 5, gameChar_y - 35,10,30);
	   fill(0,0,0);
	   rect(gameChar_x - 5, gameChar_y - 5, 8,8);
}
  
function drawGoRight() {
		  //head
		  fill(200,150,150);
		  ellipse(gameChar_x,gameChar_y - 50, 30);
		  fill(250,0,0);
		  rect(gameChar_x - 5, gameChar_y - 35,10,30);
		  fill(0,0,0);
		  rect(gameChar_x - 3, gameChar_y - 5, 8,8);
}
  
function drawJumpingFront() {
	   //head
	   fill(200,150,150);
	   ellipse(gameChar_x,gameChar_y - 50, 30);
	   fill(250,0,0);
	   rect(gameChar_x - 10, gameChar_y - 35,20,30);
	   fill(0,0,0);
	   rect(gameChar_x + 1, gameChar_y - 5, 8,8);
	   fill(0,0,0);
	   rect(gameChar_x - 9, gameChar_y - 5, 8,8);
	   fill(0,0,0);
	   rect(gameChar_x - 9, gameChar_y - 5, 8,8);
	   fill(250,0,0);
	   rect(gameChar_x-20, gameChar_y-30,40,6);
	   fill(0,0,0);
}
  
function drawStandingFront() {
		  //head
		  if (gameChar_x > 600 && gameChar_x < 660){
			scorenow +=20;
			
		  }else{
		  fill(200,150,150);
		  ellipse(gameChar_x,gameChar_y - 50, 30);
		  fill(250,0,0);
		  rect(gameChar_x - 10, gameChar_y - 35,20,30);
		  fill(0,0,0);
		  rect(gameChar_x + 1, gameChar_y - 5, 8,8);
		  fill(0,0,0);
		  rect(gameChar_x - 9, gameChar_y - 5, 8,8);
		  fill(0,0,0);
		  rect(gameChar_x - 9, gameChar_y - 5, 8,8);
		  fill(250,0,0);
		  rect(gameChar_x-20, gameChar_y-30,40,6);
		  fill(0,0,0);
		  }
}

function checkKan(){
	if (gameChar_x > 44 && gameChar_x <142 ){
		gameChar_y = floorPos_y + 100;
	}else{
		gameChar_y = floorPos_y;
	}
}
