console.log("Vinculado correctamente...")

function imp_num(){
    let num = 1;

    while (num <= 5){
        alert(num);
        num++;
    }
}

function imp_num_r(){
    let num = 10;

    while (num >= 1){
        alert(num);
        num--;
    }
}

function sum_num(){
    let suma = 0
    for(let i = 1; i <= 5; i++){
        suma += i;
    }
    alert("Esta es la suma de los primeros 5 números: " + suma)
}

function imp_mul(){
    for (let i = 2; i <= 10; i += 2) {
        alert(i);
    }    
}