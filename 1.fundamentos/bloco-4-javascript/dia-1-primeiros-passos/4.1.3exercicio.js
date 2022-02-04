//Faça um programa que retorne o maior de três números. Defina no começo do programa 
//três constantes com os valores que serão comparados.
const a = 3;
const b = 4;
const c = 5;
if ( a > b && a > c) {
    console.log(a);
}else if ( b > a && b > c) {
    console.log(b);
}else {
    console.log(c);
}