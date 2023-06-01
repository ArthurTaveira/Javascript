function criaCalculadora() {

    return {

       display: document.querySelector('.display'),
       btnClear: document.querySelector('.btn-clear'),

       inicia() {
        
        this.cliqueBotoes();
        this.clearDisplay();
        this.pressionaEnter();

        },

       clearDisplay(){
        this.display.value = ''
       },

       apagaUm(){
        this.display.value = this.display.value.slice(0, -1);
       },

       btnParaDisplay(valor) {
        this.display.value += valor
       },

       realizaConta(){
        let conta = this.display.value;

        try {
            conta = eval(conta)
            if(!conta) {
                window.alert("conta invalida");
                return;
            }

            this.display.value = conta

        } catch(e){
            window.alert("conta invalida");
            return;
        }
        
       },
       /*
       pressionaEnter() {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        //em desenvolvimento
        })
       },
       */

        cliqueBotoes() {
            document.addEventListener('click', (e) => { //arrow fuction possuem this "travado", não alteram o valor do child
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

    };
}

const calculadora = criaCalculadora()
calculadora.inicia()
