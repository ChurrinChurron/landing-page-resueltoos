let listas = document.querySelectorAll(".preguntas__acordeon");

for(const lista of listas) {

    lista.addEventListener("click", () => {

        lista.classList.toggle("active");
    })
}