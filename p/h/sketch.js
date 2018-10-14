let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('audio/jef.mp3');
}

function setup() {
  createCanvas(800,600);

  mySound.setVolume(0.1);
  mySound.play();

  var button = createButton('Play');
  button.mousePressed(myFunction());
}

function draw() {
  background(0,0,155);
}

// function myFunction() {
//   mySound.setVolume(0.1);
//   mySound.play(mySound);
// }
