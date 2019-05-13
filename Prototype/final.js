var canvas1 = document.getElementById('c1');
var canvas2 = document.getElementById('c2');
var canvas3 = document.getElementById('c3');

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');

let photo1 = document.getElementById('image1');
let photo2 = document.getElementById('image2');
let photo3 = document.getElementById('image3');
  
let width;
let height;

let toggle = false;

function setup(){
  width = canvas1.width;
  height = canvas1.height;

  // set the CSS display size
  canvas1.style.width = width + 'px';
  canvas1.style.height = height + 'px';

  // set the number of display pixels, scaled for device resolution
  var scale = window.devicePixelRatio;
  canvas1.width = width * scale;
  canvas1.height = height * scale;

  // normalize the coordinate system
  ctx1.scale(scale, scale);

//Canvas 2
  // fixed canvas size
  width = canvas2.width;
  height = canvas2.height;

  // set the CSS display size
  canvas2.style.width = width + 'px';
  canvas2.style.height = height + 'px';

  // set the number of display pixels, scaled for device resolution
  var scale = window.devicePixelRatio;
  canvas2.width = width * scale;
  canvas2.height = height * scale;

  // normalize the coordinate system
  ctx2.scale(scale, scale);

//Canvas 3
   // fixed canvas size
  width = canvas3.width;
  height = canvas3.height;

  // set the CSS display size
  canvas3.style.width = width + 'px';
  canvas3.style.height = height + 'px';

  // set the number of display pixels, scaled for device resolution
  var scale = window.devicePixelRatio;
  canvas3.width = width * scale;
  canvas3.height = height * scale;

  // normalize the coordinate system
  ctx3.scale(scale, scale);
}
 


function draw1() {
  ctx1.drawImage(photo1, 0, 0, 600, 400);

  ctx1.font= "90px Verdana";
  var gradient = ctx1.createLinearGradient(25, 25, 550, 0);
  gradient.addColorStop("0"," red");
  gradient.addColorStop("0.5", "orange");
  gradient.addColorStop("1.0", "aqua");
  ctx1.strokeStyle = gradient; 
  ctx1.fillStyle = gradient;
  ctx1.strokeText("V E N I C E", 40, 70); 
  ctx1.fillText("V E N I C E", 60, 100); 
}

function draw2() {
  ctx2.fillStyle = 'white';
  ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
  ctx2.drawImage(photo2, 25, 25, 350, 250);

  ctx2.font= "60px Verdana";
  var gradient = ctx2.createLinearGradient(25, 25, 350, 0);
  gradient.addColorStop("0","salmon");
  gradient.addColorStop("0.5", "violet");
  gradient.addColorStop("1.0", "cyan");
  ctx2.strokeStyle = gradient; 
  ctx2.strokeText("P A R I S", 50, 325); 
}

function draw3() {
  ctx3.fillStyle = 'white';
  ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
  ctx3.drawImage(photo3, 10, 10, 280, 320);

  ctx3.font= "45px Verdana";
  var gradient = ctx3.createLinearGradient(25, 25, 150, 0);
  gradient.addColorStop("0","green");
  gradient.addColorStop("0.5", "orange");
  gradient.addColorStop("1.0", "purple");
  ctx3.strokeStyle = gradient; 
  ctx3.strokeText("P R A G U E", 20, 380); 
}

function animation1(){
  ctx1.scale(2,2);
}
function animation2(){
  ctx2.scale(2,2);
}
function animation3(){
  ctx3.scale(2,2);
}


photo1.addEventListener('load', draw1);
photo2.addEventListener('load', draw2);
photo3.addEventListener('load', draw3);
// photo1.addEventListener('mouseover', animation);

setup(); 
// animation1();
// animation2();
// animation3();


