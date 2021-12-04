window.addEventListener("load", iniciar);
function iniciar() {
    var botonIniciar = document.getElementById("comenzarJuego");//Guarda en una variable el botón de iniciar
    document.getElementById("muestraOculta").addEventListener("click", mostrarReglas);
    document.getElementById("cerrarReglas").addEventListener("click", cerrarReglas);
    document.getElementById("playMusica").addEventListener("click", playMusicaFondo);

    var tabla = document.getElementById("puntuaciones");
    comprobarMejorJugador();

    function comprobarMejorJugador() {
        if (localStorage.getItem("victoriasJugador1") > 0 || localStorage.getItem("victoriasJugador2") > 0) {
            if ((localStorage.getItem("victoriasJugador1") > localStorage.getItem("victoriasJugador2")) || (localStorage.getItem("victoriasJugador1") == localStorage.getItem("victoriasJugador2"))) {
                tabla.innerHTML = "<li>" + localStorage.getItem("nombreJugador1") + ": " + localStorage.getItem("victoriasJugador1") + "</li>";
                tabla.innerHTML += "<li>" + localStorage.getItem("nombreJugador2") + ": " + localStorage.getItem("victoriasJugador2") + "</li>";
            } else if (localStorage.getItem("victoriasJugador2") > localStorage.getItem("victoriasJugador1")) {
                tabla.innerHTML = "<li>" + localStorage.getItem("nombreJugador2") + ": " + localStorage.getItem("victoriasJugador2") + "</li>";
                tabla.innerHTML += "<li>" + localStorage.getItem("nombreJugador1") + ": " + localStorage.getItem("victoriasJugador1") + "</li>";
            }
        }
    }

    botonIniciar.addEventListener("click", function () {//Al hacer click en el botón iniciar
        //Se comprueba si al menos uno de los jugadores tiene una victoria
        if (localStorage.getItem("victoriasJugador1") > 0 || localStorage.getItem("victoriasJugador2") > 0) {
            //Si es así significa que hay datos de juego ypor tanto se pregunta al jugador si quiere conservarlos
            let respuesta = confirm("Hay datos de juego anteriores. ¿Quieres conservarlos?");
            if (respuesta) {//Si quiere conservarlos
                sessionStorage.setItem("fallosJugador1", 0);//Se resetean los fallos
                sessionStorage.setItem("fallosJugador2", 0);
                let contador = localStorage.getItem("contador");
                 /**
                  * Se resta uno al contador para que al cargar de nuevo la pantalla
                  *  de juego no se pase a la siguiente palabra en el modo por dificultad
                  */
                contador--;
                localStorage.setItem("contador", contador);
                /**
                 * Redirigimos al jugador directamente a la pantalla de juego
                 * sin pasar por el formulario
                 */
                botonIniciar.setAttribute("href", "Pantalla de juego.html");
            }else{
                window.open("FormularioInicial.html");
                window.close();
            }
        }else{
            window.open("FormularioInicial.html");
            window.close();
        }
    })
}
function animacionMasOpacidad(opacidad) {//Aumenta la opacidad siempre que ésta sea mayor a 0.25
    if (opacidad < 0.25) {
        opacidad += 0.01;
        setTimeout(function () { animacionMasOpacidad(opacidad) }, 10);
    }
    document.getElementById("sombraFondoReglas").style.opacity = opacidad;
}
function animacionMenosOpacidad(opacidad) {//Reduce la opacidad siempre que ésta sea mayor a 0
    if (opacidad > 0) {
        opacidad -= 0.01;
        setTimeout(function () { animacionMenosOpacidad(opacidad) }, 10);
    }
    document.getElementById("sombraFondoReglas").style.opacity = opacidad;
}
function mostrarReglas() {
    /**
     * Animación que se produce al mostrar las reglas
     */
    document.getElementById("reglas").animate([{ transform: "translateY(-1000px)" }, { transform: "translateY(0px)" }], { duration: 500, easing: "ease-out" });
    var opacidad = 0;
    animacionMasOpacidad(opacidad);//La opacidad de la sombra del fondo aumenta gradualmente al abrir las reglas
    
    document.getElementById("reglas").style.display = "";//Se muestra el div reglas
    document.getElementById("sombraFondoReglas").style.display = "";//Y se muestra la sombra de fondo
}
    /**
     * Animación que se produce al cerrar las reglas
     */
function cerrarReglas() {
    var animacionCerrar = document.getElementById("reglas").animate([{ transform: "translateY(0px)" }, { transform: "translateY(1000px)" }], { duration: 500, easing: "ease-in" });
    var opacidad = 0.25;
    animacionMenosOpacidad(opacidad);//La opacidad de la sombra del fondo disminuye gradualmente al cerrar las reglas
   
    animacionCerrar.onfinish = function () {//Cuando termine la animación desaparecen las reglas y el fondo
        document.getElementById("reglas").style.display = "none";
        document.getElementById("sombraFondoReglas").style.display = "none";
    };
}
/**
 * Si la música no estaba iniciada, se iniciada
 * Si ya estaba iniciada solo se mutea y si vuelves a hacer click
 * se activa el sonido
 */
function playMusicaFondo() {
    if (document.getElementById("musicaFondo").paused == true) {
        document.getElementById("musicaFondo").play();
        document.getElementById("imagenAudio").setAttribute("src", "img/audioON1.png");
    } else {
        if (document.getElementById("musicaFondo").muted == true) {
            document.getElementById("musicaFondo").muted = false;
            document.getElementById("imagenAudio").setAttribute("src", "img/audioON1.png");
        } else {
            document.getElementById("musicaFondo").muted = true;
            document.getElementById("imagenAudio").setAttribute("src", "img/audioOFF1.png");
        }
    }
}