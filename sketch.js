
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
push();

// piatti che vengono distribuiti
for (var j = 0; j<50; j = j + 10) {
  rectMode(CENTER);
  //distribuire dal centro dello schermo
  translate(windowWidth/2, windowHeight/2);
  rotate(s/15);
  fill('white');
  //forma del piatto che si ingrandisce con la musica
  ellipse(0,0, 3.6*p,3.6*p);
    ellipse(0,0, 2.6*p,2.6*p);



}
    pop();

    push();
    translate(windowWidth/2,windowHeight/4);
    //amp = ampiezza dello spettro.

    //fuoco d'artificio dietro lo starring che segue la frequenza della musica
if ( p >= 8) {
angleMode(RADIANS);
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 200, spectrum.length, 400, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 0, 290);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(255, i, i);

        line(0, 0, x, y);
    };
  };
    pop();

//titoli

push();
    textSize(1.8*s);
    fill('white');
    textAlign(CENTER);
    	text('2 Broke girls', windowWidth/2, windowHeight/10);

      pop();


      push();
      if (s >= 35 ) {
          textSize(1.6*s);
          textAlign(CENTER);
          fill('yellow');

          	text('Starring', windowWidth/2, windowHeight/5);
}
            pop();


            if (s >= 35 ) {
                textSize(1.8*s);
                textAlign(CENTER);
                fill('white');
                  text('Kat Dennings & Beth Behrs', windowWidth/2, windowHeight/3);
        }
                  pop();



                  push();
                      textSize(0.38*s);
                      fill('white');
                      textAlign(CENTER);
                      textFont('Arial');
                      	text('ATTENZIONE: distribuzione veloce di piatti', windowWidth/2, windowHeight/2.3);

                        pop();



  // put drawing code here
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
