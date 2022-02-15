//quero uma função que me devolva, o indice que guarda o menor valor de um array.
function numbInteger(array) {
    let lowerInteger = 0;//definir onde vou armazenar o indicie com o menor numero.
    for (let key in array) {//preciso percorrer o array
        if (array[lowerInteger] > array[key]) {//quando percorrer, definir o menor valor
            lowerInteger = [key];// armazenar o >>INDICE<< com o >menor valor do array<
        }
    }
    return lowerInteger;//retorna o indice armazenado(mostra)
}
console.log(numbInteger([2, 4, 6, 7, 10, 0, -3]));//executa/testa a função