function carregar() {

    let msg = document.querySelector('div#msg')
    let img = document.querySelector('#imagem')
   
    let data = new Date()
    let min = data.getMinutes()
    let hora= data.getHours()
    let sec = data.getSeconds()

    
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#D59746'
        
   } else if (hora >=12 && hora < 17) {
        img.src="img/fototarde.png"
        document.body.style.background = '#BD2E01'
   } else {
        img.src="img/fotonoite.png"
        document.body.style.background = '#231F20'
   }
}  

//#D59746
//#BD2E01
//#231F20