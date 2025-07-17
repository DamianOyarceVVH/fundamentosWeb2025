console.log("Vinculado correctamente...");
// Función capitalize para poner en mayúscula la primera letra
function capitalize(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/* 🧠 Ejercicio 1: Agregar lista de compras */
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = capitalize(elemento);
    resultado.appendChild(item);
}

/* 🧠 Ejercicio 2: Eliminar último elemento */
let carrito = [];
function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim();
    if (valor === "") return;
    carrito.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaCompra();
}
function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }
    mostrarListaCompra();
}
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${carrito[i]}`;
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 3: Agregar al inicio */
let colores = [];
function agregarInicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();
    if (valor === "") return;
    colores.unshift("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaColores();
}
function mostrarListaColores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${colores[i]}`;
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 4: Quitar el primero */
let colores2 = [];
let eliminados = [];

function agregarInicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim();
    if (valor === "") return;
    colores2.unshift("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaColores2();
}

function eliminarPrimerElemento() {
    if (colores2.length > 0) {
        const eliminado = colores2.shift();
        eliminados.push(eliminado);
    }
    mostrarEliminados();
    mostrarListaColores2();
}

function mostrarListaColores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";
    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = colores2[i];
        lista.appendChild(li);
    }
}

function mostrarEliminados() {
    const lista = document.getElementById("eliminado");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados[i];
        lista.appendChild(li);
    }
}

/* 🧠 Ejercicio 5: Combinación de métodos */
let numeros = [];
let eliminados2 = [];

function agregarFinal() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function agregarInicio3() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.unshift("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function eliminarPrimerElemento2() {
    if (numeros.length > 0) {
        const eliminado = numeros.shift();
        eliminados2.push(eliminado);
    }
    mostrarEliminados2();
    mostrarListaNumeros();
}

function eliminarUltimoElemento2() {
    if (numeros.length > 0) {
        const eliminado = numeros.pop();
        eliminados2.push(eliminado);
    }
    mostrarEliminados2();
    mostrarListaNumeros();
}

function mostrarListaNumeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";
    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${numeros[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados2() {
    const lista = document.getElementById("eliminado3");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados2[i];
        lista.appendChild(li);
    }
}

// 🧠 Ejercicio 6: Agregar elementos en orden inverso
let elementos = [];
function agregarInicio2() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim();
    if (valor === "") return;
    elementos.unshift("> " + capitalize(valor));
    input.value = "";
    input.focus();

    mostrarListaInversa();
}

function mostrarListaInversa() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = "";
    for (let i = 0; i < elementos.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${elementos[i]}`;
        lista.appendChild(li);
    }
}

// 🧠 Ejercicio 7: Historial de mensajes
let historial = []
let eliminados4 = []
function agregarFinal2() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim();
    if (valor === "") return;
    historial.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaMensajes();
}

function eliminarUltimoElemento3() {
    if (historial.length > 0) {
        const eliminado = historial.pop();
        eliminados4.push(eliminado);
    }
    mostrarEliminados3();
    mostrarListaMensajes();
}

function mostrarListaMensajes() {
    const lista = document.getElementById("resultado7");
    lista.innerHTML = "";
    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${historial[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados3() {
    const lista = document.getElementById("eliminado4");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados4.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados4[i];
        lista.appendChild(li);
    }
}

// 🧠 Ejercicio 8: Cola de atención
let cola = []
let eliminados5 = []
function agregarFinal3() {
    const input = document.getElementById("lista8");
    const valor = input.value.trim();
    if (valor === "") return;
    cola.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarColaAtencion();
}

function eliminarPrimerElemento3() {
    if (cola.length > 0) {
        const eliminado = cola.shift();
        eliminados5.push(eliminado);
    }
    mostrarEliminados5();
    mostrarColaAtencion();
}

function mostrarColaAtencion() {
    const lista = document.getElementById("resultado8");
    lista.innerHTML = "";
    for (let i = 0; i < cola.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${cola[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados5() {
    const lista = document.getElementById("eliminado5");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados5.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados5[i];
        lista.appendChild(li);
    }
}

// 🧠 Ejercicio 9: Reordenar nombres
let nombres = []
function agregarInicio4() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();
    if (valor === "") return;
    nombres.unshift("> " + capitalize(valor));
    input.value = "";
    input.focus();

    mostrarListaNombres();
}

function agregarFinal4() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();
    if (valor === "") return;
    nombres.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarListaNombres();
}

function eliminarUltimoElemento4() {
    if (nombres.length > 0) {
        nombres.pop();
    }
    mostrarListaNombres();
}

function mostrarListaNombres() {
    const lista = document.getElementById("resultado9");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${nombres[i]}`;
        lista.appendChild(li);
    }
}

// 🧠 Ejercicio 10: Pilas y colas
let pila = [];
let cargasGastadas = [];

function agregarFinal5() {
    const input = document.getElementById("lista10");
    const valor = input.value.trim();
    if (valor === "") return;
    pila.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarCargas();
}

function eliminarUltimoElemento5() {
    if (pila.length > 0) {
        const eliminado = pila.pop();
        cargasGastadas.push(eliminado);
    }
    mostrarCargas();
    mostrarEliminados6();
}

function mostrarCargas() {
    const lista = document.getElementById("resultado10");
    lista.innerHTML = "";
    for (let i = 0; i < pila.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${pila[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados6() {
    const lista = document.getElementById("eliminado6");
    lista.innerHTML = "";
    for (let i = 0; i < cargasGastadas.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = cargasGastadas[i];
        lista.appendChild(li);
    }
}

let colaNueva = [];
let clientesAtendidos = [];

function agregarFinal6() {
    const input = document.getElementById("lista11");
    const valor = input.value.trim();
    if (valor === "") return;
    colaNueva.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarClientes();
}

function eliminarPrimerElemento4() {
    if (colaNueva.length > 0) {
        const eliminado = colaNueva.shift();
        clientesAtendidos.push(eliminado);
    }
    mostrarClientes();
    mostrarEliminados7();
}

function mostrarClientes() {
    const lista = document.getElementById("resultado11");
    lista.innerHTML = "";
    for (let i = 0; i < colaNueva.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${colaNueva[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados7() {
    const lista = document.getElementById("eliminado7");
    lista.innerHTML = "";
    for (let i = 0; i < clientesAtendidos.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = clientesAtendidos[i];
        lista.appendChild(li);
    }
}