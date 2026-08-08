const Game = {

    state: {

        xp: 0,
        pregunta: 0

    },

    preguntas: preguntas,

    correctaActual: 0,

    init() {

        this.box = document.getElementById("contenidoJuego");
        this.progress = document.getElementById("progreso");
        this.xp = document.getElementById("xp");
        this.mensaje = document.getElementById("mensajeJuego");

        document
            .getElementById("btnAprender")
            ?.addEventListener("click", () => {

                document
                    .getElementById("juego")
                    .classList.remove("oculto");

            });

        
        this.actualizarXP();
this.pantallaInicioModulo();
    },

    iniciar() {

        this.state.xp = 0;
        this.state.pregunta = 0;

        this.actualizarXP();

        this.actualizarBarra();

        this.pantallaInicioModulo();

    },
pantallaInicioModulo() {

    this.box.innerHTML = `

        <div class="inicioModulo">

            <h1>

                Bienvenido al módulo Aprende el Plan

            </h1>

            <p class="subtitulo">

                En este módulo aprenderás todo sobre los objetivos del Plan de Autónomos.

            </p>

            <div class="infoModulo">

                <div class="iconoModulo">

                    🎯

                </div>

                <div>

                    <h3>

                        ¿Listo para empezar?

                    </h3>

                    <p>

                        Pulsa el botón para comenzar y aprende de forma sencilla y dinámica.

                    </p>

                </div>

            </div>

            <button id="empezarCurso">

                🚀 ¡EMPEZAR MÓDULO!

            </button>

            <p class="notaModulo">

                ✔ Tu progreso se guardará automáticamente.

            </p>

        </div>

    `;

    document
        .getElementById("empezarCurso")
        .onclick = () => {

            this.mostrarPregunta();

        };

},
    actualizarXP() {

        if (this.xp) {

            this.xp.innerHTML = `⭐ ${this.state.xp} XP`;

        }

    },

    actualizarBarra() {

        const porcentaje =
            Math.round(
                ((this.state.pregunta + 1) / this.preguntas.length) * 100
            );

        if (this.progress) {

            this.progress.style.width = porcentaje + "%";

        }

        const texto = document.getElementById("porcentaje");

        if (texto) {

            texto.innerHTML = porcentaje + "%";

        }

    },

    mostrarPregunta() {

        const p = this.preguntas[this.state.pregunta];

        if (this.mensaje) {

            this.mensaje.innerHTML = p.mensaje;

        }

        this.actualizarBarra();

        const respuestas = [...p.respuestas];

        const correctaTexto = respuestas[p.correcta];

        for (let i = respuestas.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [respuestas[i], respuestas[j]] =
                [respuestas[j], respuestas[i]];

        }

        this.correctaActual =
            respuestas.indexOf(correctaTexto);

        const numeroModulo =
            this.state.pregunta < 15 ? 1 :
            this.state.pregunta < 35 ? 2 :
            this.state.pregunta < 55 ? 3 :
            this.state.pregunta < 70 ? 4 : 5;

        const preguntaModulo =
            numeroModulo === 1 ? this.state.pregunta + 1 :
            numeroModulo === 2 ? this.state.pregunta - 14 :
            numeroModulo === 3 ? this.state.pregunta - 34 :
            numeroModulo === 4 ? this.state.pregunta - 54 :
            this.state.pregunta - 69;

        const totalModulo =
            numeroModulo === 1 ? 15 :
            numeroModulo === 2 ? 20 :
            numeroModulo === 3 ? 20 :
            numeroModulo === 4 ? 15 : 10;

        this.box.innerHTML = `

            <div class="cabeceraModulo">

                <span>📚 MÓDULO ${numeroModulo}</span>

                <h2>${p.titulo}</h2>

                <small>

                    Pregunta ${preguntaModulo}
                    de
                    ${totalModulo}

                </small>

            </div>

            <p class="pregunta">

                ${p.pregunta}

            </p>

            <div class="respuestas">

                ${respuestas.map((r, i) => `

                    <button
                        class="ans"
                        data-id="${i}">

                        ${r}

                    </button>

                `).join("")}

            </div>

        `;

        document
            .querySelectorAll(".ans")
            .forEach(b => {

                b.onclick = (e) => {

                    this.answer(

                        Number(
                            e.target.dataset.id
                        )

                    );

                };

            });

    },
        answer(i) {

        const correcta = this.correctaActual;

        const botones = document.querySelectorAll(".ans");

        botones.forEach((boton, n) => {

            boton.disabled = true;

            if (n === correcta) {

                boton.classList.add("acierto");

            }

            if (n === i && i !== correcta) {

                boton.classList.add("error");

            }

        });

        if (i === correcta) {

            this.state.xp += 10;

            this.actualizarXP();

        }

        setTimeout(() => {

            this.mostrarResultado();

        }, 1000);

    },

    mostrarResultado() {

        const p = this.preguntas[this.state.pregunta];

        this.box.innerHTML = `

            <div class="resultado">

                <h1>✅ Muy bien</h1>

                <p>

                    ${p.explicacion}

                </p>

                <h2 style="color:#005BAC;">

                    ⭐ ${this.state.xp} XP

                </h2>

                <button id="continuar">

                    ${
                        this.state.pregunta + 1 === this.preguntas.length
                        ? "Finalizar curso"
                        : "Siguiente pregunta →"
                    }

                </button>

            </div>

        `;

        document
            .getElementById("continuar")
            .onclick = () => {

                this.siguientePregunta();

            };

    },

    siguientePregunta() {

        this.state.pregunta++;

        if (this.state.pregunta === 15) {

            this.finModulo1();

            return;

        }

        if (this.state.pregunta === 35) {

            this.finModulo2();

            return;

        }

        if (this.state.pregunta >= this.preguntas.length) {

            this.finalCurso();

            return;

        }

        this.mostrarPregunta();

    },

    finModulo1() {

        if (this.mensaje) {

            this.mensaje.innerHTML =
                "🎉 ¡Enhorabuena! Has completado el primer módulo.";

        }

        this.box.innerHTML = `

            <div class="resultado">

                <h1>🎉 MÓDULO 1 COMPLETADO</h1>

                <h2>Conoce el Plan de Autónomos</h2>

                <ul class="resumen">

                    <li>✅ Objetivos del Plan</li>
                    <li>✅ Emprendimiento</li>
                    <li>✅ Reducción de burocracia</li>
                    <li>✅ Digitalización</li>
                    <li>✅ Competitividad</li>

                </ul>

                <h2 style="color:#005BAC;">

                    ⭐ ${this.state.xp} XP

                </h2>

                <button id="continuarModulo2">

                    Continuar →

                </button>

            </div>

        `;

        document
            .getElementById("continuarModulo2")
            .onclick = () => {

                this.presentarModulo2();

            };

    },

    presentarModulo2() {

        if (this.mensaje) {

            this.mensaje.innerHTML =
                "📗 Ahora conoceremos medidas concretas del Plan.";

        }

        this.box.innerHTML = `

            <div class="resultado">

                <h1>📗 MÓDULO 2</h1>

                <h2>

                    Simplificar y facilitar la vida de quienes producen

                </h2>

                <ul class="resumen">

                    <li>💶 Tarifa 0</li>
                    <li>🧾 Régimen de IVA</li>
                    <li>🏢 Ventanilla Única</li>
                    <li>💻 Factura electrónica</li>
                    <li>📑 Simplificación administrativa</li>

                </ul>

                <button id="empezarModulo2">

                    Empezar módulo →

                </button>

            </div>

        `;

        document
            .getElementById("empezarModulo2")
            .onclick = () => {

                this.mostrarPregunta();

            };

    },
        finalCurso() {

        if (this.mensaje) {

            this.mensaje.innerHTML =
                "🎉 ¡Enhorabuena! Has completado todo el curso. Ya conoces el Plan de Autónomos.";

        }

        this.progress.style.width = "100%";

        this.box.innerHTML = `

            <div class="resultado">

                <h1>🏆 ¡CURSO COMPLETADO!</h1>

                <h2>

                    Has finalizado todos los módulos.

                </h2>

                <p>

                    Has conseguido un total de

                    <strong>${this.state.xp} XP</strong>

                </p>

                <button id="volverInicio">

                    Volver al menú principal

                </button>

            </div>

        `;

        document
            .getElementById("volverInicio")
            .onclick = () => {

                this.volverInicio();

            };

    },

    volverInicio() {

        this.state.xp = 0;
        this.state.pregunta = 0;

        this.actualizarXP();

        if (this.progress) {

            this.progress.style.width = "0%";

        }

        const porcentaje =
            document.getElementById("porcentaje");

        if (porcentaje) {

            porcentaje.innerHTML = "0%";

        }

        if (this.mensaje) {

            this.mensaje.innerHTML =
                "👋 Hola. Soy Esther. Estoy aquí para ayudarte durante todo el recorrido.";

        }

        document
            .getElementById("juego")
            .classList.add("oculto");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Game.init();

});