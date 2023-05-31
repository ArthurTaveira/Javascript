const frutas = ['maça', 'pera', 'uva'];

/*
for (let i = 0; i <frutas.length; i++) {
    console.log(frutas[i])
}
*/
// -> for in lê os índices(array) ou chaves do objeto

for (let i in frutas) {
    console.log(frutas[i])
}

const pessoas = {
    nome: 'Arthur',
    sobrenome: "Guedes",
    idade: '18',
    genero: 'homem'
}

for (let chave in pessoas) {
    console.log(chave, pessoas[chave]);
}

