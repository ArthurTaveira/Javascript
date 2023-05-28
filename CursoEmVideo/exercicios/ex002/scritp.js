function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#txtano');
    let res = document.querySelector("div#res");
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.lenght === 0 || Number(fano.value) > ano) {
        alert("ERRO preencha seus dados novamente")
    } else {

        let idade = ano - Number(fano.value)

        let genero = ''

        let genMasc = document.querySelector('#masc')
        let genFem = document.querySelector('#fem')

        if (genMasc.checked) {
            genero = "homem"
            if (idade > 60) {img.setAttribute('src', 'img/idoso.png')}
            else if (idade > 24) {img.setAttribute('src', 'img/adulto.png')}
            else if (idade > 12) {img.setAttribute('src', 'img/jovemadulto.png')}
            else if(idade <= 12){ img.setAttribute('src', "img/menino.png")}
        }   
        if (genFem.checked) {
            genero = "Mulher"
            if (idade > 60) {img.setAttribute('src', 'img/idosa.png')}
            else if (idade > 24) {img.setAttribute('src', 'img/adulta.png')}
            else if (idade > 12) {img.setAttribute('src', 'img/jovemadulta.png')}
            else if (idade <= 12) {img.setAttribute('src', 'img/meina.png')}
        }

        res.style.textAlign = 'center'
        res.innerHTML = `sua idade é de ${idade} e seu genero é ${genero}`
        res.appendChild(img)
    }
}