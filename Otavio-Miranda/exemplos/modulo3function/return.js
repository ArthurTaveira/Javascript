function soma(a, b){
    console.log(a + b);
}

soma(2,3)

console.log("########")

/*
document.addEventListener('click', function(){
    document.body.style.backgroundColor = "red";
})
ex de função que não retorna nenhum valor
*/

function criaPessoa(nome, sobrenome ) {
    return {nome, sobrenome : sobrenome};
}

const p1 = criaPessoa('Arthur', 'Guedes');

//essa funcão de cuma faz a mesma coisa que a de baixo

const p2 = {
    nome: 'Arthur',
    sobrenome: 'Taveira'
}

console.log(typeof p1,typeof p2)



console.log('########')

function falaFrase(começo){
    function falaResto(resto){
        return começo + ' ' + resto
    }

    return falaResto
}

const fala = falaFrase('olá')
const resto = fala('mundo')

console.log(resto) 

//imagina as setinhas
//so precisa exibir a ultima constante.

console.log("#####")

function duplica(n) {
    return n * 2
}

function triplica (n) {
    return n * 3
}

function quadriplica (n) {
    return n * 4
}

console.log(duplica(3))
console.log(triplica(3))
console.log(quadriplica(3))

console.log("#####")

function criaMultiplicador(multiplicador){
    return function (n) {
        return n * multiplicador;
    };
}

    const Duplica = criaMultiplicador(2)
    const Triplica = criaMultiplicador(3)
    const Quadriplica = criaMultiplicador(4)

    //anotação : calculadora

    console.log(Duplica(2))
    console.log(Triplica(3))
    console.log(Quadriplica(4))

    //função clouser / fechamento