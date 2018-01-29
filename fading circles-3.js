// (A) Blood Drops

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(180-240), 75, 80);
  ellipse(random(width), random(height), random(10, 20));
}

// (B)

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(30-60), 75, 50);
  beginShape(TRIANGLES);
vertex(30, 75);
vertex(40, 20);
vertex(50, 75);
vertex(60, 20);
vertex(70, 75);
vertex(80, 20);
endShape();

  background(0, 0, 255, 0.1);
  fill(random(300-360), 75, 100);
  beginShape(TRIANGLES);
vertex(40, 85);
vertex(50, 30);
vertex(60, 85);
vertex(70, 30);
vertex(80, 85);
vertex(90, 30);
endShape();
}
