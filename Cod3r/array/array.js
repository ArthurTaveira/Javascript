//deixar o array restrito a um tipo de numero

let aprovado = new Array('art', 'agat', 'liz');

aprovado[10] = 'gabriel';
aprovado.sort(); //ajeita o ngc

//delete aprovado[1] //deleta e poe undefine
aprovado.splice(1, 1, 'elementoAidiconal', 'outrelemento') //do indice 1, tira 1
console.log(aprovado);

