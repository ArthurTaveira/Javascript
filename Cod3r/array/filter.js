const produtos = [
    {nome:'notebook' , preco: 2000, fragil: true},
    {nome: 'ipad' , preco: 3000, fragil: false},
    {nome: 'copo', preco: 10, fragil:true },
    {nome: 'plastico' , preco: 8, fragil: false }
];

console.log(produtos.filter(function(p){
    return p.preco > 5
}))

let caro = e => e.preco > 500;
let fragil = e => e.fragil == true;

console.log(produtos.filter(caro).filter(fragil))