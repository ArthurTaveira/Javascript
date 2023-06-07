const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log('eita tirou 10')
            break;

        case 9:
            console.log('eita tirou 9')
            break;

        case 8:
            console.log('eita tirou 8')
            break;

        case 7:
            console.log('eita tirou 7')
            break;

        case 6: case 5: case 4: case 3: case 2:
            console.log('ESTUDA MAIS')
            break;

        default:
            console.log('não consegui ler sua not')
    }
}

imprimirResultado(7)