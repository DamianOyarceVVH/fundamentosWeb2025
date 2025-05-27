console.log("Vinculado correctamente...")

// Ejercicio 1: Registro de Participantes
function registro() {
    let participantes = [];
    let nombre = "";

    while (true) {
        nombre = prompt("Ingrese un nombre (escriba 'salir' para continuar)");
        
        if (nombre === "" || nombre.toLowerCase() === "salir") {
            break;
        }
        participantes.push(nombre);
        }
        alert(`Total de participantes: ${participantes.length} \nLista: ${participantes.join(", ")}`);
        if (participantes.length > 5) {
            alert("Felicidades, hay más de 5 participantes :D")
        }
}

// Ejercicio 2: Simulador de Caja Registradora
function simulador() {
    let productos = ['manzana', 'pan', 'leche']
    let mensaje = ""

    for(i = 1; i <= 5; i++){
        if (productos.length > 0) {
            let vendido = productos.pop();
            mensaje += `Producto vendido: ${vendido}\n`;
        } else {
            mensaje += "Sin stock\n";
        }
    alert(mensaje)
    }
}