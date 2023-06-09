const aprovados = ['arthur', 'agata', 'liz'];

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
}) //funcao de callback. 1º parametro é o elemento, 2º é o indice do elemento em execução

//exibe o indice e o que esta ocupando aquele indice

const exibirNome = aprovado => console.log(aprovado)
aprovados.forEach(exibirNome)

console.log('')
console.log('############')
console.log('')

