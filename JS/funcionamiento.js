// window.addEventListener("load",iniciar);
//     function iniciar(){


function cogerPalabraAleatoria() {
    let palabraAleatoria;

    if (localStorage.getItem("categoria") === "peliculas") {

        palabraAleatoria = peliculas[Math.floor(peliculas.length * Math.random())]

    }

    else if (localStorage.getItem("categoria") === "videojuegos") {
        palabraAleatoria = videojuegos[Math.floor(videojuegos.length * Math.random())]

    }
    else if (localStorage.getItem("categoria") === "series") {
        palabraAleatoria = series[Math.floor(series.length * Math.random())]

    }
    else if (localStorage.getItem("categoria") === "grupos") {
        palabraAleatoria = grupos[Math.floor(grupos.length * Math.random())]
    }
    return palabraAleatoria;

}


let palabra = cogerPalabraAleatoria();
console.log(palabra);
let letraCorrecta = new Array();
var palabraDividida = palabra.toLowerCase().split("");

function comprobarLetra(letra) {
    for (let index = 0; index < palabraDividida.length; index++) {
        if (letra == palabraDividida[index]) {
            palabraOculta[index] = letra;
        }
    }
    return palabraOculta.join(" ");
}

let palabraArray = palabra.toLowerCase().split("");
function ocultarPalabra() {

    for (let i = 0; i < palabraArray.length; i++) {
        if (palabraArray[i] != " ") {
            palabraArray[i] = "_";
        }
        else {
            palabraArray[i] = "/";
        }
      
    }
    let palabraJunta = palabraArray.join(" ");
    return palabraArray;
}
var palabraOculta=ocultarPalabra(); 



window.addEventListener("load", iniciar);
function iniciar() {
    
    document.getElementById("palabra").children[0].innerHTML = palabraOculta.join(" ");
}




