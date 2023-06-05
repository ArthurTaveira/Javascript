//intancia - criar novos objetos (intanciação)

//todos os objetos tem uma referencia interna para um prototipo(___proto___) que vem da propriedade prototype, da função construtora que foi usada para cira-lo, quando tentamos acessar um membro de um objeto, primeiro o motor do js vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo null atéencontrar ou não o membro

function Pessoa (nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  //  this.nomeCompleto = () => 'opaaa' + this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome
}

const pessoa1 = new Pessoa('Arthur', 'guedes');
const data = new Date();

console.log(pessoa1);
console.log(data);
