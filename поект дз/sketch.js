function setup() {
	createCanvas(400, 400);
  }
  
  function draw() {
	background(0, 255, 100);

	stroke(0);
	strokeWeight(4);
	line(0, height / 3, width, height / 3);

	line(0, height * 2 / 3, width, height * 2 / 3);
  
	line(width / 3, 0, width / 3, height);

	line(width * 2 / 3, 0, width * 2 / 3, height);

	fill(255, 0, 0, 200);
	noStroke();
	ellipse(width / 6, height * 5 / 6, 50);

	fill(0, 0, 255, 100);
	noStroke();
	ellipse(width * 5 / 6, height / 6, 50);
  
	noFill();
	stroke(255, 0, 0);
	strokeWeight(4);
	ellipse(width / 2, height / 2, 50);

	stroke(255, 0, 0);
	line(0, height, width, 0);

	fill(255, 255, 0);
	noStroke();
	triangle(width / 6, height / 6, width / 6, height / 3, width / 3, height / 6);

	fill(0, 255, 255);
	noStroke();
	triangle(width * 5 / 6, height * 5 / 6, width * 5 / 6, height * 2 / 3, width * 2 / 3, height * 5 / 6);

	let squareSize = width / 5;
	let startY = height / 3 + (height / 3 - squareSize) / 2;

	fill(255, 0, 0);
	rect(width / 6 - squareSize / 2, startY, squareSize, squareSize);
  
  }
  