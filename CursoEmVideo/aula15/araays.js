let num = [4, 6, 7, 9, 0 ,]

console.log(num[2])
num[9] = 4
console.log(num[9])
num.sort() // coloca em ordem crescente
console.log(num.length)

/*
for (let i = 0 ; i < num.length ; i ++) {
    console.log(`Vetor ${num[i]}`)
}
*/

for (let i in num) {
    console.log(`o valor é ${num[i]}`)
}

