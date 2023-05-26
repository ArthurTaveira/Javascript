const elementos = [
    {Tag: 'p' , frase: "texto 1"},
    {tag: 'div', frase: 'texto2'},
    {tag: 'footer', frase: 'texto3'},
    {tag: 'section', frase: 'texto4' },
];

const container = document.querySelector('#section');


const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, frase } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(frase);
    tagCriada.appendChild(textoCriado)
    
    div.appendChild(tagCriada)
}

container.appendChild(div)