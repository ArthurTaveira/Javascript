function funcao() {
    console.log('ola')
}

funcao('valor')

//parametros não foram definidos, por que um argumento tenha sido enviado, ele não vai ser lido

//voce pode usar "arguments" dentro da funcao() então mesmo sem parametros vai armazenar os argumentos que voca mandou

console.log("######")

function funcao2() {
    console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
    //valores podem ser consultadas com os[]
    //arguments[1] - pega o segundo valor dentro de arguments
}

funcao2( 1, 2, 3)

//apenas para function delcaradas com function

console.log("######")

function funcao3 (a, b = 1){
    //se o valor de b não for enviado, assume o papel do numero definido
    console.log(a * b);
}

funcao3 (2)

console.log("######")

function funcao4(a, b =1, c= 3){
    console.log(a + b + c)
}

funcao4(1, undefined, 10) //a forma de b assumir o valor que foi pre determinado nos parametros é utilizando undefinid, se for string fazia ele concatna e se for 0, vai assumir como 0]

console.log("######")

//desestruturação de objetos

function funcao5 ({valor1, valor2, valor3}) {
    console.log(valor1, valor2, valor3, arguments)
}

funcao5 ({valor1: 'Agata', valor2:"arthur", valor3: "yoh", valor4: 'isra'})

console.log("######")

//desestruturação de arryas

function funcao6 ([indice1, indice2, indice3]) {
    console.log(indice1, indice2, indice3)
}

funcao6 (['agata', 'arthur', 'israel'])

console.log("######")

//funcao para fazer somas

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '%') acumulador %= numero;
    }
    console.log(acumulador)
}

//utiliza-se 3 pontos pois apos os 2 primeiros argumentos, armazenados em "operador" e "acumulador"  serão armazenados no "numeros"

conta("+", 0, 3, 7, 3, 8, 5)
