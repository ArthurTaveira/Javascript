const nomes = ['arthur', 'guedes', 'taveira', 'vitória', 'israel'];
console.log("1)", nomes)

//cnomes.splice(indice, delete, elementos add, elemenstos add, )

//                          (indice, Number.MAX_VALUE) - começa de tal indice e pega tudo
//pop                       (-1, 1)
const removido = nomes.splice(4, 1) // pode "recortar" quantos elementos quiser
console.log("2)", nomes, removido)

//incrementode valores

const add = nomes.splice(3, 0, 'jão')// no indice 3, não tira nenhum, põe joao
console.log("3)", nomes)

//shift

const removidos = nomes.splice(0, 1)
console.log("4)", nomes, removidos)

//push

nomes.splice (nomes.length, 'push')
console.log("5)",nomes)

// unshift

nomes.splice(0, 0, "unshift")
console.log("6)", nomes)
