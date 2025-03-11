console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora = 2025; // Año actual
    let fecha_nac = 2007; // Año de nacimiento
    let edad = ahora - fecha_nac; // Cálculo
    alert("La edad actual es: " + edad);
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
    let var1 = 42; // Valor
    let var2 = var1; // Asignación de var1 a var2
    alert("El valor de var2 es: " + var2);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    let num1 = 162;
    let num2 = 88;
    let num3 = 66;
    let suma = num1 + num2 + num3; // Suma
    let resta = num3 - num1; // Resta
    let multiplicacion = num2 * num3; // Multiplicación
    let division = num1 / 120; // División
    alert("Resultados:\nSuma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
function manipularCadenas() {
    let direccion = "Av. Observatorio";
    let n_casa = 10962;
    let mensaje = "Dirección: " + direccion + ", Número de casa: " + n_casa;
    let longitud = mensaje.length;
    let antepenultimo = mensaje.charAt(longitud - 3);
    alert("Mensaje: " + mensaje + "\nLongitud: " + longitud + "\nAntepenúltimo carácter: " + antepenultimo);
}