
let xEnemys = [600, 600, 600, 600, 600, 600]
let yEnemys = [40, 96, 150, 210, 270, 318];
let velEnemys = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comEnemy = 50;
let altEnemy = 40;

//Enemy
let xEnemy = 600;

//Enemy 2
let xEnemy2 = 600;

//Enemy 3
let xEnemy3 = 600;

function mostraEnemy(){
  for(let i = 0; i < imagemEnemys.length; i++ ){
   image(imagemEnemys[i], xEnemys[i], yEnemys[i], comEnemy, altEnemy);
  }
}

function movimentaEnemy(){
  for(let i = 0; i < imagemEnemys.length; i++ ){
  xEnemys[i] -= velEnemys[i];
 }
}
  

function voltaInicio(){
  for(let i = 0; i < imagemEnemys.length; i++ ){
  if (passouTela(xEnemys[i])){
    xEnemys[i] = 600;
    }
  }
}

function passouTela(xEnemys){
  return xEnemys < -50;
}