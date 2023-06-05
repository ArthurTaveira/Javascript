// capaz de reduzir um array a um unico elemento

// multiplos de 2 (filter)
const numeros = [2, 3, 4, 5, 6, 7]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0 ) acumulador.push(valor)
    return acumulador;
}, []) // aqui é o valor inicial do acumualdor

console.log(total)

//dobra (map)
const total2 = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2)
    return acumulador
}, [])

console.log(total2)

//soma de todos os valores (reduce nativo)

const total3 = numeros.reduce(function(acumulador, valor){
    
    acumulador += valor;
    return acumulador

})

console.log(total3)

//somando todos os numeros pares

const total4 = numeros.reduce(function(acumuador, valor){
    if (valor % 2 === 0) {
        acumuador += valor;
        
    }
    return acumuador
}, 0)

console.log(total4)

console.log("################")

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'arthur', idade: 63},
    {nome:"guedes", idade: 34},
    {nome: 'taveiira', idade: 10},
    {nome: 'agata', idade: 18},
    {nome: "jeff", idade: 200},
    {nome: 'vitor', idade: 600},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
}, 0)

console.log(maisVelha)
