var mic, recorder, soundFile;
var mappingButton, recordingButton;
var blankSpaces;

var state; // mousePress will increment from Record, to Stop, to Play

function setupRecorder() {
  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();
}

function setupMapping() {
  mappingButton = createButton('Press to Interact');
  mappingButton.position(570, 670);
  mappingButton.mousePressed(toSpaces);
  mappingButton.class('button');
}

function toSpaces() {
  setupRecorder();
  state = 1;
  mappingButton.remove();
  setupSpaces();
}

function setupSpaces() {
  blankSpaces = [];
  for(var i = 0; i < 5; i++) {
    blankSpaces.push(createInput(''));
    blankSpaces[i].position(400, 200 + i * 60);
    blankSpaces[i].class('word');
  }
  for(var i = 0; i < 5; i++) {
    blankSpaces.push(createInput(''));
    blankSpaces[i + 5].position(600, 200 + i * 60);
    blankSpaces[i + 5].class('word');
  }
  recordingButton = createButton('Click to Record');
  recordingButton.position(530, 500);
  recordingButton.mousePressed(recorderPressed);
  recordingButton.class('button');
}

function recorderPressed() {
  getAudioContext().resume();
  if (mic.enabled && state == 1) {
    recorder.record(soundFile);
    recordingButton.html('Stop Recording');
    state = 2;
  }
  else if (state == 2) {
    recorder.stop();
    recordingButton.html('Play and Save');
    state = 3;
  }
  else if (state == 3) {
    soundFile.play();
    saveSound(soundFile, 'recording.wav'); // save file
    state = 4;
  }
}

function setup() {
  createCanvas(1280, 800);
  setupMapping();
  state = 0;
}

