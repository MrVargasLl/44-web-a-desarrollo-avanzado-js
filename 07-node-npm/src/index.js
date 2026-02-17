
import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/data', (req, res) => {
    res.send({
        nombre: "Rick",
        edad:26
    })
})

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
})


/* import http from "node:http"

const hostname = '127.0.0.1'; //direccion IP local
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, mundo desde Node.js!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); //`http://127.0.0.1:3000/`
}); */

//ctrl + http.. que aparece con npm start y va directo al url

//Ejemplo de zod con node
/* import { z } from "zod"

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
 */

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

