var v = 1.0;

var o = 900;
//début var font
var message1 = "fill(255, 255, 255, 200);textSize(14);text(s, 330, 645, 100, 100); // Text wraps within text box  //710text(t, 365, 645, 100, 100);";
var message2 =  "if ( mouseX >= bounds2.x && mouseX <= bounds2.x + bounds2.w &&";
var message3 = "tint(255, transp); //ce paragraphe affiche le bouton skipad et module sa transparence";
var message4 = " copy(contenu,random(100,w),   random(100,h),    random(100,w)     ,random(100,h)     ,random(width/2)    ,random(height/";
var message5 = "xVideo = 0; //J'insère la video en haut à gauche";
var message6 =  "if (diskipad == true && playing) { //j'ai rajouté la condition playing pour q";
var message7 =  "p = (You can skip to video in  + (30-counter));";
var message8 = "contenu.volume(antivolume);";
var message9 =" (mouseX >= xtoggleFullscreen && mouseX <= (xtoggleFullscreen + xtoggleFullscr";
var message10 = "/bidon();      // modifie l'intervalle mais le fait dans la boucle draw (pour être actualisée) ";
var message11 = "if ((counter > 44) && (counter2 > 449)) { //condition d'arret de la video ";
var message12 =" var modFreq = map(di, 800, 0, modMinFreq, modMaxFreq);";
var message13 =" var volume = map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),0,1200,1, 0);";
var message14 =" vid = createVideo(['intempestif.mp4']);";
var message15 ="var counter2 = 0; // ce counter s'incremente en ms, ce qui permet a la barre de progresser continuellement";
var message16 ="var xtogglePlaying = 152; // 152  passer les coordonnées d'insertion zones à clicker en variables";
var message17 ="image(imgskipad, (1219 - imgskipad.width), 535); //600";
var message18 ="fill(map(di, 0, 800, 0, 255), map(di, 0, 800, 0, 255), map(di, 0, 800, 0, 255), 100);";
var message19 ="  var antivolume = map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),0,800,0,0.6);";
var message20 =" xVideo = 0; //J'insère la video en haut à gauche";

var  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize1 = 70,
  fontsize2 = 150,
  fontsize3 = 90,
  fontsize4 = 100,
  fontsize5 = 200,
  fontsize6 = 60,
  fontsize = 30,
  
  
  x1, y1, // x and y coordinates of the text
  x2, y2,
  x3, y3,
  x4, y4,
  x5, y5,
  x6, y6,
   x7, y7,
    x8, y8,
     x9, y9,
      x10, y10,
       x11, y11,
        x12, y12,
         x13, y13,
          x14, y14,
           x15, y15,
            x16, y16,
             x17, y17,
              x18, y18,
               x19, y19,
                x20, y20;
  
var bugSound;  //c'est le bruit que ferot les lignes de code chatouillées
var col1 = 0;   // couleur du texte
var col2 = 0;
var col3 = 0;
var col4 = 0;
var col21 = 0;   // couleur du texte
var col22 = 0;
var col23 = 0;
var col24 = 0;
var col31 = 0;   // couleur du texte
var col32 = 0;
var col33 = 0;
var col34 = 0;
var col41 = 0;   // couleur du texte
var col42 = 0;
var col43 = 0;
var col44 = 0;
var col51 = 0;   // couleur du texte
var col52 = 0;
var col53 = 0;
var col54 = 0;
var col61 = 0;   // couleur du texte
var col62 = 0;
var col63 = 0;
var col64 = 0;
var col71 = 0;   // couleur du texte
var col72= 0;
var col73= 0;
var col74 = 0;
var col81 = 0;   // couleur du texte
var col82 = 0;
var col83 = 0;
var col84 = 0;
var col91 = 0;   // couleur du texte
var col92 = 0;
var col93 = 0;
var col94 = 0;
var col101 = 0;   // couleur du texte
var col102 = 0;
var col103 = 0;
var col104 = 0;
var col111 = 0;   // couleur du texte
var col112 = 0;
var col113 = 0;
var col114 = 0;
var col121 = 0;   // couleur du texte
var col122 = 0;
var col123 = 0;
var col124 = 0;
var col131 = 0;   // couleur du texte
var col132 = 0;
var col133 = 0;
var col134 = 0;
var col141 = 0;   // couleur du texte
var col142 = 0;
var col143 = 0;
var col144 = 0;
var col151 = 0;   // couleur du texte
var col152 = 0;
var col153 = 0;
var col154 = 0;
var col161 = 0;   // couleur du texte
var col162 = 0;
var col163 = 0;
var col164 = 0;
var col171 = 0;   // couleur du texte
var col172 = 0;
var col173 = 0;
var col174 = 0;
var col181 = 0;   // couleur du texte
var col182 = 0;
var col183 = 0;
var col184 = 0;
var col191 = 0;   // couleur du texte
var col192 = 0;
var col193 = 0;
var col194 = 0;
var col201 = 0;   // couleur du texte
var col202 = 0;
var col203 = 0;
var col204 = 0;

//fin var font











var clic = 0;//cette variable me permet de savoir combien de fois on clique sur la fenetre
var temps; // cette variable me permet de prendre l'heure a laquelle l'effet slitscan commence

var m = 0;
var m2 = 0;
var m3 = 0; // ces variables globales servent a la fonction effetDeux()

var cdskipSound;


var tog = true; // cette variable me sert a annuler l'appel de togglepaying quand la pub est lancée

var cacheimgbarrelecture = false;
var cacheimgbarrepause = false;
var cacheimgskipad = false;
var cacheimg = false; // de base img est affiché
var cachecontenu = false; // de base le "contenu" n'est pas cachée
var cacheinfo = false; // de base, les traits de lecture et autres sont visibles
var cachetemps = false;


var volume;
var countereffet = 0 ; // ce countereffet sert a appeller la fonction effet 1 au bon moment
//début exemple fft
var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the frequency of the carrier

var analyzer; // we'll use this visualize the waveform

// the carrier frequency pre-modulation
var carrierBaseFreq = 220;

