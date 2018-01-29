// (A)

function setup() {
  createCanvas(340, 340);
}

function draw() {
 line(170,170,random(width), random(height));
}

// (B)

function setup() {
  createCanvas(340, 340);
}

function draw() {
 line(random(width), random(height),340,0);
}

// (C)

function setup() {
	createCanvas(340, 340);
}

function draw() {
	var x1 = random(width);
	
	var x2 = random(width);
	var y2 = random(height);
	var y1 = 2*(x1 - x2) + y2
	line(x1, y1, x2, y2);

}

// (D)
function setup() {
	createCanvas(340, 340);
	colorMode(HSB);
}

function draw() {
	var x1 = random(width);
	stroke(x1,100, 100);
	var x2 = random(width);
	var y2 = random(height);
	var y1 = 2 * (x1 - x2) + y2;
	line(x1, y1, x2, y2);

}
