//immediately invoked fuction expression 

//funcao invocada imediatamente 

(function(idade, dinheiro) {
    
    const sobrenome = 'Guedes';
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('arthur'))
    
    }

    falaNome()
    console.log(idade, dinheiro)
})(18, 0);