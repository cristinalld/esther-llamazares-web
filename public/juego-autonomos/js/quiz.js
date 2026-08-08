const Quiz = {

    perfil: {

        xp: 0,
        nivel: 1,
        mejorRacha: 0,
        partidas: 0,
        aciertos: 0

    },

    preguntaActual: 0,
    puntos: 0,
    aciertos: 0,
    errores: 0,

    racha: 0,
    mejorRacha: 0,

    tiempo: 20,
    tiempoTotal: 60,

    reloj: null,

    partida: [],

    modo: "normal",

    cargarPerfil(){

        const datos = localStorage.getItem("perfilAutonomos");

        if(datos){

            this.perfil = JSON.parse(datos);

        }

    },

    guardarPerfil(){

        localStorage.setItem(

            "perfilAutonomos",

            JSON.stringify(this.perfil)

        );

    },

    calcularNivel(){

        this.perfil.nivel =

            Math.floor(this.perfil.xp/100)+1;

    },

    init(){

        this.cargarPerfil();

        const btn=document.getElementById("btnQuiz");

        if(btn){

            btn.addEventListener("click",()=>{

                document
                    .getElementById("juego")
                    .classList.remove("oculto");

                this.menu();

            });

        }

    },

    menu(){

        document.getElementById("mensajeJuego").innerHTML =
        "🎯 ¿Preparado para demostrar lo que sabes?";

        document.getElementById("contenidoJuego").innerHTML=`

        <div class="menuQuiz">

            <div class="perfilQuiz">

                <h2>👤 Mi perfil</h2>

                <p><strong>🏅 Nivel:</strong> ${this.perfil.nivel}</p>

                <div class="barraXP">

                    <div class="barraXPInterior"
                    style="width:${this.perfil.xp%100}%">
                    </div>

                </div>

                <p>⭐ XP total:
                <strong>${this.perfil.xp}</strong></p>

                <p>🔥 Mejor racha:
                <strong>${this.perfil.mejorRacha}</strong></p>

                <p>🎮 Partidas:
                <strong>${this.perfil.partidas}</strong></p>

                <p>✅ Aciertos:
                <strong>${this.perfil.aciertos}</strong></p>

            </div>

            <h1>🎯 Ponte a prueba</h1>

            <p>Elige un modo de juego.</p>

            <div class="quiz-card" id="retoRapido">

                <h3>⚡ Reto rápido</h3>

                <p>10 preguntas aleatorias.</p>

            </div>

            <div class="quiz-card" id="contraReloj">

                <h3>⏱️ Contrarreloj</h3>

                <p>60 segundos para responder el máximo posible.</p>

            </div>

            <div class="quiz-card disabled">

                <h3>✅ Verdadero o falso</h3>

                <p>Próximamente</p>

            </div>

        </div>

        `;

        document
        .getElementById("retoRapido")
        .onclick=()=>{

            this.iniciarReto();

        };

        document
        .getElementById("contraReloj")
        .onclick=()=>{

            this.iniciarContrarreloj();

        };

    },

    iniciarReto(){

        this.modo="normal";

        this.preguntaActual=0;

        this.puntos=0;

        this.aciertos=0;

        this.errores=0;

        this.racha=0;

        this.mejorRacha=0;

        this.partida=[...quizPreguntas];

        this.partida.sort(()=>Math.random()-0.5);

        this.partida=this.partida.slice(0,10);

        this.mostrarPregunta();

    },

    iniciarContrarreloj(){

        this.modo="contrarreloj";

        this.preguntaActual=0;

        this.puntos=0;

        this.aciertos=0;

        this.errores=0;

        this.racha=0;

        this.mejorRacha=0;

        this.tiempoTotal=60;

        this.inicioContrarreloj=Date.now();

        this.partida=[...quizPreguntas];

        this.partida.sort(()=>Math.random()-0.5);

        this.mostrarPreguntaContrarreloj();

    },
        mostrarPregunta(){

        clearInterval(this.reloj);

        this.tiempo=20;

        const original=this.partida[this.preguntaActual];

        const respuestas=original.respuestas.map((texto,i)=>({

            texto,

            correcta:i===original.correcta

        }));

        respuestas.sort(()=>Math.random()-0.5);

        const correcta=
            respuestas.findIndex(r=>r.correcta);

        const progreso=
            ((this.preguntaActual+1)/
            this.partida.length)*100;

        document.getElementById("contenidoJuego").innerHTML=`

            <div class="quiz">

                <div class="progreso">

                    <div class="progreso-barra"
                    style="width:${progreso}%">
                    </div>

                </div>

                <div class="timer">

                    ⏱️
                    <span id="contador">
                        ${this.tiempo}
                    </span>

                </div>

                <div class="racha">

                    🔥 Racha:
                    <strong>${this.racha}</strong>

                </div>

                <h2>

                    Pregunta
                    ${this.preguntaActual+1}
                    de
                    ${this.partida.length}

                </h2>

                <h3>${original.pregunta}</h3>

                <div class="respuestas">

                    ${respuestas.map((r,i)=>`

                        <button
                            class="respuesta"
                            data-id="${i}">

                            ${r.texto}

                        </button>

                    `).join("")}

                </div>

            </div>

        `;

        document
        .querySelectorAll(".respuesta")
        .forEach(btn=>{

            btn.onclick=(e)=>{

                this.responder(

                    Number(e.target.dataset.id),

                    correcta

                );

            };

        });

        this.reloj=setInterval(()=>{

            this.tiempo--;

            const contador=
            document.getElementById("contador");

            if(contador){

                contador.textContent=this.tiempo;

            }

            if(this.tiempo<=0){

                clearInterval(this.reloj);

                this.responder(-1,correcta);

            }

        },1000);

    },

    mostrarPreguntaContrarreloj(){

        clearInterval(this.reloj);

        const original=this.partida[this.preguntaActual];

        const respuestas=original.respuestas.map((texto,i)=>({

            texto,

            correcta:i===original.correcta

        }));

        respuestas.sort(()=>Math.random()-0.5);

        const correcta=
            respuestas.findIndex(r=>r.correcta);

        const transcurridos=Math.floor(

            (Date.now()-this.inicioContrarreloj)/1000

        );

        const restante=Math.max(0,60-transcurridos);

        document.getElementById("contenidoJuego").innerHTML=`

            <div class="quiz">

                <div class="timer">

                    ⏱️ Tiempo restante:

                    <strong id="contadorTotal">

                        ${restante}

                    </strong>s

                </div>

                <div class="racha">

                    🔥 Racha:
                    <strong>${this.racha}</strong>

                </div>

                <h2>⚡ Contrarreloj</h2>

                <h3>${original.pregunta}</h3>

                <div class="respuestas">

                    ${respuestas.map((r,i)=>`

                        <button
                            class="respuesta"
                            data-id="${i}">

                            ${r.texto}

                        </button>

                    `).join("")}

                </div>

            </div>

        `;

        document
        .querySelectorAll(".respuesta")
        .forEach(btn=>{

            btn.onclick=(e)=>{

                this.responderContrarreloj(

                    Number(e.target.dataset.id),

                    correcta

                );

            };

        });

        this.reloj=setInterval(()=>{

            const transcurridos=Math.floor(

                (Date.now()-this.inicioContrarreloj)/1000

            );

            const restante=Math.max(0,60-transcurridos);

            const contador=

                document.getElementById("contadorTotal");

            if(contador){

                contador.textContent=restante;

            }

            if(restante<=0){

                clearInterval(this.reloj);

                this.finalContrarreloj();

            }

        },250);

    },
      responder(opcion,correcta){

        clearInterval(this.reloj);

        const botones=
            document.querySelectorAll(".respuesta");

        botones.forEach((b,i)=>{

            b.disabled=true;

            if(i===correcta){

                b.classList.add("correcta");

            }

            if(i===opcion &&
               opcion!==correcta){

                b.classList.add("incorrecta");

            }

        });

        if(opcion===correcta){

            this.puntos+=10;

            this.aciertos++;

            this.racha++;

            if(this.racha>this.mejorRacha){

                this.mejorRacha=this.racha;

            }

            if(this.racha>=3){

                this.puntos+=5;

            }

        }else{

            this.errores++;

            this.racha=0;

        }

        setTimeout(()=>{

            this.preguntaActual++;

            if(this.preguntaActual>=this.partida.length){

                this.final();

            }else{

                this.mostrarPregunta();

            }

        },800);

    },

    responderContrarreloj(opcion,correcta){

        clearInterval(this.reloj);

        if(opcion===correcta){

            this.puntos+=10;

            this.aciertos++;

            this.racha++;

            if(this.racha>this.mejorRacha){

                this.mejorRacha=this.racha;

            }

            if(this.racha>=3){

                this.puntos+=5;

            }

        }else{

            this.errores++;

            this.racha=0;

        }

        this.preguntaActual++;

        if(this.preguntaActual>=this.partida.length){

            this.partida.sort(()=>Math.random()-0.5);

            this.preguntaActual=0;

        }

        const transcurridos=Math.floor(

            (Date.now()-this.inicioContrarreloj)/1000

        );

        if(transcurridos>=60){

            this.finalContrarreloj();

            return;

        }

        this.mostrarPreguntaContrarreloj();

    },
        final(){

        clearInterval(this.reloj);

        const porcentaje=Math.round(
            (this.aciertos/this.partida.length)*100
        );

        let medalla="🥉 Bronce";

        if(porcentaje>=70) medalla="🥈 Plata";
        if(porcentaje>=90) medalla="🥇 Oro";
        if(porcentaje===100) medalla="👑 Experto Esther";

        this.perfil.partidas++;
        this.perfil.aciertos+=this.aciertos;
        this.perfil.xp+=this.puntos;

        if(this.mejorRacha>this.perfil.mejorRacha){

            this.perfil.mejorRacha=this.mejorRacha;

        }

        this.calcularNivel();

        this.guardarPerfil();

        const xpActual=this.perfil.xp%100;
        const xpRestante=100-xpActual;

        document.getElementById("contenidoJuego").innerHTML=`

            <div class="resultado">

                <h1>🏆 ¡Reto completado!</h1>

                <h2>${medalla}</h2>

                <div class="barraXP">

                    <div class="barraXPInterior"
                        style="width:${xpActual}%">

                    </div>

                </div>

                <p>⭐ XP obtenida:
                <strong>${this.puntos}</strong></p>

                <p>⭐ XP total:
                <strong>${this.perfil.xp}</strong></p>

                <p>🏅 Nivel:
                <strong>${this.perfil.nivel}</strong></p>

                <p>⏳ Faltan
                <strong>${xpRestante}</strong>
                XP para subir de nivel.</p>

                <hr>

                <p>✅ Aciertos:
                <strong>${this.aciertos}</strong></p>

                <p>❌ Errores:
                <strong>${this.errores}</strong></p>

                <p>🔥 Mejor racha:
                <strong>${this.mejorRacha}</strong></p>

                <p>🎯 Precisión:
                <strong>${porcentaje}%</strong></p>

                <button id="volverQuiz">

                    Volver al menú

                </button>

            </div>

        `;

        document
        .getElementById("volverQuiz")
        .onclick=()=>{

            this.menu();

        };

    },

    finalContrarreloj(){

        clearInterval(this.reloj);

        this.perfil.partidas++;

        this.perfil.aciertos+=this.aciertos;

        this.perfil.xp+=this.puntos;

        if(this.mejorRacha>this.perfil.mejorRacha){

            this.perfil.mejorRacha=this.mejorRacha;

        }

        this.calcularNivel();

        this.guardarPerfil();

        document.getElementById("contenidoJuego").innerHTML=`

            <div class="resultado">

                <h1>⏱️ ¡Tiempo agotado!</h1>

                <h2>⚡ Modo Contrarreloj</h2>

                <hr>

                <p>⭐ XP conseguida:
                <strong>${this.puntos}</strong></p>

                <p>🏅 Nivel:
                <strong>${this.perfil.nivel}</strong></p>

                <p>⭐ XP total:
                <strong>${this.perfil.xp}</strong></p>

                <p>✅ Aciertos:
                <strong>${this.aciertos}</strong></p>

                <p>❌ Errores:
                <strong>${this.errores}</strong></p>

                <p>🔥 Mejor racha:
                <strong>${this.mejorRacha}</strong></p>

                <button id="volverQuiz">

                    Volver al menú

                </button>

            </div>

        `;

        document
        .getElementById("volverQuiz")
        .onclick=()=>{

            this.menu();

        };

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    Quiz.init();

});  