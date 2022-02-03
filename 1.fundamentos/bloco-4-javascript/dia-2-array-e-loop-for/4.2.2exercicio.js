let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma)

//Aqui eu uso o ---"+="--- para acrescentar o resultado do FOR correndo pela ARRAY ao "SOMA",
//e coloco o "console.log(soma)" fora do "FOR" para exibir o resultado do acrescimo.