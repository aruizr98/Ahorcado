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
        document.getElementById("palabra").children[0].innerHTML=comprobarLetra(sessionStorage.getItem("letraPulsada"));
            
        })

    }

    aceptarTeclado.addEventListener("click", function () {
        sessionStorage.setItem("letraPulsada", inputTeclado.value);
        inputTeclado.value="";  
        cambioTurno();
        cronometro1.innerText = "30";
        cronometro2.innerText = "30";
        cambioTurno();
        document.getElementById("palabra").children[0].innerHTML=comprobarLetra(sessionStorage.getItem("letraPulsada"));
        

    })
    resolver.addEventListener("click", function () {
        let solucion = prompt("Introduce la palabra o frase");
        let victoriasJugador1=localStorage.getItem("victoriasJugador1");
        let victoriasJugador2=localStorage.getItem("victoriasJugador2");
        if(solucion==palabra){
            alert("Enhorabuena, has ganado.");
            if(turno==1){
                victoriasJugador1++;
                localStorage.setItem("victoriasJugador1",victoriasJugador1++);
                finDeJuego();
            }else{  
                victoriasJugador2++;
                localStorage.setItem("victoriasJugador2", victoriasJugador2++);
                finDeJuego();
            }
        }else{
            alert("Incorrecto");
        }
    })
    function finDeJuego(){
        let nombre1=localStorage.getItem("nombreJugador1");
        let nombre2=localStorage.getItem("nombreJugador2");
        var ventana=window.open("about:blank", "fin de juego", "width=800 height=600");
        ventana.document.write("<h1>Resúmen de la partida</h1>");
        if(turno==1){
            ventana.document.write("<h2>Ganador: "+nombre1+"</h2>");
        }else{
            ventana.document.write("<h2>Ganador: "+nombre2+"</h2>");
        }
        ventana.document.write("<h2>Victorias jugador 1("+nombre1+"): "+localStorage.getItem("victoriasJugador1")+"</h2>");
        ventana.document.write("<h2>Victorias jugador 2("+nombre2+"): "+localStorage.getItem("victoriasJugador2")+"</h2>");
        
    }
    nuevaPartida.addEventListener("click", function () {
        if (confirm("¿Estás seguro de que quieres empezar una nueva partida? Se borrarán todos los datos.")) {
            localStorage.clear();
            window.open("formularioInicial.html", "formulario inicial");
            window.close();
        }

    })
}