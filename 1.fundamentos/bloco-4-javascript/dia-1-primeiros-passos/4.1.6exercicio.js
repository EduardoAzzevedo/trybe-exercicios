//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela
// faz.
//--Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
//maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
const pecaDeXadrez = "rainha";

if (pecaDeXadrez == "Rainha" && pecaDeXadrez == pecaDeXadrez.toLowerCase()) {
    console.log(pecaDeXadrez , 'mova para qualquer lado');
}else {
  console.log('Bispo, para diagonal.');
}
