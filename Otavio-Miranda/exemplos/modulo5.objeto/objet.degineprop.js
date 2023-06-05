//definePropert
//defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // faz ser exibido a chave ( mas não o valor)
        value: function(){
            return estoque;
        }, // captura o valor de estoque e coloca junto de sua chave
        writable: true, // impede alterações futuras no valor da chave
        configurable: false // "é possivel reconfigurar a chave estoque?" true ou false, tambem não permite apagar a variavel

    })
}

const p1 = new Produto('camisa', 20, 3)
p1.estoque = 4
console.log(p1)

console.log("#############")

console.log(Object.keys(p1)) //exibe as chaves enumerable

console.log("#############")

for ( let chave in p1) {
    console.log(chave)
}

console.log("#############")
console.log("=============")

//definiePropeties


function Produto2 (nome, preco, estoque){
     Object.defineProperty(this,  'estoque', {
        enumerable:true,
        value: estoque,
        writable: false,
        configurable: true

     });

     Object.defineProperties(this, {

        nome: {   

            enumerable:true,
            value: nome,
            writable: false,
            configurable: true},

        preco: {

            enumerable:true,
            value: preco,
            writable: false,
            configurable: true, 
        },
     })
}

const p2 = new Produto2('short', 40, 200)
console.log(p2)