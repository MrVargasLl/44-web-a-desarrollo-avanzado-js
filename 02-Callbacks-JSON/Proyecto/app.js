/**
 * LibraryManagement.console.js
 * App de consola para gestionar una biblioteca (inventario de libros)
 * - Simula lectura/escritura “tipo archivo JSON” usando callbacks + setTimeout
 * - Menú interactivo en la terminal con readline
 *
 * Para ejecutar:
 *   node LibraryManagement.console.js
 */

const readline = require("readline");

// ======================================
// 1) “BASE DE DATOS” EN MEMORIA (JSON)
// ======================================
// Esto es lo mismo que en el gist: un objeto JSON con libros iniciales. :contentReference[oaicite:1]{index=1}
let biblioteca = {
    libros: [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        disponible: true,
    },
    { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true },
    ],
};

// =======================================================
// 2) SIMULACIÓN DE LECTURA Y ESCRITURA ASÍNCRONA (CALLBACKS)
// =======================================================
// La idea: en vez de leer un archivo real, “simulamos” que leer/escribir tarda.
// Esto enseña asincronía con callbacks como el ejemplo del gist. :contentReference[oaicite:2]{index=2}

/**
 * leerDatos(callback)
 * - Simula leer un archivo JSON con retraso.
 * - callback recibe (err, datos)
 */
function leerDatos(callback) {
    setTimeout(() => {
    // En la vida real aquí leerías un archivo, DB, etc.
    // Nosotros solo devolvemos lo que ya está en memoria.
    callback(null, biblioteca);
    }, 600);
}

/**
 * escribirDatos(nuevaBiblioteca, callback)
 * - Simula escribir en un archivo JSON con retraso.
 * - callback recibe (err)
 */
function escribirDatos(nuevaBiblioteca, callback) {
    setTimeout(() => {
    // En la vida real aquí escribirías a disco.
    // Aquí reemplazamos el “estado global” en memoria.
    biblioteca = nuevaBiblioteca;
    callback(null);
    }, 600);
}

// ======================================
// 3) FUNCIONES DE NEGOCIO (CRUD SIMPLE)
// ======================================

/**
 * mostrarLibros()
 * - Lee datos (async) y los imprime
 */
function mostrarLibros(done) {
    leerDatos((err, datos) => {
    if (err) {
        console.error("❌ Error leyendo datos:", err);
        return done?.();
    }

    console.log("\n📚 Inventario de libros:");
    if (datos.libros.length === 0) {
        console.log("  (No hay libros aún)");
        return done?.();
    }

    datos.libros.forEach((libro, index) => {
        const estado = libro.disponible ? "Disponible ✅" : "Prestado ❌";
        console.log(
        `  ${index + 1}. "${libro.titulo}" — ${libro.autor} [${libro.genero}] => ${estado}`
        );
    });

    done?.();
    });
}

/**
 * agregarLibro(titulo, autor, genero)
 * - Lee datos
 * - Inserta libro nuevo
 * - Escribe datos
 */
function agregarLibro(titulo, autor, genero, done) {
    leerDatos((err, datos) => {
    if (err) {
        console.error("❌ Error leyendo datos:", err);
        return done?.();
    }

    // Validación básica: no duplicar por título exacto
    const yaExiste = datos.libros.some((l) => l.titulo.toLowerCase() === titulo.toLowerCase());
    if (yaExiste) {
        console.log("⚠️ Ya existe un libro con ese título. No se agregó.");
        return done?.();
    }

    const nuevoLibro = {
        titulo,
        autor,
        genero,
      disponible: true, // Nuevo libro normalmente arranca disponible
    };

    const nuevaBiblioteca = {
        ...datos,
        libros: [...datos.libros, nuevoLibro],
    };

    escribirDatos(nuevaBiblioteca, (err2) => {
        if (err2) {
        console.error("❌ Error escribiendo datos:", err2);
        return done?.();
        }

        console.log(`✅ Libro agregado: "${titulo}"`);
        done?.();
    });
    });
}

/**
 * actualizarDisponibilidad(titulo, nuevoEstadoBool)
 * - Lee datos
 * - Busca libro
 * - Actualiza disponible true/false
 * - Escribe datos
 */
function actualizarDisponibilidad(titulo, nuevoEstadoBool, done) {
    leerDatos((err, datos) => {
    if (err) {
        console.error("❌ Error leyendo datos:", err);
        return done?.();
    }

    const index = datos.libros.findIndex(
        (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (index === -1) {
        console.log("⚠️ No encontré un libro con ese título.");
        return done?.();
    }

    const libroViejo = datos.libros[index];
    const libroNuevo = { ...libroViejo, disponible: nuevoEstadoBool };

    const librosActualizados = [...datos.libros];
    librosActualizados[index] = libroNuevo;

    const nuevaBiblioteca = { ...datos, libros: librosActualizados };

    escribirDatos(nuevaBiblioteca, (err2) => {
        if (err2) {
        console.error("❌ Error escribiendo datos:", err2);
        return done?.();
        }

        const estado = nuevoEstadoBool ? "Disponible ✅" : "Prestado ❌";
        console.log(`✅ Estado actualizado: "${libroNuevo.titulo}" => ${estado}`);
        done?.();
    });
    });
}

// ======================================
// 4) CONSOLA INTERACTIVA (MENÚ)
// ======================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// “Promisificamos” rl.question para poder usar async/await en el menú,
// PERO OJO: la “lectura/escritura” de datos sigue usando callbacks (lo pedido).
function ask(pregunta) {
    return new Promise((resolve) => rl.question(pregunta, resolve));
}

function mostrarMenu() {
    console.log(`
===========================
📖 Biblioteca - Menú
===========================
1) Consultar libros
2) Agregar libro
3) Actualizar disponibilidad
4) Salir
`);
}

async function main() {
    console.log("👋 Bienvenido a la Biblioteca (simulación con JSON + callbacks)\n");

    while (true) {
    mostrarMenu();
    const opcion = (await ask("Elige una opción (1-4): ")).trim();

    if (opcion === "1") {
      // Consultar
        await new Promise((resolve) => mostrarLibros(resolve));
    } else if (opcion === "2") {
      // Agregar
        const titulo = (await ask("Título: ")).trim();
        const autor = (await ask("Autor: ")).trim();
        const genero = (await ask("Género: ")).trim();

        if (!titulo || !autor || !genero) {
        console.log("⚠️ Todos los campos son obligatorios.");
        continue;
        }

        await new Promise((resolve) => agregarLibro(titulo, autor, genero, resolve));
    } else if (opcion === "3") {
      // Actualizar disponibilidad
        const titulo = (await ask("Título del libro a actualizar: ")).trim();
        const estado = (await ask("Nuevo estado (prestado/disponible): ")).trim().toLowerCase();

        if (!titulo) {
        console.log("⚠️ Debes escribir un título.");
        continue;
        }

        if (estado !== "prestado" && estado !== "disponible") {
        console.log("⚠️ Estado inválido. Escribe: prestado o disponible.");
        continue;
        }

        const nuevoEstadoBool = estado === "disponible";
        await new Promise((resolve) =>
        actualizarDisponibilidad(titulo, nuevoEstadoBool, resolve)
        );
    } else if (opcion === "4") {
        console.log("👋 ¡Hasta luego!");
        rl.close();
        break;
    } else {
        console.log("⚠️ Opción inválida. Elige 1, 2, 3 o 4.");
    }
    }
}

// Arranque
main();
