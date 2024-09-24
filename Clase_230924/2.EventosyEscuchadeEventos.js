// Obtener el botón del DOM
const botonColor = document.getElementById('cambiarColor');

// Añadir un listener al botón para manejar el evento de click
botonColor.addEventListener('click', () => {
    // Generar un color aleatorio
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Cambiar el style.background del body
    document.body.style.backgroundColor = colorAleatorio;
});
