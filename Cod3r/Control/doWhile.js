//executa no minino uma vez

function getNumInteiro(min, max) {
    const valor = Math.random() * (max- min) + min;
    return Math.floor(valor);
}

let opcao= 0;

do {

    opcao = getNumInteiro(0, 10)
    console.log(opcao)

} while (opcao!= 1)

