/**
 * EVENT LOOP LAB (Node.js)
 * Objetivo: ver el orden real de ejecución mezclando:
 * - Síncrono (bloqueante)
 * - setTimeout (macrotask / Task Queue)
 * - Promise.then (microtask)
 * - fetch (I/O asíncrona, promesa + microtasks)
 *
 * IMPORTANTE:
 * - "Call Stack" = donde se ejecuta el código síncrono.
 * - "Task Queue" (macrotasks) = cola donde caen callbacks como setTimeout.
 * - "Microtask Queue" = cola "prioritaria" para Promises (.then/.catch/.finally)
 * - Event Loop = el "director de tráfico" que:
 *   1) espera a que el Call Stack quede vacío
 *   2) vacía Microtasks
 *   3) toma 1 macrotask (por ejemplo, setTimeout)
 */

// Helper para que cada log tenga "marca" y sea fácil seguir el orden
let step = 0;
function log(msg) {
    step++;
    console.log(`${String(step).padStart(2, "0")} | ${msg}`);
}

/**
 * FUNCIÓN BLOQUEANTE (SÍNCRONA)
 * Esto SIMULA una tarea pesada.
 * - BLOQUEA el hilo principal.
 * - Mientras esto corre, NO se atienden timers, ni callbacks, ni nada.
 */
function bloquea(ms) {
    const inicio = Date.now();
    while (Date.now() - inicio < ms) {
    // Loop vacío: solo "quema" tiempo.
    }
}

/**
 * fetch 
 * Usamos un endpoint público rápido.
 */
const URL = "https://jsonplaceholder.typicode.com/todos/1";

log("Inicio del programa (entra al Call Stack)"); // SÍNCRONO (no asíncrono)

setTimeout(() => {
  // Este callback NO se ejecuta ahora.
  // Se programa y se va al sistema de timers.
  // Cuando pasen ~0ms, se encola como MACROTASK (Task Queue).
    log("setTimeout 0ms (MACROTASK) ejecutado");
}, 0);

Promise.resolve().then(() => {
  // Esto es una MICROTASK.
  // Las microtasks se ejecutan *antes* de cualquier macrotask,
  // pero solo cuando el Call Stack quede vacío.
    log("Promise.then (MICROTASK) ejecutado");
});

log("Antes de bloquear (todavía en Call Stack)"); // SÍNCRONO

// ✅ TAREA BLOQUEANTE (síncrona)
// Mientras esto ocurre, el Event Loop NO puede "respirar".
bloquea(800);

log("Después de bloquear 800ms (Call Stack sigue)"); // SÍNCRONO

// ✅ fetch es ASÍNCRONO (NO bloquea el Call Stack)
// Se delega fuera del flujo principal (I/O / red) y vuelve luego con una Promise.
fetch(URL)
    .then((response) => {
    // Este .then es MICROTASK (porque es promesa resuelta en el futuro).
    log("fetch: respuesta recibida (MICROTASK .then 1)");
    return response.json();
    })
    .then((data) => {
    log(`fetch: JSON parseado (MICROTASK .then 2) -> title="${data.title}"`);
    })
    .catch((err) => {
    log("fetch: error (MICROTASK .catch)");
    console.error(err);
    });

log("Fin del código principal (Call Stack se vacía aquí)");
