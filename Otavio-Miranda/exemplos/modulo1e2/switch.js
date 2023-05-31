function getDiaSemanaTexto(diaSemana){  
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo"
        break;
        case 1:
            diaSemanaTexto = "Segunda"
        break;
        case 2:
            diaSemanaTexto = "Terça"
        break;
        case 3:
            diaSemanaTexto = "Quarta"
        break;
        case 4:
            diaSemanaTexto = "Quinta"
        break;
        case 5:
            diaSemanaTexto = "Sexta"
        break;
        case 6:
            diaSemanaTexto = "Sábado"
        break;
        default:
            diaSemanaTexto = "Não consegui ler sua data";
    }

    return diaSemanaTexto;
}


const data = new Date();
let DiaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(DiaSemana)



console.log(diaSemanaTexto)

