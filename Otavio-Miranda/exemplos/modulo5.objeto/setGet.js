
//get e set função construtora

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function(){
            return estoquePrivado
        },
        //pega e exibe o valor, ele so retorna o valor

        set: function(valor){
            if (typeof valor !== 'number') {
                console.log('valor inapropriado')
                return
            }
            estoquePrivado = valor
        }



    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'o valor que eu quero'
console.log(p1.estoque)

console.log('#################')

function criaProduto(nome, preco, estoque) {
    return {
        get nome(){
            return nome
        },

        set nome(valor){
            valor = valor.replace('coisa', '')
            nome = valor
        }
    }
}

const p2 = criaProduto('bermuda', 10, 2)
p2.nome = 'qualquer coisa'
console.log(p2.nome)
