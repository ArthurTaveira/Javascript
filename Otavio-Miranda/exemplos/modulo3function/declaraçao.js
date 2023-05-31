// delcaração de função
// utilizando o nome     "fuction" hoisting - todas as funções sobem, pode chamar a função tanto antes quanto depois da função ser criadas

function digaOla () {
    console.log('oi')
}

digaOla()

// first-class objetcs (objetos de primeira classe) 
//function expression
//basicamente podem ser tratadas como um dado, tipo string e numbers, podem estar dentro de variaveis

const souUmDado = function() {
    console.log('opa')
}


function executaFucao(funcao){
    funcao();
    console.log('estarei aqui')
}

executaFucao(souUmDado)


//possivel criação de arrow function EMCS 2015/2016

const arrowFunction = ( ) => {console.log('sou uma arrow')}

arrowFunction()

//fuctions dentro de objetos

const obj = {
    Falar: function() {
        console.log( 'estou falando ...')
    }
}

obj.Falar()


/*
const obj = {
    Falar() {
        console.log( 'estou falando ...')
    }
}
esse método é uma forma mais moderna
*/