// min/max ranges for modulator
var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;
//fin exmeple fft

var fenetre3 = false;         // ce couple de variables me permet de prendre le temps du compteur general une seule fois
var fenetre3bis = true; 
var effet3 = false; // variable correspondant a la fonction effetDeux()
var soundeffect = false; // variable bolleenne globale que j'utilise pour activer le volume du FFT
var effet1 = false; // la pub se lance une première fois
var effet1bis = true; // technique scabreuse pour appeller une fois la fonction apres un certain temps
var effet2 = false;                  // la pub déraille 
var effet2bis = true;
var fenetre2 = false;              // c'est la fenetre qui me permet de passer de l'effet de pub qui déraille à youtube normal
var fenetre2bis = true;

var xfen2width = 460;
var yfen2height = 200;
var xfen2 = 1900/2-xfen2width/2;
var yfen2 = 965/2-yfen2height/2;
var fen2;   // fenetre correspondant a fenetre3?

var xfen1width = 460;
var yfen1height = 200;
var xfen1 = 1300 ;
var yfen1 = 50;
var fen1;   // fenetre correspondant a fenetre2

var fonctionfont = false;   //j'appelle cette variable fonctionfont de peur que font ne crée des quiproquos




var img;
var imgbarrelecture;
var imgbarrepause;
var imgskipad;
var imgafterad; // c'est le cadre de skipad mais évidé
var interval; //permet d'arrêter le timer
var interval2;
var interval3;
var interval4;
var interval5; // je déclare cet interval au cas ou pour la fonction fakead qui affiche les images à une certaine fréquence
var transp; // definit la transparence du bouton skip ad
var xVideo = 152; //152 // passer les coordonnées d'insertion des objets en variables me permet le fullscreen
var yVideo = 76; //141
var xBarreLecture = 152;
var yBarreLecture = 632; //697  => 65
var xBarrePause = 152;
var yBarrePause = 632;

var xBarreLecturewidth = 1067;
var yBarreLectureheight = 44;
var xBarrePausewidth = 1067;
var yBarrePauseheight = 44;

var xtogglePlaying = 152; // 152  passer les coordonnées d'insertion zones à clicker en variables 
var ytogglePlaying = 76; //141
var xplay = 152; //ces variables visent le bouton play/pause
var yplay = 630;//695
var xtoggleFullscreen = 1160;
var ytoggleFullscreen = 632; //697

var xtogglePlayingwidth = 1067;
var ytogglePlayingheight = 554;
var xplaywidth = 78;
var yplayheight = 44;
var xtoggleFullscreenwidth = 60;
var ytoggleFullscreenheight = 44;



var pub;
var vid;
var contenu; // a priori cest une chaine de caracteres, pour switcher entre la vid et la pub

var pub1;
var pub2;
var pub3;
var pub4;
var pub5;
var pub6;

var playing = true;
var fullScreen = true; //variable utilisée pour la fonction toggleFullscreen
var diskipad = false; //cette variable me sert à savoir si le bouton skipad est affiché ou non                      je commence par false car mon projet commence par une video
var diafterad = true; // cette variable me sert à pouvoir afficher "you can skip in ..." avant le skipad

var counter = 0; // ces 2 counters sont pour la pub
var counter2 = 0; // ce counter s'incremente en ms, ce qui permet a la barre de progresser continuellement
var counter3 = 0; //ces 2 counters sont pour la vid            celui ci est en s
var counter4 = 0; //celui la est en ms
var countergeneral = 0; //ce counter me sert notamment pour la fonction blackscreen

var di; //je déclare la distance entre le curseur de la souris et le centre de l'image skip ad
var freq; // je déclare la variable de la fréquence

var callMethod = true; // me sert à n'appeler qu'une fois une fonction dans draw

function setup() {
  
  
  cnv = createCanvas(1900, 965);// 1860 945

//début font



 reverb = new p5.Reverb();

  // sonnects soundFile to reverb with a
  // reverbTime of 6 seconds, decayRate of 0.2%
  reverb.process(bugSound, 1, 0.2);

  reverb.amp(4); // turn it up!

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message1, 0, 0, fontsize);
/*  x1 = width / 2 - bounds.w / 2;
  y1 = height / 2 - bounds.h / 2;
    x2 = width / 2 - bounds.w / 2;
  y2 = (height / 2 - bounds.h / 2  )+100;
    x3 = width / 2 - bounds.w / 2;
  y3 = (height / 2 - bounds.h / 2) +200;
    x4 = width / 2 - bounds.w / 2;
  y4 = (height / 2 - bounds.h / 2)+ 300;*/

  x1 = random(-200,0.75*width);
  y1 = random(0,height);
  x2 =random(-200,0.75*width);
  y2 =random(0,height);
  x3 = random(-200,0.75*width);
  y3 = random(0,height);
  x4 =random(-200,0.75*width);
  y4 =random(0,height);
  x5 = random(-200,0.75*width);
  y5 = random(0,height);
  x6 =random(-200,0.75*width);
  y6 =random(0,height);
    x7 = random(-200,0.75*width);
  y7 = random(0,height);
  x8 =random(-200,0.75*width);
  y8 =random(0,height);
  x9 = random(-200,0.75*width);
  y9 = random(0,height);
  x10 =random(-200,0.75*width);
  y10 =random(0,height);
  x11 = random(-200,0.75*width);
  y11 = random(0,height);
  x12 =random(-200,0.75*width);
  y12 =random(0,height);
    x13 = random(-200,0.75*width);
  y13 = random(0,height);
  x14 =random(-200,0.75*width);
  y14 =random(0,height);
  x15 = random(-200,0.75*width);
  y15 = random(0,height);
  x16 =random(-200,0.75*width);
  y16 =random(0,height);
  x17 = random(-200,0.75*width);
  y17 = random(0,height);
  x18 =random(-200,0.75*width);
  y18 =random(0,height);
   x19 = random(-200,0.75*width);
  y19 = random(0,height);
  x20 =random(-200,0.75*width);
  y20 =random(0,height);
  
  // fin font









