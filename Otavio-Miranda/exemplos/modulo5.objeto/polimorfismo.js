//mesmo codigo de sub-classes se comportando de forma diferente

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        console.log(`Saldo insuficente seu saldo é de R$${this.saldo}`)
        
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}


Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag. : ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficiente seu saldo é de R$${this.saldo}`)
        return
    }

    this.saldo -=valor;
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca

const conta1 = new Conta(11, 22, 200);
const conta2 = new ContaCorrente (33, 44, 0, 100)
const conta3 = new ContaPoupanca(11, 22, 500)

conta3.sacar(499)