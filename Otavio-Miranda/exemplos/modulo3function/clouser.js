function retornaFuncao(nome) {
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Arthur');
const funcao2 = retornaFuncao('Agata')

console.log(funcao(), funcao2())