//const data = new Date();
//função construtora, começa com letra maiuscula e precisa ter o "new" antes

const tresHoras = 60 * 60 * 3 * 1000; //60 vezes 60 da 1 hr, vezes 3, da 3 horas mas tem que multiplicar por 1000 no js

const dataUnix = new Date(0 + tresHoras); // a data zero é 01/01;1970, conhecida como Timestemp Unix

// voce pode colocar dentro dosparametros ... ano, mes, dia, hora, minuto, segundo, milissegundo

const dataX = new Date('2023-04-24 20:20:40');

console.log("Dia ", dataX.getDate());
console.log("Mês ",dataX.getMonth()) ;//mês começa do 0
console.log("Ano ",dataX.getFullYear());
console.log("Hora ",dataX.getHours());
console.log("Minuto ",dataX.getMinutes());
console.log("Segundo ",dataX.getSeconds());
console.log("Milisegundo ",dataX.getMilliseconds());
console.log("Dia da Semana ",dataX.getDay()); //0-domingo, 6 -sabado
console.log("MiliSegundos totais: " , Date.now());


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formatarData (data) {
    const dia =  zeroAEsquerda (data.getDate())
    const mes =  zeroAEsquerda (data.getMonth() + 1)
    const ano =  zeroAEsquerda (data.getFullYear())
    const hora =  zeroAEsquerda (data.getHours())
    const minuto =  zeroAEsquerda (data.getMinutes())
    const segundo =  zeroAEsquerda (data.getSeconds())
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil)

