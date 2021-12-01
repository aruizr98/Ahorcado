window.addEventListener("load", iniciar);

function iniciar() {
    var teclado = document.getElementById("teclado");
    var teclas = teclado.getElementsByTagName("button");
    var teclasArray = new Array();
    for (let index = 0; index < teclas.length; index++) {
        teclasArray[index] = teclas[index];
    }
    var teclasArray2 = teclasArray.slice(1, teclasArray.length);
    console.log(teclasArray2);
    var aceptarTeclado = document.getElementById("aceptarTeclado");
    var inputTeclado = document.getElementById("inputTeclado");
    var resolver = document.getElementById("resolver");
    var nuevaPartida = document.getElementById("nuevaPartida");
    var cronometro1 = document.getElementById("cronometro1");
    var cronometro2 = document.getElementById("cronometro2");
    var letrasPulsadas = new Array();
    var correcto = true;
    for (let index = 0; index < teclasArray2.length; index++) {

        teclasArray2[index].addEventListener("click", function (e) {
            correcto = true;
            sessionStorage.setItem("letraPulsada", e.target.value);
            for (let index = 0; index < letrasPulsadas.length; index++) {
                if (letrasPulsadas[index] == sessionStorage.getItem("letraPulsada")) {
                    correcto = false;
                }
            }
            if (correcto) {
                letrasPulsadas.push(e.target.value);
                console.log(letrasPulsadas);
                cambioTurno();
                cronometro1.innerText = "30";
                cronometro2.innerText = "30";
                document.getElementById("palabra").children[0].innerHTML = comprobarLetra(sessionStorage.getItem("letraPulsada"));
                teclasArray2[index].style.opacity = "0.2";
                teclasArray2[index].classList = "";
                teclasArray2[index].style.cursor = "unset";
            }
        })

    }
    aceptarTeclado.addEventListener("click", function () {
        correcto = true;
        sessionStorage.setItem("letraPulsada", inputTeclado.value);
        if (sessionStorage.getItem("letraPulsada") != "") {
            for (let index = 0; index < letrasPulsadas.length; index++) {
                if (letrasPulsadas[index] == sessionStorage.getItem("letraPulsada")) {
                    correcto = false;
                    inputTeclado.value = "";
                }
            }

            if (correcto) {

                letrasPulsadas.push(inputTeclado.value);

                console.log(letrasPulsadas);
                inputTeclado.value = "";


                cronometro1.innerText = "30";
                cronometro2.innerText = "30";

                document.getElementById("palabra").children[0].innerHTML = comprobarLetra(sessionStorage.getItem("letraPulsada"));
                cambioTurno();
            }

        }
    })
    resolver.addEventListener("click", function () {
        let solucion = prompt("Introduce la palabra o frase");
        // let victoriasJugador1 = localStorage.getItem("victoriasJugador1");
        // let victoriasJugador2 = localStorage.getItem("victoriasJugador2");
        if (solucion == palabra) {

            if (turno == 1) {
                alert("Enhorabuena, "+localStorage.getItem("nombreJugador1")+", has ganado");
                // victoriasJugador1++;
                // localStorage.setItem("victoriasJugador1", victoriasJugador1++);
                finDeJuego();
            } else {
                alert("Enhorabuena, "+localStorage.getItem("nombreJugador2")+", has ganado");
                // victoriasJugador2++;
                // localStorage.setItem("victoriasJugador2", victoriasJugador2++);
                finDeJuego();
            }
        } else {
            alert("Incorrecto");
            cambioTurno();
        }
    })


    nuevaPartida.addEventListener("click", function () {
        if (confirm("¿Estás seguro de que quieres empezar una nueva partida? Se borrarán todos los datos.")) {
            localStorage.clear();
            // window.open("formularioInicial.html", "formulario inicial");
            // window.close();
            location.href="FormularioInicial.html";
        }
        
    })
}