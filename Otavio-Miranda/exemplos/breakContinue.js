const numeros = [1, 2, 3, 4, 5, 6, 7, 8, ];

for (let numero of numeros) {

    if ( numero === 5 ) {
        continue; // se a condição dentro dos parenteses for verdadeira, o codigo ira voltar para o começo do if, ja alterando o indice...
    }

    if (numero === 7) {
        break; //para o codigo se a condição for verdadeira
    }
    console.log(numero);
}

    console.log('#####')

    let i = 0;

    while ( i< numeros.length) {
        let numero = numeros[i];

        if (numero == 2) {
            console.log('pulei o numero 2')
            i++; // como o incremento so acontece no final, isso geraria um loop pois nunca iria mudar
            continue;
        }

        if (numero === 7 ) {
            console.log('2 encontrando...saindo');
            break;
        }

        i++;

    }