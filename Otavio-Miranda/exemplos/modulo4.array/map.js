
// map -> retorna o mesmo tamanhodo array
// map altera o valor do array, criando um novo array, tomando por base o array antigo


const numeros = [1, 2, 3, 4, 5, 6, 7]

//dobrar

const numerosDobro = numeros.map(function(valor, indice, array){
    return valor * 2
})

console.log(numerosDobro)


//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remove apenas a chave "Nome" do objeto
//adicione uma chave id em cad objeto

const pessoas = [
    {nome: 'arthur', idade: 63},
    {nome:"guedes", idade: 34},
    {nome: 'taveiira', idade: 10},
    {nome: 'agata', idade: 18},
    {nome: "jeff", idade: 20},
    {nome: 'vitor', idade: 60},
];

const nomes = pessoas.map(valor => valor.nome)
const idade = pessoas.map(obj => ({idade : obj.idade})) //necessario envolver o objeto em parenteses pois dava conflito com as chaves da propria função
const ids = pessoas.map(function(obj, indice){
    const newObj = {...obj} // copiando o obj
    newObj.id = indice
    return newObj;
})
console.log(ids)
console.log(pessoas)

