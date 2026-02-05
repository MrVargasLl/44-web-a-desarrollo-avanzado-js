
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
                resolve(`El usuario ${nombre} se registro correctamente`)
            } else {
                reject("El nombre de usuario es obligatorio")
            }
        }, 1500)
    })
}

function enviarCorreoBienvenida( nombre ) {
    
    return new Promise( (resolve) => {
        setTimeout( ( ) => {
            resolve( `Correo de bienvenida enviado a ${nombre}`)
        }, 1500)
    })
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

const mesasDisponibles = 5;  // Número de mesas disponibles para reservar
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
    if (mesasSolicitadas <= mesasDisponibles) {
        resolve (`Corfimada la reserva de la cantida de mesas ${mesasSolicitadas}`)
       // de lo contrario, recházala con un mensaje adecuado.
    } else {
        reject(`No es posible reservar las cantidad de mesas ${mesasSolicitadas}`)
    }
    }, 2000); 
    });
}