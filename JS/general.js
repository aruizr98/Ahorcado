//Arrays con palabras para cada categoría
var peliculas = ["Batman", "Origen", "Star Wars", "Indiana Jones", "Piratas del Caribe", "Interstellar", "Seven", "Regreso al Futuro", "Expediente Warren", "Terminator", "Toy Story", "Up", "Paranormal Activity", "El faro", "Spiderman", "Blade Runner", "V de Vendetta", "Monstruos SA", "La Vida De Brian", "Watchmen"];
var videojuegos = ["Super Mario Bros", "The Legend of Zelda", "Metroid", "Uncharted", "God of War", "Tetris", "Profesor Layton", "Sonic The Hedgehog", "Half Life", "Spyro", "Crash Bandicoot", "Pokemon", "Metal Gear Solid", "Kirby", "Donkey Kong", "Pac Man", "Gran Turismo", "Grand Theft Auto", "Red Dead Redemption", "Call Of Duty", "Assassins Creed", "Rayman", "Splinter Cell"];
var series = ["Breaking Bad", "Prison Break", "House", "Doctor Who", "Sherlock", "Better Call Saul", "The Walking Dead", "Bojack Horseman", "The Crown", "La Maldicion De Hill House", "Stranger Things", "luther", "Jessica Jones", "Black Mirror", "Mr Robot", "You", "Los Simpson", "Futurama"];
var grupos = ["Radiohead", "Blur", "Oasis", "Led Zeppelin", "Metallica", "Daft Punk", "Gorillaz", "Guns And Roses", "The Beatles", "Portishead", "Ramones", "Nirvana", "Kiss", "The Rolling Stones", "DragonForce", "Lynyrd Skynyrd", "Audioslave", "Coldplay", "LCD Soundsystem", "Rammstein", "Queen", "Muse"];

/**
 * Si nunca antes se ha pulsado, reproduce la canción desde el principio.
 * SI ya se ha pulsado antes, solo la mutea o no.
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
window.addEventListener("load", iniciar);
function iniciar() {
    document.getElementById("victorias1").innerText = localStorage.getItem("victoriasJugador1");//Mostramos el número de victorias de cada jugador
    document.getElementById("victorias2").innerText = localStorage.getItem("victoriasJugador2");
    document.getElementById("playMusica").addEventListener("click", playMusicaFondo);//Al hacer click en el icono de música, se reproduce la música de fondo

    /**
     * Guardamos en variables la información del DOM
     */
    var cajaJugador1 = document.getElementById("cajaJugador1");
    var cajaJugador2 = document.getElementById("cajaJugador2");
    var nombreJugador1 = document.getElementById("nombreJugador1");
    var nombreJugador2 = document.getElementById("nombreJugador2");
    var categoria = document.getElementById("categoria");

    cajaJugador1.style.backgroundColor = localStorage.getItem("colorJugador1");//Escribe en la caja de cada jugador el color que ha elegido
    cajaJugador2.style.backgroundColor = localStorage.getItem("colorJugador2");
    nombreJugador1.innerText = localStorage.getItem("nombreJugador1");//Escribe El nombre de cada jugador
    nombreJugador2.innerText = localStorage.getItem("nombreJugador2");
    categoria.innerText = localStorage.getItem("categoria");//Escribe la categoría en la que se está jugando
}



function finDeJuego() {
    document.getElementById("ganar").play();//Se reproduce la música de ganar
    /**
     * Guardamos en variables los nombres de cada jugadores para posteriormente mostrarlos.
     */
    let nombre1 = localStorage.getItem("nombreJugador1");
    let nombre2 = localStorage.getItem("nombreJugador2");
    let pantallaResumen = document.getElementById("resumen");//Seleccionamos la caja donde se mostrará el resúmen de la partida
    let victorias1 = document.createElement("h2");
    let victorias2 = document.createElement("h2");
    let victoriasJugador1 = localStorage.getItem("victoriasJugador1");
    let victoriasJugador2 = localStorage.getItem("victoriasJugador2");

    mostrarFinDeJuego();//animación para el fin del juego

    /**
     * Creamos cada elemento que va a tener la caja resúmen, le damos un valor y lo añadimos a la caja.
     */
    let h1 = document.createElement("h1");
    h1.append("Resúmen de la partida");
    pantallaResumen.append(h1);
    let ganador = document.createElement("h2");
    if (turno == 1) {//Si es el turno del jugador 1, entonces mostramos que ha ganado el jugador 1
        ganador.append("Ganador: " + nombre1);
        victoriasJugador1++;//Y le sumamos una victoria
        localStorage.setItem("victoriasJugador1", victoriasJugador1);
    } else {//si no, ha ganado el jugador 2
        ganador.append("Ganador: " + nombre2);
        victoriasJugador2++;
        localStorage.setItem("victoriasJugador2", victoriasJugador2);
    }
    pantallaResumen.append(ganador);
    /**
     * Mostrar las victorias de cada jugador
     */
    victorias1.append("Victorias jugador 1 (" + nombre1 + "): " + localStorage.getItem("victoriasJugador1"));
    pantallaResumen.append(victorias1);
    victorias2.append("Victorias jugador 2 (" + nombre2 + "): " + localStorage.getItem("victoriasJugador2"));
    pantallaResumen.append(victorias2);
    /**
     * Crear y mostrar los botones
     */
    let volverAJugar = document.createElement("button");
    let volverAlFormulario = document.createElement("button");
    volverAJugar.innerText = "Volver a jugar";
    volverAJugar.setAttribute("onclick", "location.reload()");
    volverAJugar.setAttribute("id", "volverJugar");
    volverAJugar.setAttribute("style", "width:35%; float:left; margin-left:20px;");
    pantallaResumen.append(volverAJugar);

    volverAlFormulario.innerText = "Volver al formulario inicial";
    volverAlFormulario.setAttribute("onclick", "window.open('FormularioInicial.html');window.close();");
    volverAlFormulario.setAttribute("id", "volverFormulario");
    volverAlFormulario.setAttribute("style", "width:35%; float:right; margin-right:20px;");
    pantallaResumen.append(volverAlFormulario);
    /**
     * Se resetean los fallos
     */
    sessionStorage.setItem("fallosJugador1", 0);
    sessionStorage.setItem("fallosJugador2", 0);

}

function mostrarFinDeJuego() {
    /**
     * Animación que se produce al finalizar el juego
     */
    let pantallaResumen = document.getElementById("resumen");
    let sombraFondo = document.getElementById("sombraFondoFinDeJuego");
    pantallaResumen.animate([{ transform: "translateY(-1000px)" }, { transform: "translateY(0px)" }], { duration: 500, easing: "ease-out" });
    var opacidad = 0;
    animacionMasOpacidad(opacidad);//La opacidad de la sombra del fondo aumenta gradualmente al aparecer el final de la partida

    pantallaResumen.style.display = "";//Mostramos la caja de resúmen
    sombraFondo.style.display = "";//Y el fondo para que no se pueda pulsar ningún otro botón de la página.
}

function animacionMasOpacidad(opacidad) {//Aumenta la opacidad siempre que ésta sea menor a 0.25
    let sombraFondo = document.getElementById("sombraFondoFinDeJuego");
    if (opacidad < 0.25) {
        opacidad += 0.01;
        setTimeout(function () { animacionMasOpacidad(opacidad) }, 10);
    }
    sombraFondo.style.opacity = opacidad;
}