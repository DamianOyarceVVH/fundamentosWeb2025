console.log("Vinculado correctamente...")

// Calcular la suma de los N primeros números naturales. (N es ingresado por el usuario)
function numNat() {
    let n = parseInt(prompt("Ingrese la cantidad de números naturales de la suma"));
    let suma = 0;
    let array = []

    for (let i = 1; i <= n; i++) {
        suma += n;
        array.push(i)
    }
    alert(`Esta es la suma total de los siguientes ${n} números naturales:\n (${array.join(" - ")}) \nEs: ${suma}`)
}

// Escribir los 100 primeros números pares.
function numPares() {
    let array = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            array.push(i)
        }
    }
    alert(`Estos son los primeros 100 números pares:\n(${array.join(" - ")})`)
}

// Escribir los 100 primeros números impares.
function numImpares() {
    let array = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            array.push(i)
        }
    }
    alert(`Estos son los primeros 100 números pares:\n(${array.join(" - ")})`)
}

// Sumar 5 números leídos por teclado
function sum5() {
    let suma = 0;
    let array = []

    for (let i = 1; i <= 5; i++) {
        let n = parseInt(prompt(`Ingrese el ${i} número de la suma`));
        suma += n;
        array.push(n)
    }
    alert(`La suma de los 5 números ingresados:\n(${array.join(" - ")})\nEs: ${suma}`)
}

// Modificar el anterior para que permita sumar N números. El valor de N se debe leer previamente por teclado.
function sumN() {
    let numero = parseInt(prompt("Ingrese la cantidad de números que desea sumar"));
    let suma = 0;
    let array = [];

    for (let i = 1; i <= numero; i++) {
        let n = parseInt(prompt(`Ingrese el ${i} número de la suma`));
        suma += n;
        array.push(n);
    }
    alert(`La suma de los ${numero} números ingresados:\n(${array.join(" - ")})\nEs: ${suma}`);
}

// Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos, restarlos, multiplicarlos y dividirlos según elija quien ingresa.

// Sumar N números pares.

// Sumar los N primeros pares.

// Sumar N números impares.

// Sumar los N primeros impares.

// Sumar los N primeros múltiplos de 3.

// Hacer el diagrama de flujo para calcular el factorial de N (N!=1·2·3·...·N).

// Conversión de grados Celsius a Fahrenheit: Escribe un algoritmo que permita convertir una temperatura en grados Celsius a Fahrenheit.

// Búsqueda de la palabra más larga en una frase: Escribe un algoritmo que permita buscar la palabra más larga en una frase dada.

// Impresión de números primos: Escribe un algoritmo que permita imprimir todos los números primos menores o iguales a un número dado.

// Contador de caracteres: Escribe una función que reciba como parámetro una cadena de texto y que retorne un objeto con la cantidad de veces que aparece cada carácter en la cadena.

// Ingresar N valores e imprimir solo los pares.
// EJ: Ingreso→ 2,20,45,6,9,1.  Imprime: 2, 20, 6
