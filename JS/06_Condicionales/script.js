console.log("Vinculado correctamente...")

// Evaluación de Temperatura
function temperatura() {
    let celcius = prompt("Ingresa la temperatura en °C: ");
    if (celcius < 0) {
        alert("La temperatura es: " + celcius + "°C\nHace mucho frío.");
    } else {
        alert("La temperatura es: " + celcius + "°C\nLa temperatura es agradable.");
    }
}

// Verificación de Usuario y Contraseña
function verificarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");
    if (nombreUsuario == "usuario123" && contraseña == "secreto") {
        alert("Acceso concedido");
    }
    else {
        alert("Acceso denegado");
    }
}

// Evaluación de Puntuación en un Juego
function puntuacion() {
    let puntos = prompt("Ingrese la puntuación obtenida: ");
    if (puntos >= 90) {
        alert("Excelente");
    } else if (puntos >= 70) {
        alert("Buen trabajo");
    } else {
        alert("Necesitas mejorar");
    }
}