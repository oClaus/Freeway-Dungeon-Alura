let imagemEstrada;
let imagemAtor;
let imagemEnemy;
let imagemEnemy2;
let imagemEnemy3;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemEnemy = loadImage("imagens/enemy-1.png")
  imagemEnemy2 = loadImage("imagens/enemy-2.png")
  imagemEnemy3 = loadImage("imagens/enemy-3.png")
  imagemEnemys = [imagemEnemy3, imagemEnemy, imagemEnemy2, imagemEnemy, imagemEnemy3, imagemEnemy2];
  
  somTrilha = loadSound("sons/trilha.mp3")
  somPontos = loadSound("sons/pontos.wav")
  somColisao = loadSound("sons/colidiu.mp3")
}