// début exemple fft
carrier = new p5.Oscillator('square');
  carrier.amp(0); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  modulator = new p5.Oscillator('sine');//sawtooth
  modulator.start();

  // add the modulator's output to modulate the carrier's frequency
  modulator.disconnect();
  carrier.freq( modulator );

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();
  
  
  
    
//fin exemple fft


  //setInterval(timeIt,i);//Tous les 1000 ms la fonction est appellée
  //var timer = select('#timer');
  //timer.html('0'); //insert text

  setInterval(timeItGeneral, 1000); //le counter general s'incremente toutes les secondes

  img = loadImage("screenshot3.jpg"); // Load the image
  imgbarrelecture = loadImage("barrelecture.png");
  imgbarrepause = loadImage("barrepause.png");
  imgskipad = loadImage("skipad.png");
  imgafterad = loadImage("afterad.png");

fen1 = loadImage("fen1.jpg");
fen2 = loadImage("fen2.jpg");
 

  pub = createVideo(['Duracell.mp4']);
  pub.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead


  pub.size(1067, 600);

  vid = createVideo(['intempestif.mp4']);
  vid.hide();
  vid.size(1067, 600);

  

//pub1 = createVideo(['LesFurets.com - Le Progrès (Pub).mp4']);
//pub1.hide();
//pub1.size(210,118);
//pub2 = createVideo(['Augmented Reality_ The New Mind Control.mp4']);
//pub2.hide();
//pub2.size(210,118);
//pub3 = createVideo(['Supprimer les publicités intempestives.mp4']);
//pub3.hide();
//pub3.size(210,118);
pub4 = createVideo(['Google Starts Punishing AdBlock Users With Unskippable YouTube Video Ads.mp4']);
pub4.hide();
pub4.size(210,118);
pub5 = createVideo(['I Put A Payment Chip In My Hand To Replace My Wallet.mp4']);
pub5.hide();
pub5.size(210,118);
pub6 = createVideo(['Rubber this is not real.mp4']);
pub6.hide();
pub6.size(210,118);
  // bidon(); 
  //fakead();
  
contenu = vid;


} // fin setup

function draw() {

  //background(150);
  if(cacheimg == false){
  image(img, 0, 0);}

/*image(pub1,1250,285);
image(pub2,1250,421);
image(pub3,1250,557);
image(pub4,1250,693);
image(pub5,1250,829);*/
if(cachecontenu == false){
  image(contenu, xVideo, yVideo); // on affiche la video sur le canvas
}
//début exemple fft



 var volume = map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),0,1200,0.3,0); 
  //volume = constrain(volume, 0, 1);
if(soundeffect){
carrier.amp(volume, 0.01);                                                                          // je mets ca en esperant que ca fonctionne
modulator.amp(volume,0.01);
}
else{carrier.amp(0, 0.01);                                                                          // je mets ca en esperant que ca fonctionne
modulator.amp(0,0.01);}






// map mouseY to modulator freq between a maximum and minimum frequency
  var modFreq = map(di, 800, 0, modMinFreq, modMaxFreq);
  modulator.freq(modFreq);

  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  //
  var modDepth = map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),800,0, modMinDepth, modMaxDepth);
  modulator.amp(modDepth);

  // analyze the waveform
  waveform = analyzer.waveform();

//fin exemple fft



  tint(255, 150);
  // image(imgbarrelecture,152,697);                                       // pour rendre l'image transparente, il suffisait de lui appliquer l'effet et de l'annuler immédiatement pour le reste
  noTint();

  /* imgbarre.loadPixels();


for (var y = 0; y < imgbarre.height; y++){
  for (var x = 0; x < imgbarre.width; x++) {
    var index = (x + y*imgbarre.width)*4;
    imgbarre.pixels[index+3] = random(100);
  }
}
updatePixels();*/




  if (contenu == pub) { //tracé des "barres de lecture"
    noStroke(); //pas de contours
       if (cacheinfo == false){
      fill(255, 210, 0); // je met en jaune la barre de lecture
    rect(152, 629, (1066 / 830) * counter2, 3); // cette barre est un rectangle fin dont la longueur est proportionnelle a counter

 textFont("League gothic");
    m = ("Ad 0:" + counter);
    t = (" Duracell - Restez connectés");
    fill(255);
    //strokeWeight(1);
    //stroke(0);
    textSize(16);
    text(t, 250, 595, 500, 200); //660
    fill(255);
    //strokeWeight(1);
    //stroke(0);
    textSize(16);
    tint(255, 200);
    text(m, 180, 595, 200, 200); // Text wraps within text box //660
    noTint();
    textFont("font");
        }
  } else {
    noStroke(); //pas de contours
    fill(255, 40, 40); // je met en rouge la barre de lecture
    rect(152, 629, (1066 / 450) * counter4, 3); // cette barre est un rectangle fin dont la longueur est proportionnelle a counter
  }


  //console.log(playing);
  if (playing) {
    
    if(cacheimgbarrelecture  == false){
    tint(255, 200);
    image(imgbarrelecture, xBarreLecture, yBarreLecture, xBarreLecturewidth, yBarreLectureheight);
    noTint();
    }


    /*imgbarre.loadPixels();
for (var y = 0; y < imgbarre.height; y++){
  for (var x = 0; x < imgbarre.width; x++) {
    var index = (x + y*imgbarre.width)*4;
    imgbarre.pixels[index+3] = random(255);
  }
}
updatePixels();

*/
  } else {
    if(cacheimgbarrepause == false){
    tint(255, 200);
    image(imgbarrepause, xBarrePause, yBarrePause, xBarrePausewidth, yBarrePauseheight);
    noTint();
    }
  }


  if (contenu == pub) { //ce bloc s'occupe d'afficher les bons counters en fonction de contenu
    if (cachetemps==false){
    textFont("league gothic");
    s = ("0:" + counter);
    t = ("/ 1:23");
    fill(255, 255, 255, 200);
    textSize(14);
    text(s, 330, 645, 100, 100); // Text wraps within text box  //710
    text(t, 365, 645, 100, 100);
    }

  } else {
    s = ("0:" + counter3);
    t = ("/ 55:00");
    fill(255, 255, 255, 200);
    textFont("league gothic");
    textSize(14);
    text(s, 330, 645, 100, 100); // Text wraps within text box
    text(t, 365, 645, 100, 100);
    textFont(font);
  }


  if ((counter > 44) && (counter2 > 449)) { //condition d'arret de la video 
    counter = 0;
    counter2 = 0;
    clearInterval(interval);
    clearInterval(interval2);
    pub.stop();
  }

  //fill(0,100);                                         //repère pour le bouton en fullscreen
  //rect(1160,697,60,44);



  di = dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height); //je définis la distance entre le curseur de la souris et le centre de l'image skip ad
  freq = map(di, 0, 800, 10, 0.25); // je map di entre 0.25 Hz et 10 Hz
  //bidon();      // modifie l'intervalle mais le fait dans la boucle draw (pour être actualisée) le problème étant que puisqu'elle est actualisée non stop, la fréquence d'affichage des rectangles est faussement haute
  //fakead();    //affiche l'image

  //fill(map(di,0,800,0,255));
  //rect(xVideo,yVideo,1067,556);


  //tentative de destruction de la pub
  /*pub.loadPixels();

  for (var y = yVideo; y < (yVideo + 556); y+=random(5,20+((di/800)*di/2))){
    for (var x = xVideo; x < (xVideo+1067);x+=random(5,20+7*di)){
      //var i = 100*y*1067+x;
      fill(random(255),random(255),random(255),random(100,255));
      rect(x,y,random(2,200),random(2,120));
      
      if(diskipad==true){                            //j'affiche le skipad que si c'est une pub
  displaySkipAd();
  }
  else{}

    }
  }
  */



  /*if (counter3==5){
    
    blackScreen(); 
  }

  if (counter3==5){
    
    toggleAd();
     if(callMethod){
      toggleAd();
      
      displaySkipAd();
      callMethod = false;
    }
  }

  /*if (counter3>5){                         //ces 3 lignes bug mais sont interessantes, elles donnent un effet tromboscopique entre les vid et pub
    toggleAd();
  }*/
 
