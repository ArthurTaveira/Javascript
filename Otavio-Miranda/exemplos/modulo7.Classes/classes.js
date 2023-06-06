
//classes se assemelham a função construtora

//as classes possuvel seu prorio prototype, não é necessario criar

class Pessoa {
constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}

falar(){
    console.log(`${this.nome} oiee`)
}

dormir(){
    console.log(`${this.nome} a mimir`)
}
}

const p1 = new Pessoa('arthur', 'guedes')
console.log(p1.dormir())