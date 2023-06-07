//quantidade indeterminada de reptição

function getNumInteiro(min, max) {
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

//enquanto
//enquanto for verdadeiro, execute

let opcao = 0 

while(opcao != 1) {
    opcao = getNumInteiro(-1, 5)
    console.log(opcao)
}