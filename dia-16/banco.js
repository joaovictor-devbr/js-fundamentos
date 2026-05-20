class Conta {
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

class ContaCorrente extends Conta {
    constructor(nome, numero, saldo, limite){
        super(nome, numero, saldo);
        this.limite = limite;
    }
}

class ContaPoupanca extends Conta {
    constructor(nome, numero, saldo, aniversario){
        super(nome, numero, saldo);
        this.aniversario = aniversario;
    }
    sacar(valor){
        const dataAtual = new Date() 
        const diaAtual = dataAtual.getDate();
        const mesAtual = dataAtual.getMonth() + 1;
        const anoAtual = dataAtual.getFullYear();
        const [diaAniversario, mesAniversario] = this.aniversario.split("/").map(Number);
        if (diaAtual === diaAniversario && mesAtual === mesAniversario) {
            super.sacar(valor);
        } else {
            console.log("Saque não permitido. Hoje não é o dia de aniversário da conta poupança.");
        }
    }
}



const contaCorrente1 = new ContaCorrente("João", 12345, 1000, 500);
console.log(contaCorrente1);
contaCorrente1.depositar(500);
console.log(contaCorrente1);
contaCorrente1.sacar(2000);
console.log(contaCorrente1);

const contaPoupanca1 = new ContaPoupanca("Maria", 54321, 2000, "10/10");
console.log(contaPoupanca1);
contaPoupanca1.depositar(1000);
console.log(contaPoupanca1);
contaPoupanca1.sacar(500);
console.log(contaPoupanca1);