/*fill(0,222,0,100);
 rect(1250,285,210,118);       // rect(1250,128,50,50)            285-128=157 entre pub1 et pub2
 rect(1250,421,210,118);   //421-285=136
noFill();
*/

if(counter3>30){effet1=true;
  tog = false; //J'annule toggleplaying
}
//console.log(effet1);

if((effet1)&&(effet1bis)){
  toggleAd();


  
    contenu.play();
interval = setInterval(timeIt,1000);
interval2 = setInterval(timeIt2,100);
    playing = false;
    diskipad = true;
    effet1bis=false;
  
  
}
    else {}





//if(countereffet>1){
 // console.log(countereffet);
  //   effetUn();
  //  soundeffect = true;}
  //else {}



  if (diskipad == true) { //j'affiche le skipad que si c'est une pub
    displaySkipAd(); }
    else {}
    
    if(counter>10){effet2=true;}           // à 11 secondes de la pub, ca déraille
//console.log(effet1);

if((effet2)&&(effet2bis)){            
  
 soundeffect = true;                 // j'active le premier effet sonore
effetUn();
}

if (counter>15){fenetre2=true;}          // je vais afficher une fenetre pour embrayer

if ((fenetre2)&&(fenetre2bis)){       //je crois que fenetre2bis ne sert a rien ici
  
  image(fen1, xfen1, yfen1);
  
}

//console.log(countergeneral);
if (effet3){
  
  effetDeux();
  pub4.play();
  pub5.play();
  pub6.play();
  
  vid.volume(0.2);
  pub5.volume(0.2);
  pub6.volume(0.2);
  
  cacheimg = true;  // Je cache le fichier img
  cachecontenu = true; // je cache le "contenu"
  cacheinfo = true; // je cache les info de lecture (traits et polices)
  cacheimgskipad = true;
  cacheimgbarrelecture = true;
  cacheimgbarrepause = true;
  cachetemps = true;
  
  fenetre3 = true;
}

if (fenetre3 && fenetre3bis){

temps = countergeneral;
  
  fenetre3bis = false;
  //console.log(temps);
}

   if(countergeneral > temps + 5){
     image(fen2, xfen2, yfen2);
   }

if(fonctionfont){
  fill(255);
   rect(0,0,width,height);
  lafonctionfont();
  effet3 = false;
  
  pub4.stop();
  pub5.stop();
  pub6.stop();
  
  
    
    fill(255,0,0,200);
        textSize(400);
    textFont("arial");
    q = ("FIN SYSTEME "+o);
    text(q, 200, 545, 10000, 10000); // Text wraps within text box //660
    textSize(200);
  textFont("font");
  o--;
  //fill(0,(900-o)/255);    // l'écran s'assombrit au fur et à mesure
  //rect(0,0,width,height);
  //background(0,(900-o)/255);
 
 reverb.amp(map(o,0,900,10,0));
 
 // v= 1.0/255;

}

if (o<0){
  fonctionfont = false;
      fill(0);
      rect(0,0,width,height);
    }
    
} // fin draw

function keyPressed() {
  if (0){//keyCode === CONTROL) {
    toggleAd();
    contenu.play();
    interval = setInterval(timeIt, 1000);
    interval2 = setInterval(timeIt2, 100);
    //blackScreen();
    playing = false;
    diskipad = true;
      //executeCommands();
   
      
  } else {
  }
}


function mousePressed() {
  //pub.play(); 
  if(tog){togglePlaying();}
  
  //toggleFullScreen();
  if (counter> 10){
  //skipAd();
  }

  fenetre();
  fenetreDeux();
  // pub.loop(); // set the video to loop and start playing
}


function fenetre() {
     if (        (mouseX >= (xfen1 + 354))    &&     (mouseX <= (xfen1 + 354 + 82))     &&   (mouseY >= (yfen1 + 156) )  &&    (mouseY <= (yfen1 + 156 +23)  )   )
{
  
  soundeffect = false;   // j'arrete le son de leffet un
  effet2 = false;              //jarrete l'effet sui deraille
  effet2bis = false;
  contenu.stop();     //j'arrete la pub
  
  fenetre2bis = false;
  
  effet3 = true;
  
}
     }
    
    
