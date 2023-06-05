//filter -> retorna um array com a mesma quantidade de elementos ou menos
//retorne numeros maiores do que 10

//vai iterar sobre o array

/*
function callbackFilter(valor, indice, array) {
    return ( valor > 10)
        
}
*/// da pra fazer assim sim
// passa por referencia

const numeros = [11, 10, 12, 45, 56, 76, 34, 999, 7];
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    //console.log(valor, indice, array) // foi so pra ver mesmo
     return valor > 10;
    })

console.log(numerosFiltrados)

 console.log('#####################')

 //retorne as pessoas que tem o nome com 7 letras ou mais
 //retorne as pessoas com mais de 20 anos
 // retorne as pessoas cujo nome termina com A
 
 const pessoas = [
    { nome: 'arthur', idade: 12},
    { nome: 'gues', idade: 14},
    { nome: 'taveira', idade: 54},
    { nome: 'vitoria', idade: 18},
    { nome: 'arthurr', idade : 40},
    { nome: 'joaquim', idade: 30},
 ]

 const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);//checa nome por quantidade de letras
 console.log(pessoasNomeGrande);

 const pessoaIdadeGrande = pessoas.filter(obj => obj.idade > 20 ); // checa nº da idade
 console.log(pessoaIdadeGrande);

 const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); //endsWith "termina com"
 console.log(pessoasA);
