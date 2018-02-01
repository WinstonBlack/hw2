  //zelda symbol
  
function yourPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  
triangle(x+150, y+100, x+100, y+200, x+200, y+200);
triangle(x+150, y+200, x+125, y+150, x+175, y+150);// your code here!
}

background(255);
yourPatch(0, 0); // draw patch at upper-left

background(255);
yourPatch(width-301, height-301); // draw patch at lower-right
