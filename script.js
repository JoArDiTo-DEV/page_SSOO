document.addEventListener('DOMContentLoaded', function () {
    const modoBoton = document.getElementById('modoBoton');
    const body = document.body;

    // Agrega un controlador de eventos para el clic del botón
    modoBoton.addEventListener('click', function () {
        // Alterna entre modo claro y oscuro
        body.classList.toggle('modo-claro');
        body.classList.toggle('modo-oscuro');
    });
});
