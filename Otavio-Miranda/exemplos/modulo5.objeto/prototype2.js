//manipulando prototypes

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB : 'B'
}

const objC = {
    chaveC : "C"
}

Object.setPrototypeOf(objB, objA) // o prototype de B é o de A
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveA)/

console.log('##########################')

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

const p2 = {
    nome: 'display',
    preco: 1000
}

const p3 = Object.create(Produto.prototype);
p3.preco = 100

Object.setPrototypeOf(p2, Produto.prototype)

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * percentual / 100)
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * percentual / 100)
}

const p1 = new Produto('short', 30);

p1.desconto(30);
p1.aumento(10);
console.log(p1);

console.log('###########');

p2.aumento(20);
p2.desconto(10);
console.log(p2);

console.log('###########');

p3.aumento(10);
console.log(p3);

