/*
escreva um função que recebe um numero e
retorne o seguinte; 
numero é dividivel por 3 = fizz
numero é divisivel por 5 = buzz
numero é divisivel por 3 e 5 = fizzbuzz
numero nãp é divisivel por 3 e 5 reotrna o proprio numero
checar se o numero é realmente um numero
use a funcap com numeros de 0 a 100
*/

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'FIzz';
    if (numero % 5 === 0) return 'Buzz'
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
