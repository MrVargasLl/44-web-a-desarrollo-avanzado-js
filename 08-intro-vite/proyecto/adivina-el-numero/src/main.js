import './style.css'
import { adivinar } from './adivinar.js'

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    mensaje.textContent = adivinar(numeroJugador, numeroSecreto);
});