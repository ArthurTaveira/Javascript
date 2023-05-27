// for of especifico para objetos iteraveis, que possuem indice 

const nome = 'Arthur';

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
console.log('#####');

for (let i in nome) {
    console.log(nome[i]);
}
console.log('#####');

for (let valor of nome) {
    console.log(valor);
}

//

