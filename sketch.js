
var posX;
var posY;
var value1;
var value2;
var value3;
var img;



function setup() {

    background(100);
  createCanvas(windowWidth,windowHeight);
//generateBall();
textFont('Sedgwick Ave');
textAlign(CENTER);
textSize(80);
text('Digital Action Painting', windowWidth/2, windowHeight/9-20);
textSize(50);
text('Create your screen saver', windowWidth/2, windowHeight/6 + 5);
textSize(30);
text('Tap the screen to start painting, keep on tapping to change color', windowWidth/2, (windowHeight/6) + 60);
text('Move your smartphone to color the screen', windowWidth/2, (windowHeight/6) + 100);
rectMode(CENTER);

  img = loadImage("assets/iphone-png-8.png");
//noFill();
//rect(width/2, height/2 +140, 900/2, 1600/2)
//noFill();
//rect(width/2, height/2 +180, 900/1.7, 1600/1.7)
}

function draw() {

movingman();
image(img, windowWidth/4 - 50, windowHeight/4, img.width/2, img.height/2);

}

function movingman() {

var posX = map (rotationY, -60,90,0, windowHeight);
var posY = map (rotationX, -45,45,0, windowWidth);
fill(value1,value2,value3);
noStroke();
ellipse(posX, posY, 30,30);
 }

//function generateBall(){
  //for (var i = 0; i < 5; i++) {
    //ellipse(random(0, width), random(0, height), 50);
  //}
//}


function touchStarted() {
  if (value1 === 0) {
    value1 = 0
  } else {
    value1 = random()*255;
  };
  if (value2 === 0) {
    value2 = 0
  } else {
    value2 = random()*255;
  };
  if (value3 === 0) {
    value3 = 0
  } else {
    value3 = random()*255;
  }
}
