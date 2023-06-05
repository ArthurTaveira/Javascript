/*
const nomes = new Array('arthur', 'guedes', 'taveira')
console.log(nomes)
*/

const nomes = [ 'arthur', 'guedes', 'israel']; //chamadode array literal

const  novoArray = [...nomes] //em vez de passar por referencia, utilizamos o operador rest para fazer uma "cópia" dos iten no array

const removido = novoArray.pop()
console.log("1)", novoArray)
console.log("2)", removido)
console.log("3)", nomes)

//normalmente o valor seria alterado tanto em "nomes" quanto em "novoArray"

delete nomes[2];
console.log("4)", nomes)

nomes[2] = 'yohanan';
console.log("5)",nomes) 

console.log("5)", nomes.slice(0, 2))
console.log("6)", nomes.slice(1, -1))

//tranformar uma string longa no array
console.log("####") 

const maisNomes = "Arthur guedes taveira"
console.log("7)",maisNomes)
const maisNomesArray = maisNomes.split(' ')
console.log("8)",maisNomesArray)

const nome = nomes.join(', ')
console.log("9)",nome) // transforma array em string 