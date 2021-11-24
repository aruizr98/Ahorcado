window.addEventListener("load", iniciar);

function iniciar() {
    var teclado = document.getElementById("teclado");
    var teclas = teclado.getElementsByTagName("button");
    var aceptarTeclado = document.getElementById("aceptarTeclado");
    var inputTeclado = document.getElementById("inputTeclado");
    var resolver = document.getElementById("resolver");
    var nuevaPartida = document.getElementById("nuevaPartida");
    var cronometro1 = document.getElementById("cronometro1");
    var cronometro2 = document.getElementById("cronometro2");

    for (let index = 0; index < teclas.length; index++) {
        teclas[index].addEventListener("click", function (e) {
            sessionStorage.setItem("letraPulsada", e.target.value);
            cambioTurno();
            cronometro1.innerText = "30";
            cronometro2.innerText = "30";
        document.getElementById("palabra").children[0].innerHTML=comprobarLetra();
            
        })

    }

    aceptarTeclado.addEventListener("click", function () {
        sessionStorage.setItem("letraPulsada", inputTeclado.value);
        inputTeclado.value="";
        cambioTurno();
        cronometro1.innerText = "30";
        cronometro2.innerText = "30";
        cambioTurno();
        document.getElementById("palabra").children[0].innerHTML=comprobarLetra();
        

    })
    resolver.addEventListener("click", function () {
        let solucion = prompt("Introduce la palabra o frase");
    })
    nuevaPartida.addEventListener("click", function () {
        if (confirm("¿Estás seguro de que quieres empezar una nueva partida? Se borrarán todos los datos.")) {
            localStorage.clear();
            window.open("formularioInicial.html", "formulario inicial");
            window.close();
        }

    })
}