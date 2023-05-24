function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector("div#res")

    if (fano.value.lenght == 0 || fano.value > ano) {
        alert ("ERRO preencha seus dados novamente")
    } else {
        let fsex = document.getElementsByTagName('radsex')
        let idade = ano - Number(fano.value)
        
        let genero = ''

        /*if (fsex[0].checked) {
            genero = "homem"
        } else if (fsex[1].checked) {
            genero = "mulher"
        }
        */
        res.innerHTML = `sua idade é de ${idade}`
    }
}