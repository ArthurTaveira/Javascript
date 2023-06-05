//exemplo de venda de sistema para um dono de ecomerce
//camisa,caneca

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const produto = new Produto('agua', 2)

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}

function Abajur(nome, preco, material, estoque) {

    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
                
        enumerable: true,
        configurable: false,
        

        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        },


    })

};


Abajur.prototype = Object.create(Produto.prototype);
Abajur.prototype.constructor = Abajur;

const camiseta = new Camiseta('blusa', 20, 'marrom');
const AbajurLum = new Abajur('Abajur Luminoso', 40, 'ferro', 150)
camiseta.aumento(100);

AbajurLum.estoque = 100
console.log('1)', camiseta);
console.log('2)', produto);
console.log('3)', AbajurLum);

