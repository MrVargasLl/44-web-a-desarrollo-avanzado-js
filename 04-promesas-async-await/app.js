//Ejemplo 1 promesas: Tienda de hamburgesas

/* let tiendaAbierta = true;

let pedido = (tiempo, proceso) => {
    return new Promise((resolve, reject) => {
        if (tiendaAbierta) {
            //Ejecutar la funcion del proceso

            setTimeout(() => {
                resolve(proceso());
            }, tiempo);
        } else {
            reject(console.log("Tienda cerrada"));
        }
    });
};

pedido( 3000, () => console.log("Ingredientes reunidos correctamente")   )
.then( () => {
    return pedido( 2000,  () => {console.log("Carne cocinada") }) 
} ).then( () => {
    return pedido( 1000,  () => {console.log("El pan ya esta tostado") }) 
} ).then( () => {
    return pedido( 3000,  () => {console.log("Hamburguesa armada") }) 
} ).then( () => {
    return pedido( 2000,  () => {console.log("Tu pedido esta listo para llevar") }) 
} ).catch( () => { console.log("El cliente se ha ido")})
.finally( () => {console.log("Jornada finalizada. La tienda ya cerro")
})
 */

//Ejemplo 2 promesas: Registro de usuarios

//Creacion de funciones

function registrarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre) {
                resolve(`El usuario ${nombre} se registro correctamente`);
            } else {
                reject("El nombre de usuario es obligatorio");
            }
        }, 1500);
    });
}

function enviarCorreoBienvenida(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Correo de bienvenida enviado a ${nombre}`);
        }, 1500);
    });
}

//Manejo del formulario

/* const form = document.getElementById("registroForm")
const mensaje = document.getElementById("mensaje")

form.addEventListener("submit", (event) => {
    event.preventDefault() //para que no se recargue la pagina por defecto
    
    const usuario = document.getElementById("usuario").value
    const password = document.getElementById("password").value

    if( !usuario || !password){
        mensaje.textContent = "Todos los campos son obligatorios"
        mensaje.style.color = "red"
        return
    }

    //Encadenamiento de promesas 
    registrarUsuario( usuario )
    .then ( result => {
        mensaje.textContent = result
        mensaje.style.color = "green"
        return enviarCorreoBienvenida( usuario )
    } )
    .then ( result => { 
        alert(result)
    })
    .catch( error => {
        mensaje.textContent = error
        mensaje.style.color = "red"
    })


}) */

//ejemplo chef hamburguesas async await
/* 
let isOpen = true

let eleccion_salsas = () => {

    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve( console.log("Que salsas quieres?"))
        }, 4000)
    })

}

let cocina = async () => {
    console.log("A")
    console.log("B")
    console.log("C")

    await eleccion_salsas()
    
    console.log("D")
    console.log("E")

}

cocina()

console.log("Lavando platos");
console.log("Limpiando las mesas");
console.log("Registro de nuevas ordenes");

 */

//Analisis proyecto de clase

const mesasDisponibles = 5; // Número de mesas disponibles para reservar
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa,
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(
                    `Corfimada la reserva de la cantida de mesas ${mesasSolicitadas}`,
                );
                // de lo contrario, recházala con un mensaje adecuado.
            } else {
                reject(
                    `No es posible reservar las cantidad de mesas ${mesasSolicitadas}`,
                );
            }
        }, 2000);
    });
}

//Ejemplo de Promesa
// Ejemplo de una promesa
/* let obtenerDatosDeUsuario = new Promise((resolve, reject) => {
    let exito = true; // Cambia esto para simular éxito o error

    if (exito) {
        resolve("Datos de usuario obtenidos correctamente.");
    } else {
        reject("Hubo un error al obtener los datos.");
    }
});

// Manejando el resultado de la promesa
obtenerDatosDeUsuario
    .then((resultado) => {
        console.log(resultado); // Si la promesa es cumplida
    })
    .catch((error) => {
        console.log(error); // Si la promesa es rechazada
    }); */

//Ejercicio 1: Simulando una llamada a la API

// Función que simula una llamada a una API con éxito o error
/* function llamadaApi(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Datos obtenidos con éxito de la API.");
            } else {
                reject("Error al obtener los datos de la API.");
            }
        }, 2000);  // Simulamos un retraso de 2 segundos
    });
}

// Uso de la promesa
llamadaApi(true)  // Simula una llamada exitosa
    .then(result => {
        console.log(result);  // "Datos obtenidos con éxito de la API."
    })
    .catch(error => {
        console.error(error);  // Este bloque no se ejecuta en este caso
    });

// Uso con error
llamadaApi(false)  // Simula una llamada fallida
    .then(result => {
        console.log(result);  // Este bloque no se ejecuta en este caso
    })
    .catch(error => {
        console.error(error);  // "Error al obtener los datos de la API."
    }); */

//Ejercicio 2: Encadenamiento de Promesas

// Función que simula un proceso de registro
/* function registrarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre) {
                resolve(`Usuario ${nombre} registrado correctamente.`);
            } else {
                reject("El nombre de usuario es obligatorio.");
            }
        }, 1000); // Retraso de 1 segundo
    });
}

// Función que simula enviar un correo de bienvenida
function enviarCorreoBienvenida(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Correo de bienvenida enviado a ${nombre}.`);
        }, 1500); // Retraso de 1.5 segundos
    });
}

// Encadenamiento de promesas
registrarUsuario("Juan")
    .then((result) => {
        console.log(result); // "Usuario Juan registrado correctamente."
        return enviarCorreoBienvenida("Juan"); // Encadenamos la siguiente promesa
    })
    .then((result) => {
        console.log(result); // "Correo de bienvenida enviado a Juan."
    })
    .catch((error) => {
        console.error(error); // En caso de error en alguna de las promesas
    });
 */

/*     async function obtener() { return "Hola"; } obtener().then(console.log); */

//Ejemplo de Async/Await
// Simulando una solicitud asíncrona con promesas
/* function obtenerDatosDeUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'Juan' });
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
    try {
        const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
        console.log(usuario); // Muestra los datos del usuario
    } catch (error) {
        console.log(error); // Maneja el error si la promesa es rechazada
    }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1

 */
//Sintaxis básica:
/* async function obtenerDatos() {
    try {
    let respuesta = await fetch('https://api.example.com');
    let datos = await respuesta.json();
    console.log(datos);
    } catch (error) {
    console.log('Error al obtener los datos:', error);
    }
} */

//Ejemplo con error:
/* async function obtenerDatos() {
    try {
        let respuesta = await fetch('https://api.inexistente.com'); // Esta URL no existe
        let datos = await respuesta.json(); // Esto nunca se ejecutará
        console.log(datos);
    } catch (error) {
        console.log('Hubo un problema:', error); // Aquí se maneja el error
    }
}
obtenerDatos() 

 */
