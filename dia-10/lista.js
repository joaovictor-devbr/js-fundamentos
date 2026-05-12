const texto = document.getElementById("texto")
const btnAdd = document.getElementById("btnAdd")
const lista = document.getElementById("lista")

btnAdd.addEventListener("click", () => {

    if(texto.value.trim() === ""){
        return
    }

    const li = document.createElement("li")

    const tarefa = document.createElement("span")
    tarefa.textContent = texto.value

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "Remover"

    btnRemover.classList.add("remover")

    btnRemover.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(tarefa)
    li.appendChild(btnRemover)

    lista.appendChild(li)

    texto.value = ""
    texto.focus()
})