// (A)

function setup() {
	createCanvas(100, 100);
	colorMode(HSB);
	strokeWeight(3);
	stroke(31);
	
	rect(20, 20, 60, 60); // rect 1
	strokeWeight(3);
	stroke(31);
	
	rect(1, 1, 20, 20); // rect 2
	strokeWeight(3);
	stroke(31);
	
	rect(1, 20, 20, 40); // rect 3
	strokeWeight(3);
	stroke(31);
	fill(240, 100, 0);
	
	rect(20, 20, 20, 60); // rect 4
	stroke(31);
	fill(360, 100, 100);
	
	rect(20, 1, 60, 20); // rect 5
	strokeWeight(3);
	stroke(31);
	
	rect(20, 1, 20, 20) //// rect 6
	strokeWeight(3);
	
	stroke(31);
	fill(200, 100, 100);
	rect(1, 50, 20, 30) //// rect 7
	
	stroke(31);
	noFill();
	rect(40, 50, 40, 30); // rect 8
	
	stroke(31);
	fill(60, 100, 100);
	rect(60, 50, 20, 30); // rect 9
	
	
}

// (B)

function setup() {
createCanvas(110, 110);
colorMode(HSB);
stroke(1);

fill(240,100,100);

ellipse(50, 50, 10, 10); // Circle 1

stroke(1);
line(50, 50, 70, 70); // line 1


ellipse(70, 70, 10, 10); // Circle 2
fill(360,100,100);
line(50, 50, 100, 40); // line 2


ellipse(100, 40, 10, 10); // Circle 3
fill(120,100,100);

line(100, 40, 70, 70); // line 4

line(70, 70, 100, 100); // line 5


ellipse(100, 100, 10, 10); // Circle 4
fill(360,100,0);
line(100, 100, 100, 40); // line 5

line(70, 70, 50, 80); // line 6

ellipse(50, 80, 10, 10); // Circle 5

line(50, 80, 50, 50); // line 7

line(50, 80, 100, 100); // line 8

line(100, 100, 40, 100); // line 9

ellipse(40, 100, 10, 10); // Circle 6

line(40, 100, 50, 80); // line 10

}
