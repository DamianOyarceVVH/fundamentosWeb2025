console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora = parseInt(prompt("Ingresa el año actual: ")); // Año actual
    let fecha_nac = parseInt(prompt("Ingresa el año de nacimiento: ")); // Año de nacimiento
    alert("Tu edad es: " + (ahora - fecha_nac)); // Resta de años
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
    let var1 = prompt("Ingresa un valor: "); // Valor
    let var2 = var1; // Asignación de var1 a var2
    alert("El valor de var2 es: " + var2);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    let num1 = parseInt(prompt("Ingresa el 1er valor: "));
    let num2 = parseInt(prompt("Ingresa el 2do valor: "));
    let num3 = parseInt(prompt("Ingresa el 3er valor: "));
    let suma = num1 + num2 + num3; // Suma
    let resta = num3 - num1; // Resta
    let multiplicacion = num2 * num3; // Multiplicación
    let division = num1 / 120; // División
    alert("Resultados:\nSuma (" + num1 + " + " + num2 + " + " + num3 + "): " + suma + "\nResta (" + num3 + " - " + num1 + "): " + resta + "\nMultiplicación (" + num2 + " * " + num3 + "): " + multiplicacion + "\nDivisión (" + num1 + " / " + "120" + "): " + division);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
function manipularCadenas() {
    let direccion = prompt("Ingresa tu dirección: ");
    let n_casa = parseInt(prompt("Ingresa el número de casa: "));
    let mensaje = direccion + " " + n_casa;
    let longitud = mensaje.length;
    let antepenultimo = mensaje.charAt(longitud - 3);
    alert("Dirección: " + mensaje + "\nCantidad de caracteres: " + longitud + "\nAntepenúltimo carácter: " + antepenultimo);
}