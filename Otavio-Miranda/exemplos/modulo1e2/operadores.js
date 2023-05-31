/*
Operadores Lógicos
&& And
|| Or 

FALSY:
 * False
Nan
'' "" `` (vazio)
Null/undefined
0

Ex:

console.log("Luiz" && "MAria")
so tem verdades, então ele vai me retornar o ultimo valor verdadeiro, no caso maria
*/


//Operadores ternários (? :)
//(condição ) ? valor para verdader : valor para falso
let pontosUsuario = 1000 
const nivelUsuario = pontosUsuario  >= 1000 ? "Membro vip" : "Membro normal"


let corUsuario = "Rosio"
let corPadrao = corUsuario || "preto"

console.log (nivelUsuario, corPadrao)
