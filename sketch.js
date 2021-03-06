var hr;
var min;
var sec;


function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0);  
  hr = hour();
  min = minute();
  sec = second();


  console.log(hr);
  console.log(min);
  angleMode(DEGREES);

  hrAngle = map(hr,-90,12,0,360);
  minAngle = map(min,360,60,0,360);
  secAngle = map(sec,0,60,0,360);

  push();
  translate(400,400)
  rotate(secAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,150,0)
  pop();

  push();
  translate(400,400)
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(20);
  line(0,0,135,0)
  pop();

  push();
  translate(400,400)
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(12);
  line(0,0,270,0)
  pop();
  
  push();
  translate(400,400);
  noFill();
  strokeWeight(7)
  stroke(0,255,0);
  arc(0,0,640,640,270,secAngle);
  pop();

  push();
  translate(400,400);
  noFill();
  strokeWeight(20)
  stroke(255,0,0);
  arc(0,0,600,600,270,hrAngle);
  pop();
  push();
  translate(400,400);
  noFill();
  strokeWeight(12)
  stroke(0,0,255);
  arc(0,0,660,660,270,minAngle);
  pop();
  drawSprites();
}