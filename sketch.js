let cor;
let posicaoVertical; // Y
let posicaoHorizontal; // X

 function setup( ) {
 createCanvas (400, 400)
  background("red")
  cor=color(random(0, 255), random(0, 255), random(0, 255))
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  }

function draw( ) {
  fill (cor)
  circle( posicaoHorizontal, posicaoVertical , 50);
  
  if(mouseX>posicaoHorizontal) {
    posicaoHorizontal--
    }
  if(mouseX>posicaoHorizontal) {
    posicaohHrizontal++;
    }
  if(mouseY<posicaoVertical) {
    posicaovertical--
    }
  if(mouseY<sicalVertical) {
    posicaoVertical++
    }
  
  if(mouseIsPressed) {
    cor = color(random)(0, 255),random(0, 255),random (0, 255);
    random( 0, 100);
    }
   }