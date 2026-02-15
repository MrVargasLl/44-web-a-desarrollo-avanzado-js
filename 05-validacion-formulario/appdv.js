const form = document.getElementById("myForm");

/* form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío automático del formulario 
    //Detiene el comportamiento por defecto del formulario, que es recargar la página.
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
    console.log(`Nombre: ${name}, Correo: ${email}`);
});

 */
/* form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (!email.includes('@')) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
}); */

//https://jsonplaceholder.typicode.com/posts

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log('Datos enviados:', data))
        .catch(error => console.error('Error ALV:', error));



/* 
type="checkbox": Define una casilla de verificación.
name: Agrupa los valores de las opciones bajo un mismo nombre.
value: Especifica el valor asociado a la opción seleccionada. */

    const selectintereses = document.getElementsByName('intereses')
    
    const userInteres = [ ]
selectintereses.forEach( color => { 
        //console.log(color.value, color.checked)
        if ( color.checked){
            userInteres.push(color.value)
            console.log(color.value, color.checked)
        }
    })
/* const checkbox = document.querySelector('input[type="checkbox"]'); */

//console.log(checkbox.checked); // true o false

/* type="radio": Define un botón de radio.
name: Garantiza que solo un botón dentro del grupo pueda ser seleccionado a la vez. */

const selectedRadio = document.querySelector('input[name="genero"]:checked');

if (selectedRadio) {
    console.log(selectedRadio.value);
} else {
    console.log("No hay ningún género seleccionado");
}

//<select>: Crea el menú desplegable.
//<option>: Define las opciones dentro del menú.
//value: Especifica el valor que se enviará al servidor cuando se seleccione la opción.

const ciudad = document.getElementById('ciudad');

console.log(ciudad.value); // Valor de la opción seleccionada

/* type="date": Crea un selector de fechas.
type="time": Crea un selector de horas. */

const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;
console.log(`Fecha: ${fecha}, Hora: ${hora}`);

/* type="file": Permite al usuario seleccionar archivos.
Se puede acceder al archivo cargado a través de la propiedad files: */

const archivo = document.getElementById('archivo').files[0];
console.log(archivo.name); // Nombre del archivo

});