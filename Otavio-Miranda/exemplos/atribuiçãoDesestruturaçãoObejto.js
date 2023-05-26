const pessoa = {
    nome: 'Arthur',
    sobrenome: 'GUedes',
    idade: '18',
    endereco: {
        rua: 'Av Brasil',
        numero: 200,
    }

}

const { nome, sobrenome, idade = "", endereco } = pessoa // atribuição via desestruturação. atribuí a idade um valor vazio
console.log(nome);

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero)

// const { nome: valor1, sobrenome: valor3, idade: valor3 = "" } = pessoa
//aqui eu atribui outra variavel, era nome no objeto agora é "valor1"