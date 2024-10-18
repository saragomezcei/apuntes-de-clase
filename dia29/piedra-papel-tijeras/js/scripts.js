/* --------------------------------------------------------------
/* 1. Declaramos variables
/* -------------------------------------------------------------- */

const txtResultado = document.querySelector(".txtResultado");
const txtStats = document.querySelector(".txtStats");

const txtGanadas = document.getElementById("ganadas");
const txtPerdidas = document.getElementById("perdidas");
const txtEmpatadas = document.getElementById("empatadas");

// Gráfico de barra
const progressBar = document.querySelector(".progreso");
const divGanadas = document.querySelector(".progressBar>div:nth-child(1)");
const divEmpatadas = document.querySelector(".progressBar>div:nth-child(2)");
const divPerdidas = document.querySelector(".progressBar>div:nth-child(3)");

const objPuntuacion = {
    //Puntuación del juego
    ganadas: 999,
    perdidas: 999,
    empatadas: 999,
    stats: {
        //estadísticas de la IA
        ai_piedra: 999,
        ai_papel: 999,
        ai_tijera: 999,

        //estadísticas del jugador
        user_piedra: 999,
        user_papel: 999,
        user_tijera: 999
    }
}

let intervaloAI; //Para el botón de auto
/* --------------------------------------------------------------
/* 2. Declaramos funciones
/* -------------------------------------------------------------- */


/**
 * Función que recibe lo que elige el jugador y le indica si gana o pierde
 * @param {string} jugador - "piedra", "papel", "tijera"
 * @return {void}
 */
function jugar(jugador) {
    const jugadorAI = elegirAutomaticamente(); //tirar automáticamente
    let resultado = "";

    if (jugador == jugadorAI) {
        resultado = "Empate";
    } else if (jugador == "piedra") {
        resultado = (jugadorAI == "papel") ? "Has perdido" : "Has ganado";
    } else if (jugador == "papel") {
        resultado = (jugadorAI == "tijera") ? "Has perdido" : "Has ganado";
    } else if (jugador == "tijera") {
        resultado = (jugadorAI == "piedra") ? "Has perdido" : "Has ganado";
    }

    //actualizar contadores de los jugadores
    if (jugadorAI == "papel") { objPuntuacion.stats.ai_papel++ }
    if (jugadorAI == "piedra") { objPuntuacion.stats.ai_piedra++ }
    if (jugadorAI == "tijera") { objPuntuacion.stats.ai_tijera++ }

    if (jugador == "papel") { objPuntuacion.stats.user_papel++ }
    if (jugador == "piedra") { objPuntuacion.stats.user_piedra++ }
    if (jugador == "tijera") { objPuntuacion.stats.user_tijera++ }

    //actualizar Puntuación 
    if (resultado == "Has perdido") { objPuntuacion.perdidas++; }
    if (resultado == "Has ganado") { objPuntuacion.ganadas++ }
    if (resultado == "Empate") { objPuntuacion.empatadas++ }


    // imprimir resultados
    txtResultado.innerHTML = `
    <h2>${resultado}</h2>
    <p>Tú has tirado <b>${jugador}</b> y la AI ha tirado <b>${jugadorAI}</b></p>`;

    mostrarEstadisticas();
}

function elegirAutomaticamente() {
    const opciones = ["piedra", "papel", "tijera"];
    const numero = Math.floor(Math.random() * 3); // el 3 se podría sustituir por opciones.length

    return opciones[numero]; // piedra, papel, tijera
}

function AIvsAI () {

    // Intervalo para ejecutar algo muchas veces de manera automática
    // setInterval("una función", "cada cuánto lo voy a hacer en milisegundos");
    intervaloAI = setInterval(() => {

        const jugadorAI2=elegirAutomaticamente();
    
        jugar(jugadorAI2);

    } , 1000);

}

function mostrarEstadisticas() {
    txtGanadas.innerText = objPuntuacion.ganadas;
    txtPerdidas.innerText = objPuntuacion.perdidas;
    txtEmpatadas.innerText = objPuntuacion.empatadas;

    txtStats.innerHTML = `
    <div>
    <h3>Estadísticas AI</h3>
        👊🏻 ${objPuntuacion.stats.ai_piedra} | 
        ✋🏻 ${objPuntuacion.stats.ai_papel} | 
        ✌🏻 ${objPuntuacion.stats.ai_tijera} 
    <h3>Estadísticas jugador</h3>
        👊🏻 ${objPuntuacion.stats.user_piedra} | 
        ✋🏻 ${objPuntuacion.stats.user_papel} | 
        ✌🏻 ${objPuntuacion.stats.user_tijera}
</div>
`

    graficoBarra();
}

function graficoBarra() {
    const total = objPuntuacion.ganadas + objPuntuacion.perdidas + objPuntuacion.empatadas;

    let porcentajeGanadas = (Math.round((objPuntuacion.ganadas / total) * 1000)) / 10
    let porcentajeEmpatadas = (Math.round((objPuntuacion.empatadas / total) * 1000)) / 10
    let porcentajePerdidas = (Math.round((objPuntuacion.perdidas / total) * 1000)) / 10

    divGanadas.innerHTML = `Ganadas <br> ${porcentajeGanadas}%`;
    divEmpatadas.innerHTML = `Empatadas <br> ${porcentajeEmpatadas}%`;
    divPerdidas.innerHTML = `Perdidas <br> ${porcentajePerdidas}%`;
    divGanadas.style.width = `${porcentajeGanadas}%`;
    divEmpatadas.style.width = `${porcentajeEmpatadas}%`;
    divPerdidas.style.width = `${porcentajePerdidas}%`;
}

function resetStats() {

    clearInterval(intervaloAI);

    objPuntuacion.ganadas = 0;
    objPuntuacion.perdidas = 0;
    objPuntuacion.empatadas = 0;

    objPuntuacion.stats.ai_papel = 0;
    objPuntuacion.stats.ai_piedra = 0;
    objPuntuacion.stats.ai_tijera = 0;
    objPuntuacion.stats.user_papel = 0;
    objPuntuacion.stats.user_piedra = 0;
    objPuntuacion.stats.user_tijera = 0;
}

/* --------------------------------------------------------------
/* 3. Ejecutamos nuestro código
/* -------------------------------------------------------------- */

resetStats();
