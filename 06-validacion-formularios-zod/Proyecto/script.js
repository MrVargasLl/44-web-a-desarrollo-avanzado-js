// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    // PISTA: Define que el nombre debe ser una cadena no vacía.
    name: z.string().trim().min(1, 'El nombre es obligatorio') 
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "El nombre solo puede contener letras"),
    // PISTA: Valida que el correo tenga el formato correcto.
    email: z.string().trim().min(1, "El correo es obligatorio")
    .email('El correo electrónico no es válido'),
    // PISTA: La contraseña debe tener al menos 6 caracteres.
    password: z.string()
        .trim()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
        .regex(/[0-9]/, 'Debe contener al menos un número')
});

const errorMessage = document.getElementById('errors');

document
    .getElementById("registerForm")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        // 1) Limpia errores SIEMPRE al empezar
        errorMessage.textContent = "";

        // Capturamos los valores ingresados
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        try {
            // PISTA: Usa el método correcto de Zod para validar el esquema.
            //registerSchema.___?___(formData);
            registerSchema.parse(formData); // 👈 parse lanza error si falla
            errorMessage.textContent = "";
            
            alert("¡Registro exitoso!");

        } catch (error) {
            // PISTA: Muestra los mensajes de error en la página.
            document.getElementById("errors").textContent = error.errors
                .map((e) => e.message)
                .join(", ");
        }
    });