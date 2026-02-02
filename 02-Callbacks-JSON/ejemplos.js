function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse);

// Salida:
//Hola, María!
//Adios!

//Ejemplo con setTimeout:
console.log('Inicio');

setTimeout(() => {

    console.log('Esto sucede después de 2 segundos');

}, 2000);

console.log('Fin');
//el callback dentro de setTimeout se ejecuta después de 2 segundos, mientras que el resto del código sigue ejecutándose.

//Ejemplo de Callback Hell:
setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000);
//Aunque funcional, este código es complicado de seguir. Afortunadamente, existen soluciones como las Promesas y async/await, pero los callbacks siguen siendo la base.

//Lectura de Archivos
//Cuando trabajas con datos almacenados en archivos, como leer un archivo JSON:

// const fs = require('fs');

// fs.readFile('datos.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error al leer el archivo:', err);
//         return;
//     }

//     console.log('Datos del archivo:', data);
// });

const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25