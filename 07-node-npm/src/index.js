

//Ejemplo de zod con node
import { z } from "zod"

const schema = z.object ({
    name: z.string().min(1, "EL nombre es obligatorio"),
    age: z.number().int().positive("La edad tiene que ser numero positivo")
})


try {
    schema.parse({name: "Pedro", age: 23}) 
    console.log("Datos validos");
    
} catch (error) {
    console.error(error);
    
}


/* import {mostrarMensaje, mostrarTitulo, saludo} from  "./tareas.js"
import {user} from "./objetos.js"

console.log(mostrarTitulo());
console.log(saludo("Horacio"));
console.log(user.especialidad);  */


//Desestructurar un objeto con require
/* const {mostrarTitulo, mostrarMensaje} = require ("./tareas")

console.log(mostrarTitulo());
console.log(mostrarMensaje());

 */ //type de package json es que define la importacion "type": "commonjs",

//Importacion con require

/* const tareas = require("./tareas") //Viene como un objeto
const objetos = require("./objetos")

console.log(tareas.mostrarTitulo());
console.log(tareas.mostrarMensaje());
/* console.log(objetos); */
/* console.log(objetos.user.especialidad); */




/* console.log("hola");
//patch es correcion de errores
//npm i nodemon -D (D: modo desarrollo)

let nombre = "Pepe"

console.log("Nombre:", nombre)
 */

