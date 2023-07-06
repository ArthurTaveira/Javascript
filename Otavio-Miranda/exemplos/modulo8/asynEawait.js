
function Rand(min=0, max=0){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}


function espera(msg, tempo){

return new Promise((resolve, reject) => { 

    if(typeof msg !== 'string') {
        reject('BAD VALUE');
        return;
    }

    setTimeout(()=> {
        resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo)

} );

}

// espera("FAse 1 ", Rand())
// .then(valor => {
//     console.log(valor);
//     return espera("Fase 2", Rand());
// })
// .then(fase => {
//     console.log(fase);
//     return espera("Fase 3", Rand())
// })
// .then(fase=> console.log(fase))
// .catch(erro=> console.log(erro))

//algo sincrono, algo na ordem, sicronia


async function executa(){

    try {

        const fase1 = espera("FAse 1 ", Rand()); //exemplo quando não tem await
        console.log(fase1)
     
        const fase2 = await espera("FAse 2 ", Rand());
        console.log(fase2)
     
        const fase3 = await espera("fase 3", Rand());
        console.log(fase3)
     
        console.log("terminamos na fase: ", fase3);

    } catch(erro) {

        console.log(erro)
        
    }


}

executa()

//so é possivel utilizar aawait depois de async, é como se fosse um grande then, mas n possui catch ent é interessante envolver num try-catch
//outro adendo, ela vai executando e mostrando ent se a primeira for aceta ela mostra mas se a segunda for rejeitada ent a segunda e o resto náo serao executados

/*
pending - pendendte
fullfille - resolvida
reject - rejeitada
*/


