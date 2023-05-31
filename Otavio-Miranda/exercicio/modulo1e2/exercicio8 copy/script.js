function meuEscopo() {



    const titulo = document.querySelector('#titulo')
    const data = new Date();
    const opcoes = {
        dateStyle : 'full', timeStyle : 'short'
    }

   titulo.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle : 'full', timeStyle:'short'})
}

meuEscopo()
