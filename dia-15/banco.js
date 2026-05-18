class conta {
    constructor(nome, numero, saldo){
        this.nome = nome;
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor){
    this.saldo += valor;
}
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

class ContaCorrente extends conta {
    constructor(nome, numero, saldo, limite){
        super(nome, numero, saldo);
        this.limite = limite;
    }
}

const contaCorrente1 = new contaCorrente("João", 12345, 1000, 500);
console.log(contaCorrente1);
contaCorrente1.depositar(500);
console.log(contaCorrente1);
contaCorrente1.sacar(2000);
console.log(contaCorrente1);





