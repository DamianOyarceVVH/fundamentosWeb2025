// Array para almacenar el color original de cada icono
const coloresOriginales = new Map();

/**
 * Resalta el icono al pasar el ratón (mouseover).
 * @param {HTMLElement} element - El elemento <a> del nav-link.
 * @param {string} color - El color al que cambiar el icono.
 */
function resaltarIcono(element, color) {
    const icon = element.querySelector('.icono-nav');
    if (icon) {
        // Si no tenemos el color original, lo guardamos (solo la primera vez)
        if (!coloresOriginales.has(icon)) {
            coloresOriginales.set(icon, icon.style.color || '');
        }
        icon.style.color = color;
    }
}

/**
 * Restaura el color original del icono al quitar el ratón (mouseout).
 * @param {HTMLElement} element - El elemento <a> del nav-link.
 */
function restaurarIcono(element) {
    const icon = element.querySelector('.icono-nav');
    if (icon) {
        // Solo restaura si no está activo
        if (!element.classList.contains('active')) {
            const colorOriginal = coloresOriginales.get(icon) || '';
            icon.style.color = colorOriginal;
        }
    }
}

/**
 * Muestra la sección correspondiente y actualiza el estado activo.
 * @param {Event} event - El objeto de evento (para prevenir el default).
 * @param {HTMLElement} element - El elemento <a> del nav-link que fue clickeado.
 */
function mostrarSeccion(event, element) {
    // 1. Prevenir el comportamiento por defecto del ancla (evita el "salto")
    if (event) {
        event.preventDefault();
    }

    // 2. Obtener el ID de la sección a mostrar (desde el href del enlace)
    const targetId = element.getAttribute('href'); // Ej: "#sobreMi"
    
    // 3. Ocultar TODAS las secciones dentro de #contenido-principal
    document.querySelectorAll('#contenido-principal section').forEach(section => {
        section.style.display = 'none';
    });

    // 4. Mostrar SOLO la sección objetivo
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.style.display = 'block'; // Muestra la sección
    }

    // 5. Quita la clase 'active' y el color de resaltado de TODOS los enlaces
    document.querySelectorAll('#barra-lateral .nav-link').forEach(link => {
        link.classList.remove('active');
        const icon = link.querySelector('.icono-nav');
        if (icon && coloresOriginales.has(icon)) {
            // Restaura el color original del icono
            icon.style.color = coloresOriginales.get(icon) || '';
        }
    });

    // 6. Agrega la clase 'active' al elemento clickeado
    element.classList.add('active');
    
    // 7. Aplica el color de resaltado al icono ACTIVO
    const activeIcon = element.querySelector('.icono-nav');
    if (activeIcon) {
        // Obtiene el color de resaltado de la función onmouseover
        const onMouseOverAttr = element.getAttribute('onmouseover');
        // Extrae el color (ej: '#0d6efd') de la cadena de texto
        const hoverColor = onMouseOverAttr.match(/'(#[0-9a-fA-F]{3,6})'/)[1];
        
        // Guarda el color original si no lo tenemos
        if (!coloresOriginales.has(activeIcon)) {
            coloresOriginales.set(activeIcon, activeIcon.style.color || '');
        }
        
        // Aplica el color de resaltado
        activeIcon.style.color = hoverColor;
    }
}

/**
 * (NUEVA FUNCIÓN)
 * Simula un clic en un enlace de la barra lateral.
 * Usado por los botones en la sección "Home".
 * @param {string} targetId - El ID de la sección (ej: '#proyectos').
 */
function clickEnlaceNav(targetId) {
    // Buscar el enlace en la barra lateral que apunta a ese ID
    const navLink = document.querySelector(`#barra-lateral .nav-link[href="${targetId}"]`);
    
    if (navLink) {
        // Llamar a mostrarSeccion directamente (pasando null como evento)
        mostrarSeccion(null, navLink);
    }
}


// --- INICIALIZACIÓN (MODIFICADO) ---

document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializar Tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // 1. Ocultar todas las secciones excepto la que esté marcada como 'active'
    const activeLink = document.querySelector('#barra-lateral .nav-link.active');
    let activeSectionId = '#home'; // Por defecto es 'home'
    
    if (activeLink) {
        activeSectionId = activeLink.getAttribute('href');
    }

    document.querySelectorAll('#contenido-principal section').forEach(section => {
        // Compara el ID de la sección (ej: 'home') con el ID del href (ej: '#home')
        if (section.id !== activeSectionId.substring(1)) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block'; // Asegura que la activa esté visible
        }
    });

    // 2. Aplicar el color de resaltado al icono activo al cargar la página
    if (activeLink) {
        const icon = activeLink.querySelector('.icono-nav');
        if (icon) {
            // Obtener el color de resaltado del atributo onmouseover
            const onMouseOverAttr = activeLink.getAttribute('onmouseover');
            const colorInicial = onMouseOverAttr.match(/'(#[0-9a-fA-F]{3,6})'/)[1];

            // Guardar el color original (probablemente vacío)
            coloresOriginales.set(icon, icon.style.color || '');
            // Aplicar el color de resaltado
            icon.style.color = colorInicial;
        }
    }
});