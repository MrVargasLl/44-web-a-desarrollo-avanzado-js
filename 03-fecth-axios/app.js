fetch("https://swapi.dev/api/starships/9/")
    .then(() => { })
    /* .then(() => { })
    .catch((error) => { }); */

//Step 1
    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {console.log( res ) })
    .then(() => { })
   /*  .catch((error) => { }); */

//Step 2

    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {console.log( res ) })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})

//Step 3

    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
    
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})

//Step 4

    fetch("https://swapi.dev/api/guitarras/9/")
    .then( res => {
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
    
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})

//Step 5

    fetch("https://swapi.dev/api/guitarras/9/")
    .then( res => {
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
        if ( !res.ok ) {
            throw new Error ( `Error HTTP. Status: ${res.status}` )

            return res.json()
        }
    
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})

//Step 6

    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
        if ( !res.ok ) {
            throw new Error ( `Error HTTP. Status: ${res.status}` )
            
        }
        return res.json()
        })
        .then( data => {
            console.log(data);       
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})

//Step 7

    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {
         console.log( res ) //True or false       
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
        if ( !res.ok ) {
            throw new Error ( `Error HTTP. Status: ${res.status}` )
        }

        return res.json()
        })
        .then( data => {
            console.log(data);       
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})
/*      body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, */

//Step 8

    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {
         console.log( res ) //True or false       
        console.log( res.ok ) //True or false
        console.log(res.status) //200, 400, 500
        if ( !res.ok ) {
            throw new Error ( `Error HTTP. Status: ${res.status}` )
        }

        return res.json()
        })
        .then( data => {
            console.log(data);       
        })
    .catch((error) => {console.error (error) })
    .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch")})
/*      body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, */

//Step New 1

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
        "Content-type": "application/json"
    }, 
    //Para poder enviar al servidor debo convertir de javascript Json a texto plano
    body: JSON.stringify ({
        nombre: "Pepe",
        correo: "pepe@correo.com",
        pass: "12345"
    })
})
.then( res => res.json() )
.then( data => console.log(data) )

//Step New 2 Ejemplo de buscador de personajes con fetch

const inputBusqueda = document.getElementById("busqueda")
const btnBuscar = document.getElementById("btnBuscar")
const resultado = document.getElementById("resultado")

async function buscarPersonaje ( nombre ) {

try {

    resultado.innerHTML = "<p>Cargando personajes..</p>"

    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)

    if( !respuesta.ok) {
        throw new Error ("Personaje no encontrado")
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

} catch (error){
    resultado.innerHTML = `Personaje no encontrado en la biblioteca ❎ `
    //emojis tecla windows + .
    console.log(error);
    
}

}


btnBuscar.addEventListener("click", () => {

    //Trim borra espacios en la cadena de texto que escribe el usuario
    const nombre = inputBusqueda.value.trim()
    //console.log(nombre)
    
    if ( nombre === "") {
        resultado.innerHTML = "<p> ⚠️  Escribe un nombre para buscar..</p>"
        return
    }

    buscarPersonaje(nombre)

    

})

//Hacerlo funcionar cuando demos "enter"
inputBusqueda.addEventListener("keydown", (event) => {

    if(event.key === "Enter"){
        btnBuscar.click()
    }
})