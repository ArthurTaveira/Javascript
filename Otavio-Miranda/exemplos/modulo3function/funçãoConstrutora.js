//função construtora reotrna objetos!!
//construtora-> inicia com letra maiuscula pois começa com "new" ex: new Pessoa()
// a função construtora JA É um objeto

function Pessoa(nome, sobrenome) {
    //variaveis privadas
    const Id = 123456;

    const metodoInterno = function() {

    }

    //atributos ou metodos publicos, utilizando marcação de ponto ex (p1.nome)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    };
}

const p1 = new Pessoa('arthur', 'guedes');
console.log(p1.nome)
console.log(p1.metodo())