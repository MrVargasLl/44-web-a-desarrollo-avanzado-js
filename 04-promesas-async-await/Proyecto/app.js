// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si hay suficientes mesas disponibles, resuelve la promesa
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(true);  // Indica que hay disponibilidad
            } else {
                resolve(false);  // Indica que no hay disponibilidad
            }
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos un 50% de probabilidad de éxito y un 50% de error
            if (Math.random() < 0.5) {
                resolve(true);  // Indica que hay disponibilidad
            } else {
                resolve(false);  // Indica que no hay disponibilidad
            }
        }, 1500); // Simula el envío por 1.5 segundos
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        
        if (disponibilidad) {
            console.log("Mesas disponibles. Enviando confirmación...");
            //Enviando correo de confirmacion
            const CorreoExitoso= await enviarConfirmacionReserva(nombreCliente);
            if (CorreoExitoso) {
                console.log(`Correo enviado exitosamente a: ${nombreCliente}`);
            } else {
                throw new Error(`Error al enviar el correo a: ${nombreCliente}`);
            }
            console.log("Reserva completada exitosamente.");
        } else {
            throw new Error("No hay mesas disponibles para la cantidad solicitada.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas