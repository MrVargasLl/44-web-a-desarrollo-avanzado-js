/* const { response } = require("express") */

const form = document.getElementById("myForm")
/* 
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event)    
} ) // la pagina no se recarga */

/* btn.addEventListener("click", (event) => {
    
} ) */

    form.addEventListener("submit", (event) => {
    event.preventDefault()

    //captura de las variables

    const name = document.getElementById("name").value
/*     console.log(name)
    console.log(name.value) */
    const email = document.getElementById("email").value    
    const password = document.getElementById("password").value
    const errorEmail = document.getElementById("errorEmail")
    const checkbox = document.querySelector('input[type="checkbox"]')
        const selectColors = document.getElementsByName('colores')
/* 
        const userColors = Array.from(selectColors).filter( color => color.checked === true)
 */
        const userColors = [ ]

    //console.log("checkbox", checkbox.checked);
    //console.log(selectColors)
    selectColors.forEach( color => { 
        //console.log(color.value, color.checked)
        if ( color.checked){
            userColors.push(color.value)
        }
    })
    
    

    //validaccion de correo incluye @...
    if (!email.includes("@")){
        errorEmail.textContent = "Introduce un correo electronico valido"
        errorEmail.style.color ="yellow"
        /* console.log("error") */
        
        //si esto no esta bien 
        //retorno y finalizo la funcion
        
        return;
    }

    //Anadir una nueva condicion donde se valide contrasena 
    if (!(password.length >= 5 && /[^\w\s]/.test(password))) {
    errorEmail.textContent = "Introduce una contraseña válida";
    errorEmail.style.color = "yellow";
    return;
    }



    //carga de de resultados en objetos recopilar informacion
    const userData = {

        name,
        email,
        password,
        colores: checkbox.checked,
    };
    
    errorEmail.textContent= "";

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch( error => console.error("error:", error)
    )


    form.reset()
    /* email.value ="" */
    console.log(userData)
    
    
} ) // la pagina no se recarga

