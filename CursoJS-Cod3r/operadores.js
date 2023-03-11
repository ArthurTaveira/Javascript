/*
Aritméticos + - * / % **

Atribuição v-=4 v+=4 v-- v++ --v ++v

Relacionais < > <= >=
== (igual)
=== (identifco, string e numero)
!= (diferente)

Lógicos 
se é verdade ou é falso k 
! (negação)
&& ( vai ter duas opções, vdd ou fake, se uma delas for fake ent tudo é fakee)
|| vai ter duas opção dnv, se uma delas for fake e uma for real ai ja é true 

terrmnário ?: na mesma linha, '?' vai identificar o que aparece se no final for real. e ":" vai aparecer se no final for fake'
*/

var n1 = 8
var n2 = 4

//OPERADORES ARITMÉTICOS
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 ** n2)
console.log(n1 % n2)
console.log(n1 / n2)

//OPERADORES DE ATRIBUIÇÃO
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 <= n2)
console.log(n1 >= n2)
console.log(n1+=4)
console.log(n2-=4)
console.log(++n1)
console.log(n1++) // precisa pedir para exibir o valor depois
console.log(n1)
console.log(n1 != n2)
console.log(n1 !== n2)

//OPERADORES LÓGICOS ! && ||

n1 = 8
n2 = 4
console.log ('operador de logica')
console.log( n2 * 2 == n1 && n1 == 8) // precisa ser vdd e vdd
console.log(n1 > n2 && n1 ==n2) //vdd e fake
console.log(n1 > n2 || n1 ===n2) // vdd e vdd
console.log(n1 == n2 || n1 <n2)  // fake e 

console.log('operador de Terminário')
