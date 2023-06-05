//formas de iterar arrays

const a1 = [10, 20, 03, 40, 50, 60, 70, 08, 90,]

/*

for ( let valores of a1) {
    console.log(valores)
}
*/
let total = 0;
a1.forEach((valor, indice) => total += valor // simulação de reduce
)
console.log(total)
console.log(total)

