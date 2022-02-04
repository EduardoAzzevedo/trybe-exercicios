//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela
// faz.
//--Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
//maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
const pecaDeXadrez = "Cavalo";

if (pecaDeXadrez == "Rainha".toLowerCase("rainha") || "rainha".toUpperCase("Rainha")) {
    console.log("pode movimentar-se quantas casas quiser ou puder, na diagonal, vertical ou horizontal, porém, apenas em um sentido em cada jogada.");
}else {
    console.log("Bispo vá para a diagonal.");
}