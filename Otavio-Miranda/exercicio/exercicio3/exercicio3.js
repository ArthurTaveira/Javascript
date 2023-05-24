let varA = 'A' //b
let varB = 'B' //c
let varC = 'C' //a

const varATem = varA

varA = varB
varB = varC
varC = varATem

console.log(varA, varB, varC)
