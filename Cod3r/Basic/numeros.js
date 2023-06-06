const peso = 01
console.log(Number.isInteger(peso))// saber se o number é inteiro

const nota1 = 7.987
const nota2 = 9.834
const media = (nota1 + nota2) / 2

console.log(media)
console.log(media.toFixed(0))
console.log(media.toFixed(1))
/*toFixed ele limita quantidade
de casas decismais*/
console.log(media.toString(2)) //binario
console.log(typeof media)


console.log(`1 + 1 = ${1 + 1}`) 

//cuidados com Number

console.log(7 /0)
console.log('10' / 2) // soma e subtração não presta com string
console.log('show' * 2)
console.log(0.1 + 0.7) // fica bugado
//console.log(10.toString)
