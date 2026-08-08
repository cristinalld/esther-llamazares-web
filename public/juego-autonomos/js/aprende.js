alert("JavaScript cargado");
const pantalla = document.querySelector(".pantalla");

document
    .getElementById("empezar")
    .addEventListener("click", primeraPantalla);

function primeraPantalla() {

    pantalla.classList.add("ocultar");

    setTimeout(() => {

        pantalla.innerHTML = `

            <h2>Misión 1</h2>

            <h3>Conoce el Plan de Autónomos</h3>

            <p>

                Antes de empezar, descubre cuáles son los principales objetivos del Plan.

            </p>

            <button id="continuar">

                Continuar →

            </button>

        `;

        pantalla.classList.remove("ocultar");

    }, 400);

}