function meuEscopo() {

    const titulo = document.getElementById('titulo');

    const data = new Date();
    const DiaDaSemanaReal = data.getDay();

    const diaDaSemanaTexto = DiaSemana(DiaDaSemanaReal);


    function DiaSemana(diaSemana) {

        let DiaDaSemana;

        switch (diaSemana) {
            case 0:
                DiaDaSemana = "Domingo"
                break;
            case 1:
                DiaDaSemana = "Segunda-Feira"
                break;
            case 2:
                DiaDaSemana = "Terça-Feira"
                break;
            case 3:
                DiaDaSemana = "Quarta-Feira"
                break;
            case 4:
                DiaDaSemana = "Quinta-Feira"
                break;
            case 5:
                DiaDaSemana = "Sexta-Feira"
                break;
            case 6:
                DiaDaSemana = "Sábado"
                break;
            default:
                DiaDaSemana = "Não consegui ler sua data"
        }

        return DiaDaSemana;
    }
    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`
    }

    console.log(diaDaSemanaTexto);

    function formatarData(data) {
        const dia = data.getDate();
        const mes = (data.getMonth());
        const ano = data.getFullYear();
        const hora = data.getHours();
        const min = data.getMinutes();

        function mesNome (mes) {
            let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', "Julho",'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro']
            return meses[mes]

        }

        return `${dia}/${mesNome(mes)}/${ano} ,${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
    } 

    const DataeHora = formatarData(data);
    titulo.innerHTML = `${diaDaSemanaTexto}, ${DataeHora}`















}





meuEscopo()
