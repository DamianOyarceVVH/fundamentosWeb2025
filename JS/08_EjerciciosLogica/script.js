console.log("Vinculado correctamente...")

// ¿Par o Impar?
function parImpar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 == 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

// Calculadora de índice de masa corporal (IMC)
function imc() {
    let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("Bajo peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal.");
    } else {
        alert("Sobrepeso.");
    }
}

// Calculadora de notas
function calcularNotas() {
    let nota1 = parseInt(prompt("Ingrese la primera nota:"))
    let nota2 = parseInt(prompt("Ingrese la segunda nota:"))
    let nota3 = parseInt(prompt("Ingrese la tercera nota:"))
    let promedio = (nota1 + nota2 + nota3) / 3
    if (promedio < 4.0) {
        alert("Reprobado");
    } else {
        alert("Aprobado");
    }
}