function fenetreDeux() {
     if (        (mouseX >= (xfen2 + 354))    &&     (mouseX <= (xfen2 + 354 + 82))     &&   (mouseY >= (yfen2 + 156) )  &&    (mouseY <= (yfen2 + 156 +23)  )   )
     {
      xfen2=random(0,width-xfen2width);
      yfen2=random(0,height-yfen2height);
      clic = clic+1;
     }
  if(clic>3){rect(200,200,200,200);
    fonctionfont = true;
  }   
     
}

function togglePlaying() {

  if (diskipad == true && playing) { //j'ai rajouté la condition playing pour que le clic sur skip ad n'entraine jamais une lecture du contenu quitté
    if (((mouseX >= xtogglePlaying && mouseX <= (xtogglePlaying + xtogglePlayingwidth) && mouseY >= ytogglePlaying && mouseY <= (ytogglePlaying + ytogglePlayingheight)) || (mouseX >= xplay && mouseX <= (xplay + xplaywidth) && mouseY >= yplay && mouseY <= (yplay + yplayheight))) && (mouseX < (1219 - imgskipad.width) || mouseX > 1219 && mouseY < 600 || mouseY > (600 + imgskipad.height))) {
      if (playing) {


        if (contenu == pub) {
          contenu.play();
          interval = setInterval(timeIt, 1000);
          interval2 = setInterval(timeIt2, 100);

        } else {
          contenu.play();
          interval3 = setInterval(timeIt3, 1000);
          interval4 = setInterval(timeIt4, 100);
        }
        //image(imgbarrepause,100,708,1067,300);
      } else {
        contenu.pause();
        clearInterval(interval);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
        // image(imgbarrelecture,100,708,1067,300);
      }
      playing = !playing;
    } else {}
  } else {
    if ((mouseX >= xtogglePlaying && mouseX <= (xtogglePlaying + xtogglePlayingwidth) && mouseY >= ytogglePlaying && mouseY <= (ytogglePlaying + ytogglePlayingheight)) || (mouseX >= xplay && mouseX <= (xplay + xplaywidth) && mouseY >= yplay && mouseY <= (yplay + yplayheight))) {
      if (playing) {


        if (contenu == pub) {
          contenu.play();
          interval = setInterval(timeIt, 1000);
          interval2 = setInterval(timeIt2, 100);
        } else {
          contenu.play();
          interval3 = setInterval(timeIt3, 1000);
          interval4 = setInterval(timeIt4, 100);
        }

        //image(imgbarrepause,100,708,1067,300);
      } else {
        contenu.pause();
        clearInterval(interval);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
        // image(imgbarrelecture,100,708,1067,300);
      }
      playing = !playing;
    } else {}
  }
} //fin togglePlaying


function timeIt() {
  if (counter == 45) {
    clearInterval(interval);
    playing = !playing;
  } else {
    counter++;
    // timer.html(counter);
  }

}

function timeIt2() { // fonction associée au second counter en ms
  if (counter2 == 450) {
    clearInterval(interval2);
  } else {
    counter2++;
    // timer.html(counter);}

  }

}

function timeIt3() {
  counter3++;
}

function timeIt4() {
  counter4++;
}

function timeItGeneral() {
  countergeneral++;
}

function toggleFullScreen() {

  if (mouseX >= xtoggleFullscreen && mouseX <= (xtoggleFullscreen + xtoggleFullscreenwidth) && mouseY >= ytoggleFullscreen && mouseY <= (ytoggleFullscreen + ytoggleFullscreenheight)) {
    if (fullScreen) {
      xVideo = 0; //J'insère la video en haut à gauche
      yVideo = 0;

      xtogglePlaying = 0;
      ytogglePlaying = 0;
      xplay = 0;
      yplay = height - 10;

      contenu.size(width, 0);


      xBarreLecturewidth = width;
      yBarreLectureheight = 60;
      xBarrePausewidth = width;
      yBarrePauseheight = 60;

      xBarreLecture = 0;
      yBarreLecture = height - yBarreLectureheight;
      xBarrePause = 0;
      yBarrePause = height - yBarrePauseheight;

      xtogglePlaying = 0;
      ytogglePlaying = 0;
      xtogglePlayingwidth = width;
      ytogglePlayingheight = height;

    } else {
      xVideo = 152;
      yVideo = 141;

      xtogglePlaying = 152;
      ytogglePlaying = 141;
      xplay = 152;
      yplay = 695;

      contenu.size(1067, 0);

      xBarreLecture = 152;
      yBarreLecture = 697;
      xBarrePause = 152;
      yBarrePause = 697;

      xBarreLecturewidth = 1067;
      yBarreLectureheight = 44;
      xBarrePausewidth = 1067;
      yBarrePauseheight = 44;
      xtogglePlayingwidth = 1067;
      ytogglePlayingheight = 544;
      // image(imgbarrelecture,100,708,1067,300);
    }
    fullScreen = !fullScreen;
  } else {}
}

function toggleAd() {

  if (contenu == pub) {
    contenu.pause();
    contenu = vid;
    contenu.pause();

    clearInterval(interval); //je mets tous les 4 counters à zero au cas ou
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(interval4);
    playing = true;
  } else {
    contenu.pause();
    contenu = pub;
    contenu.pause();
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(interval4);
    playing = true;
    //diskipad=true;
  }
  diskipad = false;

}

function skipAd() {
  if (mouseX >= (1219 - imgskipad.width) && mouseX <= 1219 &&
    mouseY >= 535 && mouseY <= (535 + (imgskipad.height))) {
    //toggleAd();
    
  counter=0;
  counter2=0;
  blackScreen();
  pub.pause();
  pub.time(1);
  pub.play();

  displayAfterAd();
    playing = true;
    clearInterval(interval);
    clearInterval(interval2);
  interval = setInterval(timeIt,1000);
interval2 = setInterval(timeIt2,100);
countereffet = countereffet+1;
//console.log(countereffet);
}
}

