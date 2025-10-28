/* static/js/script.js */

// Inicializa los Tooltips de Bootstrap (para mostrar los títulos al pasar el mouse)
// Esto es una buena práctica de UI cuando se usan solo íconos.
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


/**
 * Función para el evento onmouseover (Efecto Hover con JS).
 * Cambia el color del ícono (pasado como 'this').
 * @param {HTMLElement} elemento - El elemento <a> que disparó el evento.
 * @param {string} color - El color deseado para el hover.
 */
function resaltarIcono(elemento, color) {
    // 'this' (pasado como 'elemento') es el <a>
    // Buscamos el <i> (ícono) dentro del <a>
    const icono = elemento.querySelector('.icono-nav');
    if (icono) {
        icono.style.color = color; // Cambia el color (efecto JS)
    }
}

/**
 * Función para el evento onmouseout (Restaurar estado).
 * Restaura el color original del ícono (pasado como 'this').
 * @param {HTMLElement} elemento - El elemento <a> que disparó el evento.
 */
function restaurarIcono(elemento) {
    // 'this' (pasado como 'elemento') es el <a>
    const icono = elemento.querySelector('.icono-nav');
    if (icono) {
        // Restaura al color gris secundario de Bootstrap
        icono.style.color = '#6c757d'; 
    }
}

/**
 * Función para el evento onclick (Ejecutar acción).
 * Simula la carga de una sección modificando el DOM.
 * @param {HTMLElement} elemento - El elemento <a> que disparó el evento.
 * @param {string} nombreSeccion - El nombre de la sección a mostrar.
 */
function mostrarSeccion(elemento, nombreSeccion) {
    // 1. Manipulación del DOM: Actualizar el título de la sección
    const titulo = document.getElementById('titulo-seccion');
    if (titulo) {
        titulo.innerText = `Sección Actual: ${nombreSeccion}`;
    }

    // 2. Simulación de "estado activo" (Opcional, pero buena práctica)
    // Primero, quitamos la clase 'active' de todos los enlaces
    const enlaces = document.querySelectorAll('#barra-lateral .nav-link');
    enlaces.forEach(enlace => {
        enlace.classList.remove('active'); // 'active' es una clase de Bootstrap
    });

    // Luego, añadimos la clase 'active' solo al elemento clickeado ('this')
    elemento.classList.add('active');

    // 3. Mostramos una alerta simple (como pidió el criterio)
    console.log(`Navegando a: ${nombreSeccion}`);
    // alert(`Has hecho clic en: ${nombreSeccion}`); // Descomentar para alerta
}