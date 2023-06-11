const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const info = document.querySelector('.pre')

informacoes();

//sol: U+FE0F
//cafe: U+2615

//Donut:  U+1F369
// porDoSol: U+1F307

//luaMinguante: U+1F319
//luaNova: U+1F311

function informacoes() {
  const Data = new Date()

  const Dia = document.querySelector('.dia');
  const Hora = document.querySelector('.hora');
  const Semana = document.querySelector('.semana')
  const emoji1 = document.querySelector('.emoji1');
  const emoji2 = document.querySelector('.emoji2')
  const container = document.querySelector('.container')
  const corpo = document.body;

  let hora = Data.getHours();
  let min = Data.getMinutes();
  let dia = Data.getDate();
  let mes = (Data.getMonth() + 1);
  let ano = Data.getFullYear();
  let semana = Data.getDay();

  let semanaReal = ['Domingo', 'Segunda-Feira', 'Segunda-Feira', 'Segunda-Feira', 'Segunda-Feira', 'Segunda-Feira', 'Sábado']

  let formatarDia = `${zeroEsquerda(dia)}/${zeroEsquerda(mes)}/${ano}`

  let formatarHora = `${zeroEsquerda(hora)}:${zeroEsquerda(min)}`

  function zeroEsquerda(num) {
    if (num < 10) return `0${num}`
    return num
  }

  if (hora > 18) {
    return Noite()
  }

  if (hora > 12) {
    return Tarde();
  }

  if (hora > 0) {
    return Horarios()
  }

  function Noite() {

    mudaEmoji(`\u{1F319}`, '\u{1F311}');
    mudaInfo(Dia, Hora, Semana, '#3c3c3c', 'white');
    mudaFundo('#3c3c3c', 'black', '#CFCFC4' );

  }

  function Tarde() {

    mudaEmoji('\u{1F369}', '\u{1F307}' );
    mudaFundo('#f67828', 'black', 'white');
    mudaInfo(Dia, Hora, Semana, '#f67828', 'black' );

  }

  function Horarios(){

    Dia.innerHTML = formatarDia;
    Hora.innerHTML += formatarHora;
    Semana.innerHTML = semanaReal[semana];

  }

  function mudaEmoji(num1, num2) {

    emoji1.innerHTML = num1;
    emoji2.innerHTML = num2; 

  }

  function mudaFundo(fundo, letra, fundo2 = 'white') {

    corpo.style.background = fundo;
    corpo.style.color = letra;
    container.style.background = fundo2;

  }

  function mudaInfo(dia, hora, semana, fundo, letra) {
    Horarios()

    const horarios = [dia, hora, semana];

    for (let i = 0; i <= 2; i++) {
      //acho que da for in
      horarios[i].style.background = fundo;
      horarios[i].style.color = letra
    }

  }

}


function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Excluir';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaBotaoCheck(li) {
  li.innerText += '';
  const botaoCheck = document.createElement('input')
  setAttribute('type', 'checkbox')
  setAttribute('id', 'check')
  li.appendChild(botaoCheck)
}

function criaTarefa(textoInput) {
  info.remove()
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();

}

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

document.addEventListener('mouseenter', function (e) {
  const el = e.target;


  if (el.classList.contains('apagar')) {
    const botaoApg = document.querySelector('.apagar')
    botaoApg.style.backgroundColor = 'red';
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();