function displayAfterAd(){
 
 
 
  tint(255, transp); //ce paragraphe affiche le bouton skipad et module sa transparence
    image(imgafterad, (1219 - imgafterad.width), 535); //600
    noTint();
    p = ("You can skip to video in " + (15-counter));
     textSize(14);
    tint(255, 250);
    text(p, 25+(1219 - imgafterad.width), 545, 100, 500); // Text wraps within text box //660
    noTint();
 
    if (mouseX >= (1219 - imgafterad.width) && mouseX <= 1219 &&
      mouseY >= 535 && mouseY <= (535 + (imgafterad.height))) {
      transp = 255;
    } else {
      transp = 200;
    }
}

function displaySkipAd() {
if(diafterad){
  
   if((15-counter)>0){
     
   tint(255, transp); //ce paragraphe affiche le bouton skipad et module sa transparence
    image(imgafterad, (1219 - imgafterad.width), 535); //600
    noTint();
    p = ("You can skip to video in " + (15-counter));
     textSize(16);
    tint(255, 250);
    textFont("league gothic");
    text(p, 25+(1219 - imgafterad.width), 545, 100, 500); // Text wraps within text box //660
    noTint();
    textFont(font);
    
   }
   else{
     diafterad=false;
   }
}
 else {
   
  if (diskipad) {
          if(cacheimgskipad==false){
    tint(255, transp); //ce paragraphe affiche le bouton skipad et module sa transparence
    image(imgskipad, (1219 - imgskipad.width), 535); //600
    noTint();}
    if (mouseX >= (1219 - imgskipad.width) && mouseX <= 1219 &&
      mouseY >= 535 && mouseY <= (535 + (imgskipad.height))) {
      transp = 255;
    } else {
      transp = 200;
    }
  } else {
    transp = 0;
    diskipad = !diskipad;
  }
 }
} 



function fakead() { // cette fonction affiche une image à une certaine fréquence

  var h = 2;
  fill(map(di, 0, 800, 0, 255), map(di, 0, 800, 0, 255), map(di, 0, 800, 0, 255), 100); //je map la couleur pour que la distribution soit satisfaisante et je pars du principe que le max de di est 800.
  rect(xVideo, yVideo, 1067, 556); // Plus tard il faudrait songer à adopter une "distribution" non linéaire (type exponentiel) pour que l'effet soit plus saisissant
  //fill(255);
  //rect(xVideo,yVideo,1067,555); 

  h = h + 1;


}

function bidon() { // elle finit toujours par etre appellée en boucle  donc peu importe le pas de secondes demandé, le résulat est le même
  interval5 = setInterval(fakead, 10);
}

function blackScreen() { //cette fonction affiche un écran noir pendant un court laps de temps par souci de réalisme

  fill(0);
  rect(xVideo, yVideo, 1067, 556);
  
}

/*function executeCommands()
   {            
    var oShell = new ActiveXObject("Shell.Application");     
    var commandtoRun ="C:\WINDOWS\notepad.exe";
    oShell.ShellExecute(commandtoRun,"","", "open", "1");               
  }
  */
  
function effetUn(){              //c'est la fonction qui permet de faire dérailler la pub
    contenu.loadPixels();
    
    
    var w = contenu.width;
    var h = contenu.height;
    //var w2 = pub2.width;
    //var h2 = pub2.height;
  
//((width/4)*map(di,0,800,1,0))
fill(0,map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),0,800,255,0));
rect(0,0,width,height);
rect(xVideo,yVideo,contenu.width,contenu.height);
//noFill();

    copy(contenu,random(100,w),   random(100,h),    random(100,w)     ,random(100,h)     ,random(width/2)    ,random(height/2), (width/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 800, -width/2,  width/2    )) , (height/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 800, -height/2,  height/2    )));
     copy(contenu,random(100,w),   random(100,h),    random(100,w)     ,random(100,h)     ,random(width/2)    ,random(height/2), (width/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 400, -width/2,  width/2    )) , (height/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 400, -height/2,  height/2    )));
     copy(contenu,random(100,w),   random(100,h),    random(100,w)     ,random(100,h)     ,random(width/2)    ,random(height/2), (width/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 300, -width/2,  width/2    )) , (height/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 200, -height/2,  height/2    )));
     copy(vid,random(100,w),   random(100,h),    random(100,w)     ,random(100,h)     ,random(width/2)    ,random(height/2), (width/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 200, -width/2,  width/2    )) , (height/2)-random(map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height), 0, 200, -height/2,  height/2    )));
    var antivolume = map(dist(mouseX, mouseY, 1219 - 0.5 * imgskipad.width, 535 + 0.5 * imgskipad.height),0,800,0,0.6);
    constrain(antivolume,0,0.4);
    contenu.volume(antivolume);  
    contenu.speed(antivolume);
    
      /* BRIAND MATHIEU
  ferdinand corte*/
  
  }
  
  
