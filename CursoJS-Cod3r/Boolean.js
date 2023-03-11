let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Os de verdade agora

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![ ])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Os que dão resultados falsos

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || '11 ')) /* msm so com 1 valor
verdadeiro ele diz que é true
*/

let nome = ''
console.log(nome || 'desconhecido')

nome = "arthur"
console.log(nome || "desconhecido)")

nome = nome 

console.log(nome)

