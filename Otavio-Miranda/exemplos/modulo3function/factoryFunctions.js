function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala(tema) {
            return `${this.nome} esta falando sobre ${tema}` 
        },
        //getter, obtemos valor pois não é mais function
        get imc() {
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2);
        },

        //setter
        set nomeCompleto(valor){
            valor = valor .split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        }

    };
}

//quando uma função está dentro de um objeto é chamado de método

const p1 = criaPessoa('Arthur', 'Guedes', 1.7, 55 );
const p2 = criaPessoa('Agata', 'Vitoria', 1.6, 43);

p1.nomeCompleto = "Jonas silva jones"

console.log(p1.imc);
console.log(p1.nomeCompleto)