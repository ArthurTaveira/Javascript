//como se fossem funções dentro da sua classe 

class ControleRemote{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //método de instância, usada na instancia(new)
    aumentarVolume(){
        this.volume += 2
    };

    diminuirVolume(){
        this.volume -= 2
    };

    //método estático
    static trocaPilha(){
        console.log('troquei')
        console.log(this.volume) //sem acesso a dados pois não tem intenância
    }
};

const controle1 = new ControleRemote('lg');
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);

//método estático, acessivel pela classe. sem acesso a dados da instancia
ControleRemote.trocaPilha();

 