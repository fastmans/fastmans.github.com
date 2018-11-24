let circles = [];

let timer = 0;

let canvas;

let imgCircle;
let imgInnerCircle;
let imgCursor;

let counter=0;
let t=0;

var sound = new Howl({
  src: ['audio/sponge.mp3']
});

var jeff = new Howl({
  src: ['audio/jef.mp3']
});



function preLoad(){

}

function setup() {
  imgCircle = loadImage("assets/circle.png");
  imgInnerCircle = loadImage("assets/innercircle.png");
  imgCursor = loadImage("assets/cursor.png");
  canvas = createCanvas(1280,720);
  canvas.position(0,0);
  frameRate(60);
  sound.play();
}

function draw() {
  if(t<600){
  background(0);
  if (timer < 25){
    timer = timer + 1;
  } else {
  let temp = new Circle(150);
  circles.push(temp);
  timer=0;
  }
  for(let i of circles){
    i.show();
  }

  image(imgCursor,mouseX-40,mouseY-40,80,80);
  textSize(64);
  text(counter,20,80);
  text(round(map(t,0,600,10,0)),20,160)
  t++;
}else{
  sound.stop();
}}

function keyPressed(){
  for(let i of circles){
    i.clicked();
  }

}

class Circle{
  constructor(r){
    this.x = random(width);
    this.y = random(height);
    this.r = r;
    this.visible = true;
    this.timer=50;
    this.score=0;
    this.afterscore=0;
    this.pointpressed=0;
    while(this.x<this.r/2 || this.x > width-this.r/2){
      this.x = random(width);
    }
    while(this.y<this.r/2 || this.y > height-this.r/2){
      this.y = random(height);
    }
  }

  show(){
    if (this.visible==true){
      if(this.timer>0){
        noFill();
        stroke(255);
        strokeWeight(4);
        ellipse(this.x,this.y,map(this.timer,0,50,this.r-10,this.r+100));

      image(imgCircle,this.x-this.r/2,this.y-this.r/2,this.r,this.r);
      image(imgInnerCircle,this.x-this.r/2,this.y-this.r/2,this.r,this.r);}
    } else if(this.afterscore>=0){
      textSize(32);
      text(this.score,this.x,this.y);
      this.afterscore = this.afterscore - 1;
    }
    this.timer=this.timer-1;
  }

  clicked(){
    if(dist(mouseX,mouseY,this.x,this.y)<(map(this.timer,0,50,this.r-10,this.r+100))/2){
      if(this.timer>-10){
      if(keyCode==90 || keyCode==88 || keyCode==89 || keyCode==87){
        if(this.visible==true){
          if(this.timer>25){
            this.score="300";
            counter+=300;
          }else if(this.timer>15){
            this.score="100";
            counter+=100;
          }else{
            this.score="50";
            counter+=50;
          }

          this.visible=false;
          this.afterscore=30;
          jeff.play();
        }
      }
      }
    }

  }


}
