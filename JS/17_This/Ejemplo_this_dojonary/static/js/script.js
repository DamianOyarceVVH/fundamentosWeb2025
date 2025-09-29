let contador1 = 3;
function sumarLikes() {
    contador1++;
    document.getElementById('contador-1').textContent = contador1;
    alert("This page says\nNinja was liked");
    
}

let contador2 = 3
function sumarLikes2() {
    contador2++;
    document.getElementById('contador-2').textContent = contador2;
    alert("This page says\nNinja was liked");
}

function login(element) {
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}