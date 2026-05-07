const usuario = {
  nome: "Carlos",
  idade: 25,

  saudar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

usuario.saudar();