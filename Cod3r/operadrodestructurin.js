const pessoas= {
    nome : "Arthur",
    idade: "18",
    endereco: {
        rua: "rua feliz",
        numero: 1000
    },

}

const {nome , idade} = pessoas
console.log(nome, idade)

const {nome: n, idade: i} = pessoas
console.log(n, i)

const {endereco: { rua, numero}} = pessoas

console.log(rua, numero)

console.log("##############")

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [0, 1, 2, 3, 4, 5 ,6]

console.log(n1, n3, n5, n6)

//array dentro de array, pesquisar depois

console.log("##############")

function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min:40}
console.log(rand(obj))

console.log("##############")

function rand2( [min= 0, max = 1000]) {
    if ( min > max)  [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand2([0, 10]))
console.log(rand2([100, 0]))


