console.log("Vinculado correctamente...")

// Tabla de multiplicar personalizada
function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(`Tabla de multiplicar del ${numero}:\n${resultado}`);
}

// Sumar N números ingresados por el usuario
function sumarNumeros() {
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`));
        suma += numero;
    }
    alert(`La suma total de los ${n} números es: ${suma}`);
}

// Mostrar los números pares entre dos valores dados
function numerosPares() {
    let ini = parseInt(prompt("Ingrese un número inicial:"));
    let end = parseInt(prompt("Ingrese un número final:"));
    let resultado = [];

    for (let i = ini; i <= end; i++) {
        if (i % 2 === 0) {
            resultado.push(i);
        }
    }

    alert(`Los números pares entre ${ini} y ${end} son:\n${resultado.join(" - ")}`);
}