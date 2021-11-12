window.addEventListener("load", iniciar);
function iniciar(){
    var peliculas=["Batman", "Origen", "Star Wars", "Indiana Jones", "Piratas del Caribe", "Interstellar", "Origen", "Seven", "Regreso al Futuro", "Expediente Warren", "Terminator", "Toy Story", "Up", "Paranormal Activity", "El faro", "Spiderman", "Blade Runner", "V de Vendetta", "Monstruos SA", "La Vida De Brian", "Watchmen"];
    var videojuegos=["Super Mario Bros", "The Legend of Zelda", "Metroid", "Uncharted", "God of War", "Tetris", "Profesor Layton", "Sonic The Hedgehog", "Half Life", "Spyro", "Crash Bandicoot", "Pokemon", "Metal Gear Solid", "Kirby", "Donkey Kong", "Pac Man", "Gran Turismo", "Grand Theft Auto", "Red Dead Redemption", "Call Of Duty", "Assassins Creed", "Rayman", "Splinter Cell"];
    var series=["Breaking Bad", "Prison Break", "House", "Doctor Who", "Sherlock", "Better Call Saul", "The Walking Dead", "Bojack Horseman", "The Crown", "La Maldicion De Hill House", "Stranger Things", "luther", "Jessica Jones", "Black Mirror", "Mr Robot", "You", "Los Simpson", "Futurama"];
    var grupos=["Radiohead", "Blur", "Oasis", "Led Zeppelin", "Metallica", "Daft Punk", "Gorillaz", "Guns And Roses", "The Beatles", "Portishead", "Ramones", "Nirvana", "Kiss", "The Rolling Stornes", "DragonForce", "Lynyrd Skynyrd", "Audioslave", "Coldplay", "LCD Soundsystem", "Rammstein", "Queen", "Muse"];
    
    var cajaJugador1=document.getElementById("cajaJugador1");
    var cajaJugador2=document.getElementById("cajaJugador2");
    var nombreJugador1=document.getElementById("nombreJugador1");
    var nombreJugador2=document.getElementById("nombreJugador2");
    var categoria=document.getElementById("categoria");
    var palabra=document.getElementById("palabra");

    cajaJugador1.style.backgroundColor=localStorage.getItem("colorJugador1");
    cajaJugador2.style.backgroundColor=localStorage.getItem("colorJugador2");
    nombreJugador1.innerText=localStorage.getItem("nombreJugador1");
    nombreJugador2.innerText=localStorage.getItem("nombreJugador2");
    categoria.innerText=localStorage.getItem("categoria");

    
}