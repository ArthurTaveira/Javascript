const pessoas = {
    nome: 'arthur',
    idade: '18',
    profissão: 'desempregado'
}

//objeto literal, com paress de chave de valor "nome:"arthur"""
console.log("1)", pessoas.idade)
console.log("2)",pessoas['idade']) // acessando de forma dinamica, pode contar function, passada por referencia

console.log('############')

const pessoa1 = new Object();
pessoa1.nome = 'arthur'
pessoa1.idade = 18

console.log("3)",pessoa1.nome)
console.log("4)",pessoa1.idade)

console.log('############')

//delete pessoa1.nome;
//console.log(pessoa1)

pessoa1.falarNome = function() {
    return(`${this.nome}, está dizendo oi`)
}

pessoa1.getDataDeNascimento = function() {
    const data = new Date()
    const ano = data.getFullYear()
    return ano - this.idade
}


console.log("5)",pessoa1.falarNome())
console.log("6)",pessoa1.getDataDeNascimento())

console.log("###################")

for ( let chave in pessoa1){
    console.log("7)",pessoa1[chave])
}

console.log("###################")

//factory fuction
//fuction constructor //new

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('arthur', 'guedes')
console.log("8)",p1.nomecompleto)

console.log("###################")

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //não pode mais alterar nada
}

const p2 = new Pessoa( 'arthur' , 'guedes')
p2.nome ='oppaaa' // não altera por causa do freeze
console.log(p2)

//ao utilizar a palavra new, cria um objeto vazio, atrelando a palavra this dentro dessa função no objeto,eo this é como se fosse um return