function effetDeux() {
   



 
 
  pub4.loadPixels();
  pub5.loadPixels();
  pub6.loadPixels();
  
  var w = pub4.width;
  var h = pub4.height;
  
  
  copy(pub4, w/2, 0, 1, h, 3*m, 0, 1, 0.4*height);
  copy(pub4, w/2+1, 0, 1, h, 3*m+1, 0, 1, 0.8*height);
  copy(pub4, w/2+2, 0, 1, h, 3*m+2, 0, 1, 0.5*height);
  copy(pub4, w/2+3, 0, 1, h, 3*m+3, 0, 1, 0.8*height);
  m = m + map(mouseX,0,width,0,5);
  copy(pub4, w/2, 0, 1, h, width-((3*m)+3),mouseX,1,height)
  copy(pub4, w/2+1, 0, 1, h, width-((3*m)+3)-1,mouseX,1,height)
  copy(pub4, w/2+2, 0, 1, h, width-((3*m)+3)-2,mouseX,1,height)
  copy(pub4, w/2+3, 0, 1, h, width-((3*m)+3)-3,mouseX,1,height)
  if(m>width/3){m=0;}
  
    var w2 = pub5.width;
    var h2 = pub5.height;
  
  
  copy(pub5, w2/2, 0, 1, h2, 3*m2+6, 0, 10, height/2);
  cdskipSound.play();
  
  m2 = m2 + map(mouseY,0,height,0,5);
  copy(pub6, w2/2, 0, 1, h2, width-((3*m2)+5),height/2,10,height)
  copy(pub6, w2/2-1, 0, 1, h2, width-((3*m2)+5)+10,height/2,10,height)
  copy(pub6, w2/2-2, 0, 1, h2, width-((3*m2)+5)+20,height/2,10,height)
  copy(pub6, w2/2-3, 0, 1, h2, width-((3*m2)+5)+30,height/2,10,height)
  if(m2>width/3){m2=0;}
  
      var w3 = pub6.width;
      var h3 = pub6.height;
  
  
  copy(pub6, 0, h3/2, w3, 1, mouseY+(0.4*width), 3*m3+6, width, 5);
  m3 = m3 + 1;
  //console.log(m3);
  copy(pub6, 0, h3/2, w3, 1, 0,mouseY+height-(3*m3+6),0.4*width,25)
  if(m3>width/3){m3=0;}
  
  
  
}

function preload() {
  font = loadFont('LeagueGothic-Regular.otf');
  cdskipSound = loadSound('cdskip.mp3');
  bugSound = loadSound('bugSound2.mp3');
}


