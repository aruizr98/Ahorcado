window.addEventListener("load", iniciar);

function iniciar() {
    document.getElementById("playMusica").addEventListener("click", playMusicaFondo);
    //Crear variables para acceder al DOM.
    var nombreJugador1 = document.getElementById("nombreJugador1");
    var nombreJugador2 = document.getElementById("nombreJugador2");
    var colorJugador1 = document.getElementById("colorJugador1");
    var colorJugador2 = document.getElementById("colorJugador2");
    var formulario = document.getElementById("formulario");
    var categoria = document.getElementById("categoria");
    var modo = document.getElementsByName("modo");

    formulario.addEventListener("submit", function () {//Al hacer click en enviar, se recogen los datos.
        localStorage.setItem("contador", 0);//El contador se resetea a 0. Este se utilizará en el modo por dificultad para que al recrgar la página se pase a la siguiente palabra.
        localStorage.setItem("nombreJugador1", nombreJugador1.value);
        localStorage.setItem("nombreJugador2", nombreJugador2.value);
        localStorage.setItem("colorJugador1", colorJugador1.value);
        localStorage.setItem("colorJugador2", colorJugador2.value);
        localStorage.setItem("categoria", categoria.value);
        localStorage.setItem("victoriasJugador1", 0);
        localStorage.setItem("victoriasJugador2", 0);
        sessionStorage.setItem("fallosJugador1", 0);
        sessionStorage.setItem("fallosJugador2", 0);
        if (modo[0].checked) {
            localStorage.setItem("modo", modo[0].value);
        } else {
            localStorage.setItem("modo", modo[1].value);
        }
        window.open("pantalla de juego.html", "Ahorcado");
        window.close();

    })
}

function playMusicaFondo() {
    let musicaFondo = document.getElementById("musicaFondo");
    let imagenAudio = document.getElementById("imagenAudio");
    if (musicaFondo.paused == true) {
        musicaFondo.play();
        imagenAudio.setAttribute("src", "img/audioON1.png");
    } else {
        if (musicaFondo.muted == true) {
            musicaFondo.muted = false;
            imagenAudio.setAttribute("src", "img/audioON1.png");
        } else {
            musicaFondo.muted = true;
            imagenAudio.setAttribute("src", "img/audioOFF1.png");
        }
    }
}