//for In percorre os elementos de um determinda estrutura

//vai percorrer pelos INDICES - IN(INDICE)

const notas = [1.4, 5.6, 3.5, 2.6];

for(let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome:'arthur',
    sobrenome :'aguedes',
    idade: 18
}

for (let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}