function setup() {
  createCanvas(800,600);
}

function draw() {
  background(0,0,155);
  fill(0,155,0);
  rect(200,200,400,200);
  fill(0);
  textSize(128);
  text('Play', 280, 340);
}

function mousePressed(){
  if(mouseX>200 && mouseX<600 && mouseY>200 && mouseY<400){
    var sound = new Howl({
      src: ['audio/jef.mp3']
    });

    sound.play();
  }
}
