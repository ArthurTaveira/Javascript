const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

const [primeiroNumero, segundoNumero, ...resto] = numeros

//...resto, ...spread

console.log(primeiroNumero, segundoNumero)
console.log(resto)

const numeros2 = [[1, 2, 4], [4, 5, 6], [7, 8, 9]]
console.logo(numeros2 [1][2]) //acessa primeiro os indices dos arrays de depois o indice dentro do array