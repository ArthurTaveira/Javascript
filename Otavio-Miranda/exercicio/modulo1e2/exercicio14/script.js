function meuRelogio() {
    function criaHoradosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: "GMT",
        })

    }

    function iniciaRelogio() {

    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.inicar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoradosSegundos(segundos)

        }, 1000)
    }


    iniciar.addEventListener("click", function (e) {
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado')

    })

    pausar.addEventListener('click', function (e) {
        clearInterval(timer);
        relogio.classList.add('pausado')
    })

    zerar.addEventListener('click', function (e) {
        relogio.innerHTML = '00:00:00'
        segundos = 0
        relogio.classList.remove('pausado')
    })


}

meuRelogio()

