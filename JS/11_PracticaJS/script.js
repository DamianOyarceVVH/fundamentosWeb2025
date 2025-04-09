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
function opciones() {
    let n1 = parseInt(prompt("Ingrese el primer número de la operación"));
    let n2 = parseInt(prompt("Ingrese el segundo número de la operación"));
    let operacion = prompt("¿Qué operación desea realizar?\n+ - * /");

    if (operacion === "+") {
        alert(`La suma de ambos números (${n1} + ${n2})\nEs: ${n1 + n2}`);
    } else if (operacion === "-") {
        alert(`La resta de ambos números (${n1} - ${n2})\nEs: ${n1 - n2}`);
    } else if (operacion === "*") {
        alert(`La multiplicación de ambos números (${n1} * ${n2})\nEs: ${n1 * n2}`);
    } else if (operacion === "/") {
        if (n2 !== 0) {
            alert(`La división de ambos números (${n1} / ${n2})\nEs: ${n1 / n2}`);
        } else {
            alert("No se puede dividir entre 0");
        }
    } else {
        alert("No se ha elegido una operación válida");
    }
}
// Sumar N números pares.
function sumarPares() { 
    let n = parseFloat(prompt("¿Cuántos números deseas sumar?")); 
    let suma = 0; 
    let array = [] 

    for (let i = 1; i <= n; i++) { 
        let numero = parseInt(prompt(`Ingresa el número ${i}:`)); 
        
        while (numero % 2 !== 0) { 
            numero = parseInt(prompt(`El número ingresado es impar. Por favor, ingresa un número par para el número ${i}:`)); 
        }
        suma += numero; 
        array.push(numero);
    }
    alert(`La suma total de los siguientes ${n} números pares:\n (${array.join(" - ")})\n Es: ${suma}`); 
} 

// Sumar los N primeros pares.
function nPares() { 
    let n = parseFloat(prompt("¿Cuántos primeros pares desea sumar?")); 
    let par = 2
    let suma = 0; 
    let array = [] 

    for (let i = 1; i <= n; i++) {
        suma += par;
        array.push(par);
        par += 2
    }
    alert(`La suma de los primeros ${n} números pares:\n(${array.join(" - ")})\nEs: ${suma}`)
} 

// Sumar N números impares.
function sumarImpares() { 
    let n = parseFloat(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0; 
    let array = [] 

    for (let i = 1; i <= n; i++) { 
        let numero = parseInt(prompt(`Ingresa el número ${i}:`)); 
        
        while (numero % 2 === 0) { 
            numero = parseInt(prompt(`El número ingresado es par. Por favor, ingresa un número impar para el número ${i}:`)); 
        }
        suma += numero; 
        array.push(numero);
    }
    alert(`La suma total de los siguientes ${n} números impares:\n (${array.join(" - ")})\n Es: ${suma}`); 
} 

// Sumar los N primeros impares.
function nImpares() { 
    let n = parseFloat(prompt("¿Cuántos primeros impares desea sumar?")); 
    let impar = 1
    let suma = 0; 
    let array = [] 

    for (let i = 1; i <= n; i++) {
        suma += impar;
        array.push(impar);
        impar += 2
    }
    alert(`La suma de los primeros ${n} números impares:\n(${array.join(" - ")})\nEs: ${suma}`)
} 

// Sumar los N primeros múltiplos de 3.

// Hacer el diagrama de flujo para calcular el factorial de N (N!=1·2·3·...·N).

// Conversión de grados Celsius a Fahrenheit: Escribe un algoritmo que permita convertir una temperatura en grados Celsius a Fahrenheit.

// Búsqueda de la palabra más larga en una frase: Escribe un algoritmo que permita buscar la palabra más larga en una frase dada.

// Impresión de números primos: Escribe un algoritmo que permita imprimir todos los números primos menores o iguales a un número dado.

// Contador de caracteres: Escribe una función que reciba como parámetro una cadena de texto y que retorne un objeto con la cantidad de veces que aparece cada carácter en la cadena.

// Ingresar N valores e imprimir solo los pares.
// EJ: Ingreso→ 2,20,45,6,9,1.  Imprime: 2, 20, 6
