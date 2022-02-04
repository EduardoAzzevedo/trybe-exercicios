//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela
// faz.
//--Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
//maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
const peca = 'Rainha';
switch (peca.toLowerCase()) {
  case 'rainha':
    console.log('Rainha, mova para qualquer lado.');
    break;

  default:
    console.log('Bispo, para a diagonal.');
    break;
}

