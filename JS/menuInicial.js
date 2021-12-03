window.addEventListener("load", iniciar);
function iniciar() {
    var botonIniciar = document.getElementById("comenzarJuego");
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

    botonIniciar.addEventListener("click", function () {
        if (localStorage.getItem("victoriasJugador1") > 0 || localStorage.getItem("victoriasJugador2") > 0) {
            let respuesta = confirm("Hay datos de juego anteriores. ¿Quieres conservarlos?");
            sessionStorage.setItem("conservarCambios", respuesta);
            if (respuesta) {
                sessionStorage.setItem("fallosJugador1", 0);
                sessionStorage.setItem("fallosJugador2", 0);
                let contador = localStorage.getItem("contador");
                contador--;
                localStorage.setItem("contador", contador);
                botonIniciar.setAttribute("href", "Pantalla de juego.html");
            }
        } else {
            sessionStorage.setItem("conservarCambios", false);
        }
    })
}

function mostrarReglas() {
    var animacionMostrar = document.getElementById("reglas").animate([{ transform: "translateY(-1000px)" }, { transform: "translateY(0px)" }], { duration: 500, easing: "ease-out" });
    var opacidad = 0;
    animacionMasOpacidad();
    function animacionMasOpacidad() {
        if (opacidad < 0.25) {
            opacidad += 0.01;
            setTimeout(function () { animacionMasOpacidad() }, 10);
        }
        document.getElementById("sombraFondoReglas").style.opacity = opacidad;
    }
    document.getElementById("reglas").style.display = "";
    document.getElementById("sombraFondoReglas").style.display = "";
}

function cerrarReglas() {
    var animacionCerrar = document.getElementById("reglas").animate([{ transform: "translateY(0px)" }, { transform: "translateY(1000px)" }], { duration: 500, easing: "ease-in" });
    var opacidad = 0.25;
    animacionMenosOpacidad();
    function animacionMenosOpacidad() {
        if (opacidad > 0) {
            opacidad -= 0.01;
            setTimeout(function () { animacionMenosOpacidad() }, 10);
        }
        document.getElementById("sombraFondoReglas").style.opacity = opacidad;
    }
    animacionCerrar.onfinish = function () {
        document.getElementById("reglas").style.display = "none";
        document.getElementById("sombraFondoReglas").style.display = "none";
    };
}

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