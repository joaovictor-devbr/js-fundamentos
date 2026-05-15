const usuario = {
    nome: "João",
    email: "joao@example.com",
    idade: 19,
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentar: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.endereco.cidade}`);
    }
}