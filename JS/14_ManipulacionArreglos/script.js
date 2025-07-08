console.log("Vinculado correctamente...")

// Ejercicio 1: Agregar elementos
function agrElementos() {
    let compras = [];
    compras.push("pan", "leche", "huevos");
    alert(`Compras: ${compras.join(", ")}`);

    // Ejercicio 2: Quitar el último
    ultimo = compras.pop();
    alert(`Compras (pop): ${compras.join(", ")}`);
}

// Ejercicio 3: Agregar al inicio
function agrInicio() {
    let colores = ["rojo", "azul"];
    alert(`Colores: ${colores.join(", ")}`);
    colores.unshift("amarillo");
    alert(`Colores (unshift): ${colores.join(", ")}`);
    
    // Ejercicio 4: Quitar el primero
    ultimo = colores.shift();
    alert(`Color eliminado: ${ultimo}`);
}

//Ejercicio 5: Combinación de métodos
function combMetodos() {
    let numeros = [10, 20, 30];
    alert(`Números: ${numeros.join(", ")}`);
    numeros.push(40);
    alert(`Números (push): ${numeros.join(", ")}`);
    let primero = numeros.shift();
    alert(`Números (shift): ${numeros.join(", ")}`);
    numeros.unshift(5);
    alert(`Números (unshift): ${numeros.join(", ")}`);
    let ultimo = numeros.pop();
    alert(`Números (pop): ${numeros.join(", ")}`);
}

// Ejercicio 6: Combinación de métodos
function agrElemInverso() {
    let orden = [];
    orden.unshift(1, 2, 3);
    alert(`Orden: ${orden.join(", ")}`);
}

// Ejercicio 7: Historial de mensajes
function historial() {
    let historial = [];
    historial.push("Hola", "mucho", "gusto");
    alert(`Historial de mensajes (push):\n${historial.join(", ")}`);
    let ultimo = historial.pop();
    alert(`Mensaje eliminado: ${ultimo}`);
}

// Ejercicio 8: Cola de atención
function colaAtencion() {
    cola = ["Cliente1", "Cliente2", "Cliente3"];
    eliminado = cola.shift();
    cola.push("Cliente4");
    alert(`Cola final: ${cola.join(" - ")}`);
}

// Ejercicio 9: Reordenar nombres
function reordenarNomb() {
    nombres = ["Pedro", "Juan", "Luis"];
    alert(`Nombres:\n${nombres.join(" - ")}`);
    eliminado = nombre.pop();
    alert(`Nombres (pop):\n${nombres.join(" - ")}`);
    nombre.unshift("Mateo");
    alert(`Nombres (unshift):\n${nombres.join(" - ")}`);
    nombre.push("Ana");
    alert(`Nombres actualizados (push):\n${nombres.join(" - ")}`);
}

// 🧠 Ejercicio 10: Pilas y colas
function pilasColas() {
    pila = []
    pila.push("", "", "")
}