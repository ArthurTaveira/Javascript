const data = new Date();
//função construtora, começa com letra maiuscula e precisa ter o "new" antes

const tresHoras = 60 * 60 * 3 * 1000; //60 vezes 60 da 1 hr, vezes 3, da 3 horas mas tem que multiplicar por 1000 no js

const data1 = new Date(0 + tresHoras); // a data zero é 01/01;1970, conhecida como Timestemp Unix



const umDia = 60 * 60 * 24 * 1000 // aqui é um dia
console.log(data1.toString())