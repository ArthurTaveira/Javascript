const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    tarefas.appendChild(li);
    li.innerHTML = textoInput;
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas()
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', "apagar")
    botaoApagar.setAttribute('title', "Apagar esta tarefa")
    li.appendChild(botaoApagar);
}

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li');
    const ListaDeTarefas = [];

    for( let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        ListaDeTarefas.push(tarefaTexto)  
    }

    const tarefasJSON = JSON.stringify(ListaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

} 

function adicionaTarefasSalvas() {
   // if (!localStorage.getItem('tarefas')) return;
    const tarefas= localStorage.getItem('tarefas');
    const ListaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of ListaDeTarefas) {
        criaTarefa(tarefa)
    }
}

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return window.alert('[ERRO] nenhuma nova tarefa detectada !!');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return window.alert('[ERRO] nenhuma nova tarefa detectada !!');
        criaTarefa(inputTarefa.value);
    }

})

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
    }

})

adicionaTarefasSalvas()
