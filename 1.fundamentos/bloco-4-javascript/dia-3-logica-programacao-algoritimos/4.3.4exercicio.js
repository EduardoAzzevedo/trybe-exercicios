let biggerPrimeNumber = 0;

for (let index = 0; index <= 50; index += 1){
    let isPrime = true;
    for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
        if (index % indexDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggerPrimeNumber = index
    }
}
console.log(biggerPrimeNumber)
//finalizado com a ajuda do gabarito e após muito tempo olhando pra tela pra entender um pouco de como foi feito.