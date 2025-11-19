const modal = document.getElementById("modal")
const grid = document.getElementById("produtos-grid")

document.querySelectorAll(".btn-detalhes").forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("modal-active")
        grid.classList.add("produtos-down")
    })
})

document.getElementById("btn-fechar").addEventListener("click", () => {
    modal.classList.remove("modal-active")
    grid.classList.remove("produtos-down")
})
