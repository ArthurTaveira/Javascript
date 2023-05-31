
    
    const form = document.getElementById('form')
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso')
        const inputAltura = e.target.querySelector('#altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)
        
        if (!peso) {
            Resultado("Peso Inválido", false);
            return;
        }

        if (!altura) {
            Resultado("Altura Inválida", false);
            return;
        }

        const imc = getImc(peso, altura);

        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc})`;

        Resultado(msg, true)
  
    })

    function getImc(peso, altura) {
        const imc = peso / altura**2;
        return imc.toFixed(2);

    }

    function getNivelImc (imc) {
        const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obseidade grau 1', 'Obsedidade grau 2', 'Obsedidade grau 3'];

        if (imc >= 39.9) {return nivel[5]};
        
        if (imc >= 34.9) {return nivel[4]};
        
        if (imc >= 29.9) {return nivel[3]};
         
        if (imc >= 24.9) {return nivel[2]};
        
        if (imc >= 18.5) {return nivel[1]};
        
        if (imc < 18.5) {return nivel[0]};
        
        //não precisa de Else if pois o return ha quebra, não precisa de {} pq é mt curto
    }

    function criaP() {

        const paragrafo = document.createElement('p');
        return paragrafo;
        


    }

    function Resultado(msg, isValido) {

        const resultado = document.querySelector('#res');
        resultado.innerHTML = ' ';
        const p = criaP();

        if (isValido) {p.classList.add('paragrafo-resultado');
    }   else {
        p.classList.add('bad')
    }
        p.innerHTML = msg;

        resultado.appendChild(p);

    }









