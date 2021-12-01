var peliculas = ["Batman", "Origen", "Star Wars", "Indiana Jones", "Piratas del Caribe", "Interstellar", "Seven", "Regreso al Futuro", "Expediente Warren", "Terminator", "Toy Story", "Up", "Paranormal Activity", "El faro", "Spiderman", "Blade Runner", "V de Vendetta", "Monstruos SA", "La Vida De Brian", "Watchmen"];
var videojuegos = ["Super Mario Bros", "The Legend of Zelda", "Metroid", "Uncharted", "God of War", "Tetris", "Profesor Layton", "Sonic The Hedgehog", "Half Life", "Spyro", "Crash Bandicoot", "Pokemon", "Metal Gear Solid", "Kirby", "Donkey Kong", "Pac Man", "Gran Turismo", "Grand Theft Auto", "Red Dead Redemption", "Call Of Duty", "Assassins Creed", "Rayman", "Splinter Cell"];
var series = ["Breaking Bad", "Prison Break", "House", "Doctor Who", "Sherlock", "Better Call Saul", "The Walking Dead", "Bojack Horseman", "The Crown", "La Maldicion De Hill House", "Stranger Things", "luther", "Jessica Jones", "Black Mirror", "Mr Robot", "You", "Los Simpson", "Futurama"];
var grupos = ["Radiohead", "Blur", "Oasis", "Led Zeppelin", "Metallica", "Daft Punk", "Gorillaz", "Guns And Roses", "The Beatles", "Portishead", "Ramones", "Nirvana", "Kiss", "The Rolling Stornes", "DragonForce", "Lynyrd Skynyrd", "Audioslave", "Coldplay", "LCD Soundsystem", "Rammstein", "Queen", "Muse"];
var pause=false;

window.addEventListener("load", iniciar);

function iniciar() {
    console.log(sessionStorage.getItem("contador"));

    var cajaJugador1 = document.getElementById("cajaJugador1");
    var cajaJugador2 = document.getElementById("cajaJugador2");
    var nombreJugador1 = document.getElementById("nombreJugador1");
    var nombreJugador2 = document.getElementById("nombreJugador2");
    var categoria = document.getElementById("categoria");
   // var palabra = document.getElementById("palabra");

    cajaJugador1.style.backgroundColor = localStorage.getItem("colorJugador1");
    cajaJugador2.style.backgroundColor = localStorage.getItem("colorJugador2");
    nombreJugador1.innerText = localStorage.getItem("nombreJugador1");
    nombreJugador2.innerText = localStorage.getItem("nombreJugador2");
    categoria.innerText = localStorage.getItem("categoria");




}

function finDeJuego() {
    let nombre1 = localStorage.getItem("nombreJugador1");
    let nombre2 = localStorage.getItem("nombreJugador2");
    var pantallaResumen = document.getElementById("resumen");
    var sombraFondo = document.getElementById("sombraFondoFinDeJuego");
    pantallaResumen.style.display = "";
    sombraFondo.style.display = "";

    let h1 = document.createElement("h1");
    h1.append("Resúmen de la partida");
    pantallaResumen.append(h1);
    let ganador = document.createElement("h2");
    if (turno == 1) {
        ganador.append("Ganador: " + nombre1);
        pantallaResumen.append(ganador);
    } else {
        ganador.append("Ganador: " + nombre2);
        pantallaResumen.append(ganador);
    }
    let victorias1 = document.createElement("h2");
    let victorias2 = document.createElement("h2");
    let victoriasJugador1 = localStorage.getItem("victoriasJugador1");
    let victoriasJugador2 = localStorage.getItem("victoriasJugador2");

    if (turno == 1) {
        victoriasJugador1++;
        localStorage.setItem("victoriasJugador1", victoriasJugador1);
        
    } else {
        victoriasJugador2++;
        localStorage.setItem("victoriasJugador2", victoriasJugador2);
       
    }

    victorias1.append("Victorias jugador 1 (" + nombre1 + "): " + localStorage.getItem("victoriasJugador1"));
    pantallaResumen.append(victorias1);
    victorias2.append("Victorias jugador 2 (" + nombre2 + "): " + localStorage.getItem("victoriasJugador2"));
    pantallaResumen.append(victorias2);
    let volverAJugar = document.createElement("button");
    let volverAlFormulario = document.createElement("button");
    volverAJugar.innerText = "Volver a jugar";
    volverAJugar.setAttribute("onclick", "location.reload()");
    volverAJugar.setAttribute("style", "width:35%;float:left; margin-left:20px; background-color:black; color:white; cursor:pointer;");
    pantallaResumen.append(volverAJugar);

    volverAlFormulario.innerText = "Volver al formulario inicial";
    volverAlFormulario.setAttribute("onclick", "location.href='FormularioInicial.html'");
    volverAlFormulario.setAttribute("style", "width:35%;float:right; margin-right:20px; background-color:black; color:white; cursor:pointer;");
    pantallaResumen.append(volverAlFormulario);
    sessionStorage.setItem("fallosJugador1", 0);
    sessionStorage.setItem("fallosJugador2", 0);
    pause=true;

}