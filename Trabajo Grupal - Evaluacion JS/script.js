// Función para sumar n números impares, que no acepte los números impares y retorne al último número impar de la suma
function sumarImpares() { 
    let n = parseFloat(prompt("¿Cuántos números deseas sumar?")); //Crea la variable "n", te preguntara cuántos números sumar con un prompt que convierte una cadena de texto a enteros 
    let suma = 0; // Variable que almacena la suma
    let array = [] // Variable que crea la lista, almacenará los números ingresados

    for (let i = 1; i <= n; i++) { // El contador del bucle (i) empieza en 1, terminando el bucle cuando se llegue a la cantidad ingresada de números a sumar (n)
        let numero = parseInt(prompt(`Ingresa el número ${i}:`)); // Se ingresa los números a sumar, mostrando en que número de la suma están (i = número de bucle)
        
        while (numero % 2 === 0) { // Se crea un bucle que detecta si el resto de la división es 0 (detectando impares), retornando el bucle sin dejarlo avanzar SI NO se ingresa un número impar
            numero = parseInt(prompt(`El número ingresado es par. Por favor, ingresa un número impar para el número ${i}:`)); // Entrada de texto que indica que vuelva a ingresar un número IMPAR para continuar con la suma
        }
        suma += numero; // Los números impares se almacenan y suman en la variable "suma"
        array.push(numero);
    }
    alert(`La suma total de los siguientes ${n} números impares:\n (${array.join(" - ")})\n Es: ${suma}`); // Mensaje que muestra los la cantidad de números de la suma, los números de la suma y su total
} 
