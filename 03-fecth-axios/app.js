const { response } = require("express")

fetch("https://swapi.dev/api/starships/9/")
    .then(() => { })
/* .then(() => { })
.catch((error) => { }); */

//Step 1
fetch("https://swapi.dev/api/starships/9/")
    .then(res => { console.log(res) })
    .then(() => { })
/*  .catch((error) => { }); */

//Step 2

fetch("https://swapi.dev/api/starships/9/")
    .then(res => { console.log(res) })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })

//Step 3

fetch("https://swapi.dev/api/starships/9/")
    .then(res => {
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500

    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })

//Step 4

fetch("https://swapi.dev/api/guitarras/9/")
    .then(res => {
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500

    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })

//Step 5

fetch("https://swapi.dev/api/guitarras/9/")
    .then(res => {
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500
        if (!res.ok) {
            throw new Error(`Error HTTP. Status: ${res.status}`)

            return res.json()
        }

    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })

//Step 6

fetch("https://swapi.dev/api/starships/9/")
    .then(res => {
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500
        if (!res.ok) {
            throw new Error(`Error HTTP. Status: ${res.status}`)

        }
        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })

//Step 7

fetch("https://swapi.dev/api/starships/9/")
    .then(res => {
        console.log(res) //True or false       
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500
        if (!res.ok) {
            throw new Error(`Error HTTP. Status: ${res.status}`)
        }

        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })
/*      body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, */

//Step 8

fetch("https://swapi.dev/api/starships/9/")
    .then(res => {
        console.log(res) //True or false       
        console.log(res.ok) //True or false
        console.log(res.status) //200, 400, 500
        if (!res.ok) {
            throw new Error(`Error HTTP. Status: ${res.status}`)
        }

        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Esto se ejecuta independientemente de la promesa fetch") })
/*      body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, */

//Step New 1

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    //Para poder enviar al servidor debo convertir de javascript Json a texto plano
    body: JSON.stringify({
        nombre: "Pepe",
        correo: "pepe@correo.com",
        pass: "12345"
    })
})
    .then(res => res.json())
    .then(data => console.log(data))

//Step New 2 Ejemplo de buscador de personajes con fetch

const inputBusqueda = document.getElementById("busqueda")
const btnBuscar = document.getElementById("btnBuscar")
const resultado = document.getElementById("resultado")

async function buscarPersonaje(nombre) {

    try {

        resultado.innerHTML = "<p>Cargando personajes..</p>"

        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)

        if (!respuesta.ok) {
            throw new Error("Personaje no encontrado")
        }

        const data = await respuesta.json()

        const personaje = data.results[0]

        resultado.innerHTML = `
    <div class="card">
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}">
        <p>Status: ${personaje.status}</p>
    </div>
    `

    } catch (error) {
        resultado.innerHTML = `Personaje no encontrado en la biblioteca ❎ `
        //emojis tecla windows + .
        console.log(error);

    }

}


btnBuscar.addEventListener("click", () => {

    //Trim borra espacios en la cadena de texto que escribe el usuario
    const nombre = inputBusqueda.value.trim()
    //console.log(nombre)

    if (nombre === "") {
        resultado.innerHTML = "<p> ⚠️  Escribe un nombre para buscar..</p>"
        return
    }

    buscarPersonaje(nombre)



})

//Hacerlo funcionar cuando demos "enter"
inputBusqueda.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        btnBuscar.click()
    }
})

//Ctrl + click encontrar de donde viene una variable
//console en el explorador veo la linea donde se encuentra el error

//Axios
/* function mostrarPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response.data);

        })

        .catch((error => {
            console.log("error al  mostrar los datos:", error)

        }))

} */
/* 
//Axios con async await
async function mostrarPosts () {

    try {
        const respuesta = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(respuesta.data);
        
    } catch (error) {
        console.log(error)
        
    }
    
        
}

mostrarPosts() */


//Peticion de tipo Post con axios async await
/* 
async function enviarDatos () {

    try {
        
        const respuesta = await axios.post("https://jsonplaceholder.typicode.com/posts",{

            nombre: "Carlos",
            correo: "carlos@correo.com"
        })

        console.log(respuesta.data)
        
    } catch (error) {
        console.error("Error al enviar la solicitud", error);
        
        
    }

}

enviarDatos ()  */


