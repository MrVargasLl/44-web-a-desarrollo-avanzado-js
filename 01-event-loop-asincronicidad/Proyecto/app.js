// ================================
// 0) “PANTALLA” (DOM) + ESTADO
// ================================
const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");
const logBox = document.getElementById("logBox");

// Identificador único para pedidos (1,2,3...)
let orderId = 1;

// Guardamos los pedidos en memoria para poder consultarlos si queremos
const orders = new Map(); // id -> { id, status, startedAt, readyInMs }

// ================================
// 1) LOGGER: para ver el ORDEN REAL
// ================================
// Esto te ayuda a “ver” en qué orden ocurren las cosas,
// especialmente cuando mezclas sync + async.
let step = 0;
function log(msg) {
    step++;

  // console.log: se ejecuta SÍNCRONO (en el Call Stack)
    console.log(`${String(step).padStart(2, "0")} | ${msg}`);

  // También lo mostramos en la interfaz
    const p = document.createElement("div");
    p.textContent = `${String(step).padStart(2, "0")} | ${msg}`;
    logBox.appendChild(p);
    logBox.scrollTop = logBox.scrollHeight;
}

// ================================
// 2) UI: Agregar pedido a la lista
// ================================
function addOrderToUI(order) {
    const li = document.createElement("li");
    li.id = `order-${order.id}`;

  // Mostramos el estado inicial
    li.innerHTML = `
    <strong>Pedido #${order.id}</strong>
    — <span class="badge proceso" data-status>En Proceso</span>
    <span class="hint" data-extra></span>
    `;

    orderList.appendChild(li);
}

// ================================
// 3) UI: Actualizar estado
// ================================
function updateOrderStatusUI(orderId, newStatus) {
    const li = document.getElementById(`order-${orderId}`);
    if (!li) return;

    const badge = li.querySelector("[data-status]");
    const extra = li.querySelector("[data-extra]");

  // Cambiamos texto + “color” (clase) para que sea visible
    if (newStatus === "En Proceso") {
    badge.textContent = "En Proceso";
    badge.className = "badge proceso";
    extra.textContent = "";
    }

    if (newStatus === "Completado") {
    badge.textContent = "Completado";
    badge.className = "badge completado";
    extra.textContent = " ✅ Listo para entregar";
    }
}

// ==============================================
// 4) SIMULACIÓN: Preparar un pedido (ASÍNCRONO)
// ==============================================
// Esto devuelve una Promise que se resuelve cuando termina el “tiempo de preparación”.
// - setTimeout NO bloquea: se registra con el sistema de timers y se ejecuta después.
// - Cuando termina, el callback entra a la "Task Queue" (macrotasks).
function prepararPedidoAsync(order) {
    return new Promise((resolve) => {
    const tiempo = order.readyInMs;

    log(`(SYNC) Pedido #${order.id}: se agenda setTimeout(${tiempo}ms) [NO bloqueante]`);

    // ✅ NO BLOQUEANTE: setTimeout no congela el programa.
    setTimeout(() => {
      // Este callback corre “después”, cuando el Event Loop lo toma de la cola.
        log(`(MACROTASK) Pedido #${order.id}: terminó el timer, se “completa”`);
        resolve();
    }, tiempo);
    });
}

// =======================================================
// 5) PROCESAR PEDIDO (async/await + Promises + setTimeout)
// =======================================================
// Esta función es ASÍNCRONA:
// - Arranca en el Call Stack (sync), pero al encontrar "await"
//   se “pausa” y devuelve control al Event Loop.
// - Cuando la promesa se resuelve, continúa (microtasks).
async function processOrder(order) {
    log(`(SYNC) Pedido #${order.id}: processOrder() inicia (entra al Call Stack)`);

  // Estado inicial
    updateOrderStatusUI(order.id, "En Proceso");

  // ✅ NO BLOQUEANTE:
  // "await" NO bloquea el hilo: le devuelve el control al Event Loop.
  // El pedido “se prepara fuera del flujo principal”.
    await prepararPedidoAsync(order);

  // Cuando la promesa se resuelve, este código continúa.
  // Esa continuación ocurre a través de la mecánica de Promises
  // (microtasks), por eso suele verse “rápido” después del timer.
    orders.get(order.id).status = "Completado";
    updateOrderStatusUI(order.id, "Completado");

    log(`(MICROTASK/continuación) Pedido #${order.id}: estado -> Completado`);
}

// ==============================================
// 6) RECIBIR UN NUEVO PEDIDO (CLICK del usuario)
// ==============================================
// El click handler se ejecuta SÍNCRONO (Call Stack).
addOrderBtn.addEventListener("click", () => {
    log("(SYNC) Click: el cliente hizo un nuevo pedido (Call Stack)");

  // 1) Crear pedido con ID único y tiempo aleatorio
    const order = {
    id: orderId++,
    status: "En Proceso",
    startedAt: Date.now(),
    readyInMs: randomBetween(1000, 5000), // 1 a 5 segundos
    };

  // Guardarlo en memoria
    orders.set(order.id, order);

  // 2) Mostrar en UI “En Proceso”
    addOrderToUI(order);
    updateOrderStatusUI(order.id, "En Proceso");

  // 3) Procesarlo de manera asíncrona
  // OJO: lo llamamos pero NO esperamos aquí (no hacemos await).
  // Eso permite que entren más clicks/pedidos sin “congelar” la interfaz.
    processOrder(order);

  // Nota didáctica:
  // Esta línea ocurre inmediatamente, aunque el pedido tarde segundos.
    log(`(SYNC) Pedido #${order.id}: ya está en lista; la preparación sigue “aparte”`);
});

// ================================
// 7) UTILIDAD
// ================================
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mensaje de arranque
log("(SYNC) App lista. Haz clic en 'Agregar Pedido'.");
