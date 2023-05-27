const divParagrafos = document.querySelector('.paragrafos')

const paragrafos = divParagrafos.querySelectorAll('p')


const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
}