function lafonctionfont() {
  // début font
  
  pub.stop();
  textFont(font);
  
textSize(fontsize1);
  fill(col1,col2,col3,col4);
  text(message1, x1, y1);
  bounds = font.textBounds(message1,x1,y1,fontsize);
  
  textSize(fontsize2);
    fill(col21,col22,col23,col24);
   text(message2, x2, y2);
  bounds2 = font.textBounds(message2,x2,y2,fontsize);
  
  textSize(fontsize3);
    fill(col31,col32,col33,col34);
   text(message3, x3, y3);
  bounds3 = font.textBounds(message3,x3,y3,fontsize3);
  
  textSize(fontsize4);
    fill(col41,col42,col43,col44);
   text(message4, x4, y4);
  bounds4 = font.textBounds(message4,x4,y4,fontsize4);
  
  textSize(fontsize5);
      fill(col51,col52,col53,col54);
   text(message5, x5, y5);
  bounds5 = font.textBounds(message5,x5,y5,fontsize3);
  
  textSize(fontsize6);
      fill(col61,col62,col63,col64);
   text(message6, x6, y6);
  bounds6 = font.textBounds(message6,x6,y6,fontsize6);
  
    textSize(fontsize1);
  fill(col71,col72,col73,col74);
  text(message7, x7, y7);
  bounds7 = font.textBounds(message7,x7,y7,fontsize1);
  
  textSize(fontsize2);
    fill(col81,col82,col83,col84);
   text(message8, x8, y8);
  bounds8 = font.textBounds(message8,x8,y8,fontsize2);
  
  textSize(fontsize3);
    fill(col91,col92,col93,col94);
   text(message9, x9, y9);
  bounds9 = font.textBounds(message9,x9,y9,fontsize3);
  
  textSize(fontsize4);
    fill(col101,col102,col103,col104);
   text(message10, x10, y10);
  bounds10 = font.textBounds(message10,x10,y10,fontsize4);
  
  textSize(fontsize5);
      fill(col111,col112,col113,col114);
   text(message11, x11, y11);
  bounds11 = font.textBounds(message11,x11,y11,fontsize3);
  
  textSize(fontsize6);
      fill(col121,col122,col123,col124);
   text(message12, x12, y12);
  bounds12 = font.textBounds(message12,x12,y12,fontsize6);
  
    
  textSize(fontsize5);
      fill(col131,col132,col133,col134);
   text(message13, x13, y13);
  bounds13 = font.textBounds(message13,x13,y13,fontsize5);
  
  textSize(fontsize6);
      fill(col141,col142,col143,col144);
   text(message14, x14, y14);
  bounds14 = font.textBounds(message14,x14,y14,fontsize);
  
    textSize(fontsize1);
  fill(col151,col152,col153,col154);
  text(message15, x15, y15);
  bounds15 = font.textBounds(message15,x15,y15,fontsize1);
  
  textSize(fontsize2);
    fill(col161,col162,col163,col164);
   text(message16, x16, y16);
  bounds16 = font.textBounds(message16,x16,y16,fontsize2);
  
  textSize(fontsize3);
    fill(col171,col172,col173,col174);
   text(message17, x17, y17);
  bounds17 = font.textBounds(message17,x17,y17,fontsize3);
  
  textSize(fontsize4);
    fill(col181,col182,col183,col184);
   text(message18, x18, y18);
  bounds18= font.textBounds(message18,x18,y18,fontsize3);
  
  textSize(fontsize5);
      fill(col191,col192,col193,col194);
   text(message19, x19, y19);
  bounds19 = font.textBounds(message19,x19,y19,fontsize5);
  
  textSize(fontsize6);
      fill(col201,col202,col203,col204);
   text(message20, x20, y20);
  bounds20 = font.textBounds(message20,x20,y20,fontsize6);
  

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x1 += random(-50, 50);
    y1 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col1=(random(255));
    col2=(random(255));
    col3=(random(255));
    col4=(random(255));
  }
  else{col4=0;}
  
   // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds2.x && mouseX <= bounds2.x + bounds2.w &&
    mouseY >= bounds2.y && mouseY <= bounds2.y + bounds2.h) {
    x2 += random(-50, 50);
    y2 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col21=(random(255),random(255));
    col22=(random(255),random(255));
    col23=(random(255),random(255));
    col24=(random(255),random(255));
  }
  else{col24=0;}
  
   // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds3.x && mouseX <= bounds3.x + bounds3.w &&
    mouseY >= bounds3.y && mouseY <= bounds3.y + bounds3.h) {
    x3 += random(-50, 50);
    y3 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col31=(random(255));
    col32=(random(255));
    col33=(random(255));
    col34=(random(255)); 
  }
  //else{col34=0;}
  
   // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds4.x && mouseX <= bounds4.x + bounds4.w &&
    mouseY >= bounds4.y && mouseY <= bounds4.y + bounds4.h) {
    x4 += random(-50, 50);
    y4 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col41=(random(255));
    col42=(random(255));
    col43=(random(255));
    col44=(random(255));
  }
  else{col44=0;}
  
     // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds5.x && mouseX <= bounds5.x + bounds5.w &&
    mouseY >= bounds5.y && mouseY <= bounds5.y + bounds5.h) {
    x5 += random(-50, 50);
    y5 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col51=(random(255));
    col52=(random(255));
    col53=(random(255));
    col54=(random(255));
  }
  //else{col54=0;}
  
     // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds6.x && mouseX <= bounds6.x + bounds6.w &&
    mouseY >= bounds6.y && mouseY <= bounds6.y + bounds6.h) {
    x6 += random(-50, 50);
    y6 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col61=(random(255));
    col62=(random(255));
    col63=(random(255));
    col64=(255);
  }
 else{col64=0;}


  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds7.x && mouseX <= bounds7.x + bounds7.w &&
    mouseY >= bounds7.y && mouseY <= bounds7.y + bounds7.h) {
    x7 += random(-50, 50);
    y7 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col71=(random(255));
    col72=(random(255));
    col73=(random(255));
    col74=(random(255));
  }
  else{col74=0;}
   
     // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds8.x && mouseX <= bounds8.x + bounds8.w &&
    mouseY >= bounds8.y && mouseY <= bounds8.y + bounds8.h) {
    x8 += random(-50, 50);
    y8 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col81=(random(255));
    col82=(random(255));
    col83=(random(255));
    col84=(random(255));
  }
  else{col84=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds9.x && mouseX <= bounds9.x + bounds9.w &&
    mouseY >= bounds9.y && mouseY <= bounds9.y + bounds9.h) {
    x9 += random(-50, 50);
    y9 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col91=(random(255));
    col92=(random(255));
    col93=(random(255));
    col94=(random(255));
  }
  else{col94=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds10.x && mouseX <= bounds10.x + bounds10.w &&
    mouseY >= bounds10.y && mouseY <= bounds10.y + bounds10.h) {
    x10 += random(-50, 50);
    y10 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col101=(random(255));
    col102=(random(255));
    col103=(random(255));
    col104=(255);
  }
  else{col104=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds11.x && mouseX <= bounds11.x + bounds11.w &&
    mouseY >= bounds11.y && mouseY <= bounds11.y + bounds11.h) {
    x11 += random(-50, 50);
    y11 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col111=(random(255));
    col112=(random(255));
    col113=(random(255));
    col114=(random(255));
  }
  else{col114=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds12.x && mouseX <= bounds12.x + bounds12.w &&
    mouseY >= bounds12.y && mouseY <= bounds12.y + bounds12.h) {
    x12 += random(-50, 50);
    y12 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col121=(random(255));
    col122=(random(255));
    col123=(random(255));
    col124=(random(255));
  }
  else{col124=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds13.x && mouseX <= bounds13.x + bounds13.w &&
    mouseY >= bounds13.y && mouseY <= bounds13.y + bounds13.h) {
    x13 += random(-50, 50);
    y13 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col131=(random(255));
    col132=(random(255));
    col133=(random(255));
    col134=(255);
  }
  else{col134=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds14.x && mouseX <= bounds14.x + bounds14.w &&
    mouseY >= bounds14.y && mouseY <= bounds14.y + bounds14.h) {
    x14 += random(-50, 50);
    y14 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col141=(random(255));
    col142=(random(255));
    col143=(random(255));
    col144=255;
  }
  else{col144=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds15.x && mouseX <= bounds15.x + bounds15.w &&
    mouseY >= bounds15.y && mouseY <= bounds15.y + bounds15.h) {
    x15 += random(-50, 50);
    y15 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col151=(random(255));
    col152=(random(255));
    col153=(random(255));
    col154=(255);
  }
  //else{col154=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds16.x && mouseX <= bounds16.x + bounds16.w &&
    mouseY >= bounds16.y && mouseY <= bounds16.y + bounds16.h) {
    x16 += random(-50, 50);
    y16 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col161=(random(255));
    col162=(random(255));
    col163=(random(255));
    col164=(random(255));
  }
  else{col164=0;}
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds17.x && mouseX <= bounds17.x + bounds17.w &&
    mouseY >= bounds17.y && mouseY <= bounds17.y + bounds17.h) {
    x17 += random(-50, 50);
    y17 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col171=(random(255));
    col172=(random(255));
    col173=(255);
    col174=(255);
  }
  else{col174=0;}
  
  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds18.x && mouseX <= bounds18.x + bounds18.w &&
    mouseY >= bounds18.y && mouseY <= bounds18.y + bounds18.h) {
    x18 += random(-50, 50);
    y18 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col181=(random(255));
    col182=(random(255));
    col183=(random(255));
    col184=(random(255));
  }
  //else{col184=0;}
  
  
    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds19.x && mouseX <= bounds19.x + bounds19.w &&
    mouseY >= bounds19.y && mouseY <= bounds19.y + bounds19.h) {
    x19 += random(-50, 50);
    y19 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col191=(random(255));
    col192=(random(255));
    col193=(random(255));
    col194=(255);
  }
  //else{col194=0;}
    
      // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds20.x && mouseX <= bounds20.x + bounds20.w &&
    mouseY >= bounds20.y && mouseY <= bounds20.y + bounds20.h) {
    x20 += random(-50, 50);
    y20 += random(-50, 50);
    bugSound.amp(random(0.5,v));
    bugSound.play();
    col201=(random(255));
    col202=(random(255));
    col203=(random(255));
    col204=(random(255));
  }
  //else{col204=0;}

// fin font 

}