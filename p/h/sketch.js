let mySound;

function preload(){
  mySound = loadSound('jef.mp3');
}

function setup() {
  createCanvas(800,600);

  var button = createButton('Play');
  button.mousePressed(myFunction());
}

function draw() {
  background(0,0,155);
}

function myFunction() {
  mySound.setVolume(0.1);
  mySound.play(mySound);
}
