//filter, map e reduce

const numeros = [1, 2, 3, 4, 5, 6, 7, 12, 8, 9, 90, 200]

const numerosPares = numeros.
filter((valor) => valor % 2 === 0). 
map((valor) => valor * 2). 
reduce ((acumulador, valor) => acumulador + valor)

console.log(numerosPares)