function renderMapping() {
  background(100, 230, 250);
  fill(122, 0, 255);
  fill(20, 10, 100, 40);
  noStroke();

  //contours
  ellipse(640, 400, 430, 430);
  ellipse(640, 400, 380, 380);
  ellipse(640, 400, 340, 340);
  ellipse(640, 400, 300, 300);
  ellipse(640, 400, 260, 260);
  ellipse(640, 400, 230, 230);
  ellipse(640, 400, 200, 200);
  ellipse(640, 400, 170, 170);
  ellipse(640, 400, 140, 140);
  ellipse(640, 400, 110, 110);
  ellipse(640, 400, 70, 70);

  //English
  fill(190,50,150);
  ellipse(640, 400, 20, 20);

  //germanic languages- reds
  //Dutch
  fill(255,0,0);
  ellipse(642, 450, 18, 18);

  //Scandinavian
  fill(178, 0, 104);
  ellipse(642, 350, 18, 18);

  //German
  fill(255,40,180);
  ellipse(590, 400, 18, 18);

  //Yiddish
  fill(255, 98, 5)
  ellipse(695, 400, 18, 18);

  //Cetic
  //Scottish
  fill(225, 160, 10);
  ellipse(700, 460, 18, 18);

  //Welsh
   fill(168, 121, 40);
   ellipse(640, 315, 18, 18);

  //Irish
  fill(225, 220, 25);
  ellipse(586, 460, 18, 18);

  //Italics
  //French
  fill(92, 226, 2);
  ellipse(586, 315, 18, 18);

  //Italian
  fill(160, 183, 45);
  ellipse(700, 315, 18, 18);

  //Spanish
   fill(0, 173, 141);
   ellipse(740, 400, 18, 18);

//Portugese
  fill(0, 169, 255);
  ellipse(640, 502, 18, 18);

  //Romanian
    fill(69,189,249);
  ellipse(540, 400, 18, 18);


  //helenic
  //Greek
  fill(19, 31, 247);
  ellipse(540, 320, 18, 18);

//Slavic

    //Polish
  fill(208, 159, 249);
   ellipse(640, 250, 18, 18);


  //Russian
  fill(78, 1, 145);
  ellipse(550, 520, 18, 18);
  //serbian
  fill(	146, 27, 249);
  ellipse(730, 520, 18, 18);

  //Semitic
  //Arabic
  fill(159, 1, 173);
  ellipse(550, 260, 18, 18);
  //Hebrew
  fill(160, 70, 1);
  ellipse(727, 260, 18, 18);

  //indo-iranian
  //hindi
  fill(160, 0, 53);
  ellipse(640, 590, 18, 18);
  //persian
   fill(252, 189, 197);
  ellipse(640, 210, 18, 18);

  //japanese
  fill(252, 237, 181);
  ellipse(740, 210, 18, 18);

   //korean
  fill(249, 249, 242);
  ellipse(570, 600, 18, 18);




  //key
  //english
  fill(190,50,150);
  rect(10,40,40,30);
  fill(0);
  text('English',55,60)
  //scandinavian
fill(255,0,0);
rect(10,130,40,30);
  fill(0);
  text('Scandinavian',55,90)
  //german
  fill(255,40,180);
  rect(10,100,40,30);
  fill(0);
  text('German',55,120)
  //dutch
  fill(178, 0, 104);
  rect(10,70,40,30);
    fill(0);
  text('Dutch',55,150)
  //yiddish
   fill(255, 98, 5);
   rect(10,160,40,30);
    fill(0);
  text('Yiddish',55,180)

  //Scottish
  fill(225, 160, 10);
  rect(10,190,40,30);
    fill(0);
  text('Scottish',55,210)
  //Irish
  fill(225, 220, 25);
   rect(10,220,40,30);
  fill(0);
  text('Irish',55,240)
  //Welsh
  fill(168, 121, 40);
  rect(10,250,40,30);
   fill(0);
  text('Welsh',55,270)



  //French
  fill(92, 226, 2);
   rect(10,280,40,30);
  fill(0);
  text('French',55,300)
  //Italian
   fill(160, 183, 45);
   rect(10,310,40,30);
  fill(0);
  text('Italian',55,330)
  //Spanish
   fill(0, 173, 141);
   rect(10,340,40,30);
  fill(0);
  text('Spanish',55,360)
  //Portugese
  fill(0, 169, 255);
   rect(10,370,40,30);
  fill(0);
  text('Portugese',55,390)
  //Romanian
   fill(69,189,249);
   rect(10,400,40,30);
  fill(0);
  text('Romanian',55,420)
  //Greek
   fill(19, 31, 247);
   rect(10,430,40,30);
  fill(0);
  text('Greek',55,450)
    //Polish
   fill(208, 159, 249);
   rect(10,460,40,30);
  fill(0);
  text('Polish',55,480)
  //Serbian
  fill(146, 27, 249);
  rect(10,490,40,30);
  fill(0);
  text('Serbian',55,510)
  //Russian
  fill(78, 1, 145);
  rect(10,520,40,30);
  fill(0);
  text('Russian',55,540)
 //arabic
  fill(159, 1, 173);
  rect(10,550,40,30);
  fill(0);
  text('Arabic',55,570)
  //hebrew
  fill(160, 70, 1);
  rect(10,580,40,30);
  fill(0);
  text('Hebrew',55,600)
    //hindi
  fill(160, 0, 53);
  rect(10,610,40,30);
  fill(0);
  text('Hindi/Urdu',55,630)
    //Persian
  fill(252, 189, 197);
  rect(10,640,40,30);
  fill(0);
  text('Persian',55,660)
    //Japanese
  fill(252, 237, 181);
  rect(10,670,40,30);
  fill(0);
  text('Japanese',55,690)
    //korean
  fill(249, 249, 242);
  rect(10,700,40,30);
  fill(0);
  text('Korean',55,720)

  text('All the languages falling on the same contour have a common ancestor.', 440, 110);
  text('Interact and explore similarities in related and non-related languages.',446,130);

  fill(0);

}

function renderSpaces() {
  background(255);
  //text('This project aims at finding out how languages overlap.', 440,100)
  text('Fill out words of your choice in English.', 482,80)
  text('Record the translations in your first or second language.', 440,105)
  text('You could do this with a friend speaking another tongue. ', 440, 130)
  text('Compare the translations of the words in different languages.', 428, 155)
  text('You could also do it solo.', 520, 180)
}

function renderRecording() {
  background(0, 255, 0);
}

function renderRecorded() {
  background(255, 0, 0);
  text('All recordings are saved in the iTunes library.', 470, 130)
  text('To listen to archives click on the iTunes icon.', 470, 155)
}

function draw() {
  switch (state) {
    case 0: {
      renderMapping();
      break;
    }
    case 1: {
      renderSpaces();
      break;
    }
    case 2: {
      renderRecording();
      break;
    }
    case 3: {
      renderRecorded();
      break;
    }
  }
}
