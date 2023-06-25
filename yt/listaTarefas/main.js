
const inputTexto = document.querySelector('#inputTarefa')

const BotaoAdiciona = document.querySelector('#btn-add')

let contador = 0

const main = document.querySelector('#areaLista')

function addTarefa(){
    let valorInput = inputTexto.value

    if (!valorInput) return

    ++contador

    let novoItem = ` <div id=${contador} class="item">
    <div class="item-icone" onclick=marcarTarefa(${contador})>
        <i id='icone_${contador}'class="mdi mdi-circle-outline"></i>
        
    </div>
    <div class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button class="delete" ><i class="mdi mdi-delete" onclick='deletar(${contador})'></i>Delete</button>
    </div>
</div>`

main.innerHTML += novoItem
inputTexto.value = " ";
inputTexto.focus();
}

inputTexto.addEventListener('keyup', function(evento){
    
    if(evento.keyCode === 13){
        evento.preventDefault();
        BotaoAdiciona.click();
    }
})

function deletar(indice) {
    let tarefa = document.getElementById(indice);
    tarefa.remove()
}

function marcarTarefa(indice){
    let item = document.getElementById(indice);
    let classe = item.getAttribute('class')


    if(classe === 'item') {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_'+indice)

        icone.classList.remove('mdi-circle-outline')


        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_'+indice)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
    }
}

