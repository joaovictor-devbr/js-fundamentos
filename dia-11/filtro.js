const botoes = document.querySelectorAll("button")
const itens = document.querySelectorAll(".item")

botoes.forEach(botao => {

    botao.addEventListener("click", () => {
        
        const categoria = botao.dataset.categoria;

        itens.forEach(item => {

            if (
                categoria === "todos" || 
                item.dataset.categoria === categoria
            ){

                item.style.display = "block";
                
            } else {
                item.style.display = "none";
            }
        });

    });
});