/* 
async function enviarDatos (data) {

    try {
        
        const respuesta = await axios.post("https://jsonplaceholder.typicode.com/posts",data)

        console.log(respuesta.data)
        
    } catch (error) {
        console.error("Error al enviar la solicitud", error);
        
        
    }

}

enviarDatos ({
                nombre: "Carlos",
            correo: "carlos@correo.com"
})  */

const baseURL = "https://jsonplaceholder.typicode.com/posts"

async function enviarDatos(data) {

    try {

        const respuesta = await axios.post(baseURL, data)

        console.log(respuesta.data)

    } catch (error) {
        console.error("Error al enviar la solicitud", error);


    }

}

enviarDatos({
    nombre: "Carlos",
    correo: "carlos@correo.com"
})

//Ejemplos de campus
/*fetch es una función integrada en JavaScript que permite realizar solicitudes HTTP de forma asíncrona. */
//Ejemplo senscillo Fetch

fetch('https://dragonball-api.com/api/characters')

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.error('Error:', error));

// 1. Devuelve Promesas

fetch('https://api.example.com')

    .then(response => console.log('Solicitud exitosa'))

    .catch(error => console.error('Hubo un problema:', error));

// Sin Error

fetch('https://dragonball-api.com/api/characters')

    .then(response => console.log('Solicitud exitosa'))

    .catch(error => console.error('Hubo un problema:', error));

// 2. Soporte para diferentes tipos de solicitudes (GET, POST, PUT, DELETE)

//https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Juan', edad: 30 })
})
    .then(response => response.json())
    .then(data => console.log('Data enviada:', data))
    .catch(error => console.error('Error:', error));

// 3. Manejo de Errores

fetch('https://dragonball-api.com/api/characters')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error en la solicitud:', error));

//Casos de Uso en el Mundo Real

//1. Consultar APIs de Clima

fetch('https://api.weatherapi.com/v1/current.json?key=tuClave&q=Mexico')

    .then(response => response.json())

    .then(data => console.log('Clima acutal:', data))

    .catch(error => console.error('Error al obtener el clima:', error))

//2. Formulario de Contacto
//https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Ana',
        mensaje: 'Hola, me interesa su servicio'
    })
})
    .then(response => response.json())
    .then(data => console.log('Formulario enviado', data))
    .catch(error => console.error('Error al enviar el fromulario:', error));


//3. Galería Dinámica
/*fetch('https://api.unsplash.com/photos?client_id=tuClave')*/
fetch('https://picsum.photos/v2/list?page=1&limit=10')
    //https://picsum.photos/v2/list?page=1&limit=10
    .then(response => response.json())
    .then(images => {
        console.log(images)
    })
    .then(images => {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.urls.small;
            document.body.appendChild(img);
        });
    })
    .catch(error => console.error('Error al cargar imagenes:', error));

fetch('https://dragonball-api.com/api/characters')
    .then(response => {
        console.log(response.status); // código de estado HTTP
        return response.json();
    });

//Introducción a Axios
//Axios es una biblioteca basada en promesas que facilita las interacciones con servidores web.

//('https://dragonball-api.com/api/characters'

//Ejemplo sencillo:

import axios from 'axios';
axios.get('https://dragonball-api.com/api/characters')
    .then(response => { console.log(response.data) })
    .catch(error => {
        console.error('Error al obtener datos:', error)
    });

/*Instalación con npm:
npm install axios
Uso con una CDN:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>*/


//Axios permite realizar distintos tipos de solicitudes HTTP como GET, POST, PUT y DELETE.

//https://jsonplaceholder.typicode.com/posts

//Solicitud GET:

import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => { console.log(response.data) })
    .catch(error => console.error(error));

//Solicitud POST:
import axios from 'axios';
axios.post('https://jsonplaceholder.typicode.com/posts', {
    name: 'John Doe',
    email: 'john.doe@example.com'
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error))

//Configuración Avanzada

//Ejemplo de configuración global:

//Ejemplo de manejo de errores:

import axios from 'axios';
axios.get('https://dragonball-api.com/api/characters')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            console.error('Error del servidor:', error.response.status);
        } else if (error.request) {
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    });

//Casos de Uso en el Mundo Real

//1. Consumo de APIs de Clima
import axios from 'axios';
axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=tu_api_key')

    .then(response => console.log(response.data))

    .catch(error => console.error(error));

    //2. Envío de Formularios
import axios from 'axios';
axios.post('https://jsonplaceholder.typicode.com/posts', {
    name: 'Jane Doe',
    message: 'Hola, me interesa su producto.'
})
.then(response => console.log('Mensaje enviado:', response.data))
.catch(error => console.error(error));

