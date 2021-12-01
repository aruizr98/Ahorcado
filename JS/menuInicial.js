window.addEventListener("load", iniciar);
function iniciar() {
    document.getElementById("muestraOculta").addEventListener("click", mostrarReglas);
    document.getElementById("cerrarReglas").addEventListener("click", cerrarReglas);

    var tabla = document.getElementById("puntuaciones");
    comprobarMejorJugador();
    function comprobarMejorJugador() {
        if ((localStorage.getItem("victoriasJugador1") > localStorage.getItem("victoriasJugador2") || localStorage.getItem("victoriasJugador1") == localStorage.getItem("victoriasJugador2"))) {
            tabla.innerHTML = "<li>" + localStorage.getItem("nombreJugador1") + ": " + localStorage.getItem("victoriasJugador1") + "</li>";
            tabla.innerHTML += "<li>" + localStorage.getItem("nombreJugador2") + ": " + localStorage.getItem("victoriasJugador2") + "</li>";
        } else if (localStorage.getItem("victoriasJugador2") > localStorage.getItem("victoriasJugador1")) {
            tabla.innerHTML = "<li>" + localStorage.getItem("nombreJugador2") + ": " + localStorage.getItem("victoriasJugador2") + "</li>";
            tabla.innerHTML += "<li>" + localStorage.getItem("nombreJugador1") + ": " + localStorage.getItem("victoriasJugador1") + "</li>";
        }
    }

    document.getElementById("contenedor").addEventListener("click", playMusicaFondo);
    function playMusicaFondo() {

        document.getElementById("musicaFondo").volume = 0.25;
        document.getElementById("musicaFondo").play();
    }
}

function mostrarReglas() {
    document.getElementById("reglas").style.display = "";
    document.getElementById("sombraFondoReglas").style.display = "";
}

function cerrarReglas() {
    document.getElementById("reglas").style.display = "none";
    document.getElementById("sombraFondoReglas").style.display = "none";
}

