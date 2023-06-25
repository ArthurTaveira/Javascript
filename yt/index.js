
const tempo = setTimeout(function(){

}, 5000);

// vai chamar a função dps de 5 segundos

function parar(){
    clearTimeout(tempo)
}

//vai parar a contagem

const cronometro = setInterval(() => {
    //vai repetir o que tiver aqui dentro 
}, 1000);

function parar2(){
    clearInterval(cronometro)
}