let numero = 17; // Numérica
let decimal = 2.5; // Decimal (num float)
let texto = "Hola"; // Texto
let booleano = true; // Booleano
let array = [1, "Hola", 25]; // Lista de elementos
let matriz = [[1, 2], [3, 4]]; // Lista de listas
let objeto = { // Conjunto de propiedades
    nombre: "Damián",
    edad: 17
};
let indefinida; // Variable indefinida
let nulo = null; // Variable nula
let sumar = (a, b) => a + b; // Función para sumar

// Funciones para mostrar las variables

function alertaEntero() {
    alert('42');
}

function alertaDecimal() {
    alert('696.9');
}

function alertaTexto() {
    alert('Este es un texto de prueba, parangiricutirimicuaro');
}

function alertaBooleano() {
    alert(booleano);
}

function alertaArray() {
    alert("Lista de elementos: \n" + array);
}

function alertaMatriz() {
    alert("Lista de listas: \n" + matriz);
}

function alertaObjeto() {
    alert(`Nombre: ${objeto.nombre}, Edad: ${objeto.edad}`);
}

function alertaIndefinida() {
    alert(indefinida);
}

function alertaNulo() {
    alert(nulo);
};

function alertaOperacion() {
    alert("a + b = " + sumar(28, 21));
}