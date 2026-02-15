
document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validación del correo electrónico
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validación del número de teléfono: solo dígitos
    const telefonoValido = /^\d+$/.test(telefono);
    if (!telefonoValido) {
        alert('El número de teléfono solo debe contener dígitos.');
        return;
    }

    // Validación de la fecha: no puede ser anterior a hoy
    const fechaActual = new Date().toISOString().split('T')[0];
    if (fecha < fechaActual) {
        alert('La fecha del evento no puede ser anterior a la fecha actual.');
        return;
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');

});