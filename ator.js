//ator
let yAtor = 366;
let xAtor = 85;
let = colisao =false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3 
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeDescer()){
      yAtor +=3
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (podeEsquerda()){
    xAtor -= 3 
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (podeDireita()){
    xAtor += 3 
  }
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemEnemys.length; i++){
    colisao = collideRectCircle(xEnemys[i], yEnemys[i], comEnemy, altEnemy, xAtor, yAtor, 15)
    if (colisao){
      atorInicio();
      somColisao.play();
      if (pontosMaiorZero()){
      meusPontos -= 1;
      }
    }
  }
}

function atorInicio(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 140, 0);
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 5){
    somPontos.play();
    meusPontos += 1;
    atorInicio();
  }
}

function pontosMaiorZero(){
 return meusPontos > 0;
}

function podeDescer(){
  return yAtor < 366;
}

function podeEsquerda(){
  return xAtor > 0;
  
}

function podeDireita(){
  return xAtor < 470;
}