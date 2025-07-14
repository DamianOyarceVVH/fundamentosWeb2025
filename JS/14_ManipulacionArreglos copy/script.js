console.log("Vinculado correctamente...")

/*🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/

const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = [];
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${carrito[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    carrito.push("> " + valor); // Agrega valor al final
    input.value = "";
    input.focus(); // Agrega foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }

    mostrarListaCompra()
}

let colores = [];
function agregarInicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    colores.unshift("> " + valor); // Agrega valor al inicio
    input.value = "";
    input.focus(); // Agrega foco hacia el input

    mostrarListaColores()
}

function mostrarListaColores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${colores[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
}

function agregarInicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    frutas.unshift("> " + valor); // Agrega valor al inicio
    input.value = "";
    input.focus(); // Agrega foco hacia el input

    mostrarListaColores2()
}

function eliminarPrimerElemento() {
    if (colores.length > 0) {
        colores.shift();
    }

    mostrarListaColores2()
}

function mostrarListaColores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < frutas.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${colores[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
}