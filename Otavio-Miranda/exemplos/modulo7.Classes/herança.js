class Disposivo {
    constructor (nome ) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' ja está ligado');
            return
        }
        this.ligado = true;
    }   
    desligar(){
        if (!this.ligado) {
            console.log( this.nome + ' Ja desligado')
        }
        this.ligado = false
    }
}
//é a mesma coisa que herdar coisas de outra classe
class Celular extends Disposivo {
    constructor(nome, cor, modelo) {
        super(nome) //aqui vai usar super e os parametros para trazer da classe pai, chamando o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo
    }
}

class Tablet extends Disposivo {
    constructor (nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('metodo alterado')
    }
}
const s1 = new Celular('samsung', 'prata', 's22 ultra')
console.log(s1)

const t1 = new Tablet('Ipad', true);
t1.ligar()
