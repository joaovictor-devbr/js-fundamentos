const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");


// Evento de clique no botão
botao.addEventListener("click", function () {

    document.body.style.backgroundColor = "lightblue";

    titulo.innerText = "O botão foi clicado!";
});


// Evento de digitação
campo.addEventListener("input", function () {

    resultado.innerText = 
    "Você está digitando: " + campo.value;
});