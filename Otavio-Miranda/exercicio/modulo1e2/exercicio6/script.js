function meuEscopo() {

    
    
    
    const form = document.querySelector('.form');
    const resultadoFinal = document.querySelector('.resultado');

    const pessoas = [];

    form.addEventListener('submit', recebeEventoForm); 


    /*
    
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
    };

    */
    
    function recebeEventoForm(evento) {
        
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push( {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso:  peso.value,
            altura: altura.value,

        });

        console.log(pessoas)

        




    } 

    resultadoFinal.innerHTML = 


    
}

meuEscopo();