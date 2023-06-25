
function Rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}


function espera(msg, tempo){

return new Promise((resolve, reject) => { 

    if(typeof msg !== 'string') reject('BAD VALUE')
    setTimeout(()=> {
        resolve(msg);
    }, tempo)
} );

}

espera('frasee', Rand(1,5))

    .then(resposta => {
    console.log(resposta)
    return espera('frase 2', Rand(1, 5))})

    .then(resposta => {
     console.log(resposta)
     return espera( 222, Rand(1,3))
    })

    .then(resposta=> console.log(resposta))

    .then(()=> console.log("fim"))

    .catch(e => {
    console.log("ERRO", e)
    })




