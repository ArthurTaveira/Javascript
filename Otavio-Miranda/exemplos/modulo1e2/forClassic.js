for (let i = 0; i<=5; i++) { 
    console.log(`Linha ${i}`)
}

// for (cria uma varaviavel e diz o valor que ela começa ; até onde a variavel vai; sempre que completar o ciclo, acrescenta a quantidade que vc quiser (1/ 10/ 343)

//Ex reverse
for (let i = 1000; i>=500; i-= 100) {
    console.log(`Linha ${i}`)
}

//checando se é par ou impar
for (let i = 0; i <= 10 ; i++) {
    const par = i % 2 === 0 ? 'par' : 'Impar'
    console.log(i, par)
}

const frutas = ['Maça', 'Pera', 'Abacate', 'Mamão']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i])
}