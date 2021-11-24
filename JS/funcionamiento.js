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


function comprobarLetra() {
    var palabraDividida = palabra.toLowerCase().split("");
 

    for (let i = 0; i < palabraDividida.length; i++) {
        if (sessionStorage.getItem("letraPulsada") == palabraDividida[i].toLowerCase()) {
            palabraDividida[i] = sessionStorage.getItem("letraPulsada")+" ";
            console.log(palabraDividida[i]);
        } else {
            palabraDividida[i] = "_ ";
        }
    }

    return palabraDividida.join("");
   
}
let palabraArray = palabra.toLowerCase().split("") ;
function palabraOculta(palabraArray) {

    for (let i = 0; i < palabraArray.length; i++) {
        if (palabraArray[i] != " ") {
            palabraArray[i] = "_";
        }
        else {
            palabraArray[i] = "/";
        }

    }
    var palabraJunta = palabraArray.join(" ");
    return palabraJunta;

}

function insertarLetra(letra) {
    for (let i = 0; i < palabraArray.length; i++) {
        if (palabraArray[i] == letra) {
            palabraArray[i] = letra;
        }
        else if (palabraArray[i] == " ") {
            palabraArray[i] = " ";
        }

    }
    // console.log(palabraArray.join(""))
    var palabraString = palabraArray.join();
    document.getElementById("palabra").children[0].innerHTML = palabraString;
    1
    // return palabraString;

}



window.addEventListener("load", iniciar);
function iniciar() {
    document.getElementById("palabra").children[0].innerHTML = palabraOculta(palabraArray);


}




