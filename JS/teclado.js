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
            cambioTurno();
        }
    })
    function finDeJuego(){
        let nombre1=localStorage.getItem("nombreJugador1");
        let nombre2=localStorage.getItem("nombreJugador2");
        var pantallaResumen=document.getElementById("resumen");
        pantallaResumen.style.display="";
        let h1=document.createElement("h1");
        h1.append("Resúmen de la partida");
        pantallaResumen.append(h1);
        let ganador=document.createElement("h2");
        
        if(turno==1){
            ganador.append("Ganador: "+nombre1);
            pantallaResumen.append(ganador);
        }else{
            ganador.append("Ganador: "+nombre2);
            pantallaResumen.append(ganador);
        }
        let victorias1=document.createElement("h2");
        let victorias2=document.createElement("h2");
        victorias1.append("Victorias jugador 1 ("+nombre1+"): "+localStorage.getItem("victoriasJugador1"));
        pantallaResumen.append(victorias1);
        victorias2.append("Victorias jugador 2 ("+nombre2+"): "+localStorage.getItem("victoriasJugador2"));
        pantallaResumen.append(victorias2);
        let volverAJugar=document.createElement("button");
        let volverAlFormulario=document.createElement("button");
        volverAJugar.innerText="Volver a jugar";
        volverAJugar.setAttribute("onclick", "location.reload()");
        volverAJugar.setAttribute("style","float:left; margin-left:20px; background-color:black; color:white; cursor:pointer;");
        pantallaResumen.append(volverAJugar);

        volverAlFormulario.innerText="Volver al formulario inicial";
        volverAlFormulario.setAttribute("onclick", "location.href='FormularioInicial.html'");
        volverAlFormulario.setAttribute("style","float:right; margin-right:20px; background-color:black; color:white; cursor:pointer;");
        pantallaResumen.append(volverAlFormulario);
       
    }
    nuevaPartida.addEventListener("click", function () {
        if (confirm("¿Estás seguro de que quieres empezar una nueva partida? Se borrarán todos los datos.")) {
            localStorage.clear();
            window.open("formularioInicial.html", "formulario inicial");
            window.close();
        }

    })
}