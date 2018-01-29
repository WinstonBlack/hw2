function draw() { 
var total = 10
var count = 0;
  while (count < total) {
    line(random(width), random(height), random(width), random(height));
    count = count + 1;
  }
}
