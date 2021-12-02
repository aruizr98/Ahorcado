window.addEventListener("load", iniciar);

function iniciar() {
    var botonIniciar = document.getElementById("comenzarJuego");
    document.getElementById("muestraOculta").addEventListener("click", mostrarReglas);
    document.getElementById("cerrarReglas").addEventListener("click", cerrarReglas);
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
            if(respuesta){
            sessionStorage.setItem("fallosJugador1", 0);
            sessionStorage.setItem("fallosJugador2", 0);
            let contador=localStorage.getItem("contador");
            contador--;
            localStorage.setItem("contador",contador);
            botonIniciar.setAttribute("href", "Pantalla de juego.html");
            }
        } else {
            sessionStorage.setItem("conservarCambios", false);
        }
    })
}

function mostrarReglas() {
    document.getElementById("reglas").style.display = "";
    document.getElementById("sombraFondoReglas").style.display = "";
}

function cerrarReglas() {
    document.getElementById("reglas").style.display = "none";
    document.getElementById("sombraFondoReglas").style.display = "none";
}