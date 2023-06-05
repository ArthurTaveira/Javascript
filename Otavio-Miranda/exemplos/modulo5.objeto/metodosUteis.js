//base

const produto = {nome: 'caneco', preco: 300};
console.log('1)', produto);

//copiando

const outroProduto = {...produto, Marca: 'Arthur'}; 
console.log('2)',outroProduto);

const maisProduto = Object.assign({}, outroProduto, /*{}*/);
console.log('3)',maisProduto);

//congelamento 

/*
Object.freeze(produto);
produto.nome = 'teste';
console.log("4)", produto);
*/

//checando como estão as propriedades

Object.defineProperty(produto, 'nome', {
    writable: true,
    enumerable:true,
    configurable: false
});
console.log('5)', Object.getOwnPropertyDescriptor(produto, 'nome'));

// chaves e valores

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave,valor)
}



