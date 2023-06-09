const aprovados = ['arthur', 'agata', 'liz'];
const nums = [1, 2, 3, 4, 5, 6];

//map não altera o tamanho do array


const soma10 = e => e + 10
const quintuplo = e => e * 5
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado = nums.map(soma10).map(quintuplo). map(dinheiro)

console.log(resultado)

console.log('')
console.log('############')
console.log('')

const carrinho = [
    '{"nome": "borracha","preco": 3.45}',
    '{"nome": "caderni","preco": 13.45}',
    '{"nome": "lapis","preco": 23.45}',
]

const paraObjt = json => JSON.parse(json)
const preco = produto => produto.preco

let final = carrinho.map(paraObjt).map(preco);
console.log(final)

console.log('')
console.log('############')
console.log('')


