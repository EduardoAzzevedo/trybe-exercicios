let fatorial = 10;
let resultado = 1;
for (let index = 1; index < fatorial; index+=1) {
    resultado *= index;
}
console.log(resultado);
// correto na sequência
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);