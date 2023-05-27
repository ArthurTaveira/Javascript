//escreva uma função que receba 2 numeros e retorne o maior deles e retorne o maior deles

function maxNumber (num1, num2) {
    const numberFinal = Math.max(num1, num2);
    return numberFinal;
}

console.log(maxNumber(11,9))

const max2 = (x, y) => x > y ? x : y
console.log(max2(10,20))


