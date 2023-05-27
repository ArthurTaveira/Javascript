/*
try {
   console.log(variavelNãoexite)
} catch (erro) {
    console.log("Essa variavel não existe")
} 
*/

// tenta executar alguma assim,se não der, cai no bloco cath 
// o obloco vai exibir a mensagem

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError ('x e y e precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 4))
} catch (erro) {
    //console.log(erro)
    console.log('Alerta! Erro')
} finally {
    //aqui sempre é executado
}

