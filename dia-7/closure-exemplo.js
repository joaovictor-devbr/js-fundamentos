function criarContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(`Contador: ${contador}`);
  };
}

const incrementar = criarContador();

incrementar();
incrementar();
incrementar();