
const _velocidade = Symbol('velocidade')
//utilizado parafazer uma chave privada
//utilizanda apenas dentrodo objeto

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        console.log( 'getter')
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('setter')
        if(typeof valor !==  'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');



//for ( let i = 0; i <= 200; i++){
//    c1.acelerar()
//}
c1.velocidade = 99//isso é setter

console.log(c1.velocidade)
//quando quer acessar o valor, ele na vdd ta usando getter

console.log('')
console.log(    '@@@@@@@@@@@@@@')
console.log('')

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome +  ' ' + this.sobrenome
    }

    set nomeCompleto(valor) { //esse valor que vai dentro do setter é o valor que vai depois do sinal de atribuição
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa ('arthur', 'guedes');
console.log(p1.nomeCompleto)//fazendo uso do getter, possivel acessar como atributo

p1.nomeCompleto = 'arthur guedes taveira';
console.log(p1.nome, p1.sobrenome)