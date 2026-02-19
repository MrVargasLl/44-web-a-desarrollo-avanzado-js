
export function adivinar(numeroJugador, numeroSecreto) {
    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        return 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        return '¡Felicidades! ¡Adivinaste el número!';
    } else if (numeroJugador < numeroSecreto) {
        return 'El número es más alto.';
    } else {
        return 'El número es más bajo.';
    }

}