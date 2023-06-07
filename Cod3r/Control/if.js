Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}
const imprirmirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('top')
    } else if (nota.entre(7, 8.99)) {
        console.log('quase');
    } else if(nota.entre(0, 6.99)) {
        console.log('mais sorte dps')
    }
}

imprirmirResultado(6)


