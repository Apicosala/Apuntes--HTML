const colorRam = document.querySelector("#Titulo"); // hemos seleccionado el elemento con la clase otroNombre.
const btn = document.querySelector(".boton"); // hemos seleccionado la clase boton.
const randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
}
btn.addEventListener("click", () => {
    colorRam.style.color = randomColor();
});