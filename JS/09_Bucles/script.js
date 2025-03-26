console.log("Vinculado correctamente...")

function imp_num() {
    let num = 1;
    array = []
    while (num <= 5){
        array.push(num);
        num++;
    }
    alert(`Los números son:\n ${array.join(" - ")}`)
}

function imp_num_r() {
    let num = 100;
    let array = [];
    while (num >= 1) {
        array.push(num);
        num--
    }
    alert(`Los números son:\n ${array.join(" - ")}`)
}

function sum_num() {
    let suma = 0
    array = []
    for(let i = 1; i <= 6; i++) {
        array.push(suma);
        suma += i;
    }
    alert(`Esta es la suma de los primeros 5 números:\n ${array.join(" - ")}`)
}

function imp_mul() {
    let array = [];
    for (let i = 2; i <= 10; i += 2) {
        array.push(i);
    }
    alert(`Estos son los múltiplos de 2 desde el 1 al 10:\n ${array.join(" - ")}`)
}

function bucleFor() {
    let array = [];
    for(i = 10; i >= 1; i--) {
        array.push(i);
    }
    alert(`Los números son: ${array.join(" - ")}`)
}