const inputBusqueda = document.getElementById("busqueda");
const fetchBtn = document.getElementById('fetch-btn');
const resultado = document.getElementById('data-container');

// Función para renderizar los personajes
function renderCharacters(characters, searchName) {
    if (searchName === "") {
        resultado.innerHTML = "<p> ⚠️  Escribe un nombre para buscar..</p>"
        return
    }
    resultado.innerHTML = ""; // Limpiamos el contenedor antes de agregar nuevos resultados
    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchName.toLowerCase()));

    if (filteredCharacters.length === 0) {
        resultado.innerHTML = "<p>No se encontraron personajes.</p>";
    } else {
        filteredCharacters.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.innerHTML = `
                <h3>${character.name}</h3>
                <img src="${character.image}" alt="${character.name}">
            `;
            resultado.appendChild(characterElement);
        });
    }
}

// Evento para el botón de Fetch
fetchBtn.addEventListener('click', () => {
    const nombrePersonaje = inputBusqueda.value.trim();
    resultado.innerHTML = "<p>Cargando personajes...</p>";

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            renderCharacters(data.results, nombrePersonaje);
        })
        .catch(error => {
            console.error('Error:', error);
            resultado.textContent = 'Hubo un error al obtener los datos.';
        });
});


// Implementa las Solicitudes con Axios

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
    // Obtenemos el nombre del personaje ingresado por el usuario
    const nombrePersonaje = inputBusqueda.value.trim();

    // Mostramos un mensaje de carga
    resultado.innerHTML = "<p>Cargando personajes...</p>";
    
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            // Obtenemos los datos de la respuesta
            const data = response.data;
            // Llamamos a renderCharacters con los datos y el nombre del personaje
            renderCharacters(data.results, nombrePersonaje);
        })
        .catch(error => {
            console.error('Error:', error);
            // Mostramos un mensaje de error en el contenedor
            resultado.textContent = 'Hubo un error al obtener los datos.';
        });
});