var sound = new Howl({
  src: ['audio/jef.mp3']
});

function setup() {
  var button = createButton('Play');
  button.mousePressed(myFunction());
}

function draw() {
  background(0,0,155);
}

// function myFunction() {
//   sound.play();
// }
