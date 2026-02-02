
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 👈 ESTA LÍNEA ES LA MAGIA

app.get('/saludo', (req, res) => {
    res.send('¡Hola desde el servidor!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

//http://localhost:3000/saludo
//el puerto es 3000, Express es tu herramienta, y tú eres el que manda.

/*GET: Obtener datos del servidor.
POST: Enviar datos al servidor POST para crear (sobre todo) o actualizar un recurso.
PUT: Actualizar datos en el servidor.
DELETE: Eliminar datos del servidor.*/

fetch('https://swapi.dev/api/people/1/')

    .then(response => response.json())

    .then(data => console.log(data));