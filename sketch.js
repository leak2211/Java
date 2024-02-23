function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(100);
	rect(100, 100, 300, 300, 20)


	//robots antenna
	fill(130, 180, 201);
	ellipse(250, 70, 60, 60);

	fill(72, 9, 48);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 20, 80);
	point(175, 225);
	ellipse(325, 200, 20, 80);
	point(325, 175);


	//robots nose
	fill(255, 21, 68);
	ellipse(250, 300, 200, 50, 100, 100);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();
}