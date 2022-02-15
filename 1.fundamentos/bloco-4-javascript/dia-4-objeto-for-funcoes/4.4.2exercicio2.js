//quero uma função que me devolva, o indice que guarda o maior valor de um array.
function numbInteger(array) {
    let hightInteger = 0;//definir onde vou armazenar o indicie com o maior numero.
    for (let key in array) {//preciso percorrer o array
        if (array[hightInteger] < array[key]) {//quando percorrer, definir o maior valor
            hightInteger = [key];// armazenar o >>INDICE<< com o >maior valor do array<
        }
    }
    return hightInteger;//retorna o indice armazenado(mostra)
}
console.log(numbInteger([2, 3, 6, 7, 10, 1]));//executa/testa a função