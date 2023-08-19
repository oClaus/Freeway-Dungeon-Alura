function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraEnemy();
  movimentaEnemy();
  movimentaAtor();
  voltaInicio();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




