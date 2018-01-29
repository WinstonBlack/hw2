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
