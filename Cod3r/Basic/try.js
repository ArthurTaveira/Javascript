
function trataErro(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        trataErro(e)
    }
}

const obj = {
    nome: "arthur",
    idade: "18",
}

imprimirNomeGritado(obj)