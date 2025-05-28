console.log("Vinculado correctamente...")

// Ejercicio 3: Calculadora de Promedios
function promedios() {
    let notas = [];
    let suma = 0;
    
    for (i = 1; i <= 5; i++) {
        let nota = parseFloat(prompt(`Ingrese la ${i}º nota:`));
        notas.push(nota);
        suma += nota;
    }
    let promedio = suma / 5;
    alert(`El promedio de sus 5 notas\n(${notas.join(" - ")})\nEs ${promedio}`)

    if (promedio >= 4.0) {
        alert("Usted esta A P R O B A D O")
    } else {
        alert("Usted esta R E P R O B A D O")
    }
}

// Ejercicio 4: Separar Números Pares e Impares
function separador() {
    let pares = [];
    let impares = [];
    
    for (i = 1; i <= 6; i++) {
        let n = parseFloat(prompt(`Ingrese el ${i}º número:`));
        if (n % 2 === 0) {
            pares.push(n);
        } else {
            impares.push(n);
        }
    }
    alert(`Números ingresados:\n· Pares: ${pares.join(" - ")}\n· Impares: ${impares.join(" - ")}`);
}