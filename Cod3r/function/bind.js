function Pessoa() {
    this.idade = 0;
    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000);//arroz function resolveria

    //outra solucaçãp

    //const self = this;

    //coloca self no lugar de this

}

new Pessoa;

class Pessoa2{
    constructor(){
        this.idade = 0
    }

}

