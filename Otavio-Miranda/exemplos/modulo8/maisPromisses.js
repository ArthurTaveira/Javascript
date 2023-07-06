//usamos promisses quando utilzamos coisas assicronas, ou seja, coisas que nao sabemos quando vao acontecer

//promise.all
//promise.race
//promise.resolve
//promise.reject

function Rand(min, max){
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

const promises = [
    // 'primeiroValor', comentado para teste de Race, pois a string é como se fosse uma promessa ja resolvida
    espera('Promise1', Rand(1, 5)),
    espera('Promise2', Rand(1, 5)),
    espera('Promise3', Rand(1, 5)),
    // espera(1000, 1000), //apenas textando o erro
    // 'outroValor'
];

Promise.all(promises)
    .then((valor)=>console.log(valor))
    .catch((erro) => console.log(erro))

//Promise.all(coloca aqui seu array).then(cria uma funcao anonima aqui).catch(aqui vai capturar seu erro)

Promise.race(promises).
    then((valor)=> console.log(valor)).
    catch((erro)=>console.log(erro))

//race vai entregar o primeiro valor, o valor mais rapido, cuidado se for o string ou number

function baixaPagina(){
    const emCache = true;

    if (emCache){
        return Promise.reject('Pagina em Cache')
        // return Promise.resolve('Pagina em Cache')
    } else {
        return espera('baixando a pagina', 3000)
    }
}

//pode se usar Promise.resolve para forcar o resultado a cair no then e pode se usar o reject e ai ele cai no catch

baixaPagina()

    .then(dadosPagina => console.log(dadosPagina))
    .catch( e => console.log(e + ' cai no catch'))

