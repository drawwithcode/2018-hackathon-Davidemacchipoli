
var mySong;
var myImage;
//var button1;
//var button2;


function preload(){
  mySong = loadSound('./assets/openingsong.mp3');
  myImage = loadImage('./assets/scena2.png');

  // put preload code here
}

function setup() {

  createCanvas(windowWidth, windowHeight);


  mySong.setVolume(0.5);
  fft = new p5.FFT();
mySong.play();



//button1 = createButton('pause');
//button2 = createButton('play');

  // put setup code here
}

function draw() {

  var spectrum = fft.analyze();
    var s = map(spectrum[256], 0, 1024, 15, 200);
  var p = map(spectrum[256], 50, 500, 1, 40);
  //button1.position(windowWidth/2 + windowWidth/6, windowHeight/12);
  //button1.mousePressed(stop);


  //button2.position(windowWidth/2 - windowWidth/6, windowHeight/12);
//button2.mousePressed(Replay);

  background(220,20,60);
  fill('red');




  imageMode(CENTER);
     image(myImage, windowWidth/2, windowHeight/2, windowWidth/2*p, windowHeight/2*p);

  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2,18*s,0.6*s);
    rect(windowWidth/2,windowHeight/3,18*p,0.6*p);

    push();
    translate(windowWidth/2,windowHeight/2);
    //amp = ampiezza dello spettro.

    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 200, spectrum.length, 300, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 0, 290);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(255, i, i);
        line(0, 0, x, y);
    };
    pop();


    textSize(1.8*s);
    textAlign(CENTER);
    	text('2 Broke girls', windowWidth/2, windowHeight/10);




  // put drawing code here
};

function stop() {
  if(mySong.isPlaying()) {
   mySong.pause();
   }
}

function Replay() {
  if (mySong.isPaused()){
   mySong.loop();
   }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
