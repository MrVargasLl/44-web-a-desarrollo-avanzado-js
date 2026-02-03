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

