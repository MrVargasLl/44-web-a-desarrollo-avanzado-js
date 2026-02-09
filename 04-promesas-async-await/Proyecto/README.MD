# Sistema de Reservas para un Restaurante

**Objetivo:** Permitir a los clientes hacer reservas en línea en el restaurante.

## Acciones a implementar:
1. **Verificar Disponibilidad:** Comprobar si hay mesas disponibles para la fecha y hora solicitadas.
2. **Confirmar Reserva:** Si hay disponibilidad, proceder con la confirmación de la reserva.
3. **Enviar Confirmación por Correo:** Enviar un correo electrónico de confirmación al cliente.
4. **Manejo de Errores:** Gestionar los errores correctamente, ya sea por falta de disponibilidad o fallos en el envío del correo.

## Instrucciones:
- Completar la función `verificarDisponibilidad` para comprobar la cantidad de mesas solicitadas.
- Implementar la función `enviarConfirmacionReserva` con una simulación de probabilidad de éxito y error.
- Usar `await` en la función principal `hacerReserva` para coordinar el flujo y manejar los errores con `catch`.

## Pruebas:
- Realizar pruebas con diferentes cantidades de mesas solicitadas para verificar el comportamiento del sistema.

