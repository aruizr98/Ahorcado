// window.addEventListener("load",iniciar);
//     function iniciar(){


function cogerPalabraAleatoria() {
    let palabraAleatoria;

    if (localStorage.getItem("categoria") === "peliculas") {

        palabraAleatoria = peliculas[Math.floor(peliculas.length * Math.random())]

    } else if (localStorage.getItem("categoria") === "videojuegos") {
        palabraAleatoria = videojuegos[Math.floor(videojuegos.length * Math.random())]

    } else if (localStorage.getItem("categoria") === "series") {
        palabraAleatoria = series[Math.floor(series.length * Math.random())]

    } else if (localStorage.getItem("categoria") === "grupos") {
        palabraAleatoria = grupos[Math.floor(grupos.length * Math.random())]
    }
    return palabraAleatoria;

}


let palabra = cogerPalabraAleatoria().toLowerCase();
console.log(palabra);
let letraCorrecta = new Array();
var palabraDividida = palabra.toLowerCase().split("");

function comprobarLetra(letra) {
    let letraCorrecta = false;
    let fallos1=Number(sessionStorage.getItem("fallosJugador1"));
    let fallos2=Number(sessionStorage.getItem("fallosJugador2"));
    for (let index = 0; index < palabraDividida.length; index++) {
        if (letra == palabraDividida[index]) {
            palabraOculta[index] = letra;
            letraCorrecta = true;
        }
    }
    console.log(letraCorrecta);
    if (!letraCorrecta) {
        if (turno == 2) {
            sessionStorage.setItem("fallosJugador1", fallos1 + 1);
            switch (Number(sessionStorage.getItem("fallosJugador1"))) {
                case 1:
                    console.log("cabeza");
                    break;
                case 2:
                    console.log("cuerpo");
                    break;
                case 3:
                    console.log("brazo1");
                    break;
                case 4:
                    console.log("brazo2");
                    break;
                case 5:
                    console.log("pierna1");
                    break;
                case 6:
                    console.log("pierna2");
                    finDeJuego();
                    break
            }
        } else {
            sessionStorage.setItem("fallosJugador2",fallos2 + 1);
            switch (Number(sessionStorage.getItem("fallosJugador2"))) {
                case 1:
                    console.log("cabeza");
                    break;
                case 2:
                    console.log("cuerpo");
                    break;
                case 3:
                    console.log("brazo1");
                    break;
                case 4:
                    console.log("brazo2");
                    break;
                case 5:
                    console.log("pierna1");
                    break;
                case 6:
                    console.log("pierna2");
                    finDeJuego();
                    break
            }
        }

    }
    return palabraOculta.join(" ");
}

let palabraArray = palabra.toLowerCase().split("");

function ocultarPalabra() {

    for (let i = 0; i < palabraArray.length; i++) {
        if (palabraArray[i] != " ") {
            palabraArray[i] = "_";
        } else {
            palabraArray[i] = "/";
        }

    }
    let palabraJunta = palabraArray.join(" ");
    return palabraArray;
}
var palabraOculta = ocultarPalabra();



window.addEventListener("load", iniciar);

function iniciar() {
   
    document.getElementById("palabra").children[0].innerHTML = palabraOculta.join(" ");
}