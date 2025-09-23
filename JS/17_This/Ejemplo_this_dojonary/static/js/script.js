let contador1 = 3;
            let contador2 = 3;
            function sumarLikes() {
                alert("This page says\nNinja was liked")
                document.getElementById('contador-1').textContent = contador1;
                contador1++;
            }

            function sumarLikes2() {
                alert("This page says\nNinja was liked")
                document.getElementById('contador-2').textContent = contador2;
                contador2++;
            }

            function login(element) {
                element.innerText = "Logout";
            }

            function hide(element) {
                element.remove();
            }