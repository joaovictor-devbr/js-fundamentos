const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const botao = document.getElementById("btn");

titulo.style.color = "blue";

texto.innerText = "O texto foi alterado com JavaScript!";

botao.addEventListener("click", function () {
    titulo.style.color = "red";
    texto.innerText = "Você clicou no botão!";
});