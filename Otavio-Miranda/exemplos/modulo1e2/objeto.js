function criarPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`${this.nome} ${this.sobrenome} diz Olá. Minha idade é ${this.idade}`)

        },

        incrementa() {
            this.idade++;
        }
    };
}

//objeto frabric, pois é uma fabrica de objetos

const pessoa1 = criarPessoa("Arthur", "Guedes", 18);
//console.log(pessoa1)

pessoa1.fala()
pessoa1.incrementa()
pessoa1.fala()
