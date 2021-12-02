

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
function ordenarLongitudPalabras(array) {
    let ordenado = true;
    do {
        ordenado = true;
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index].length < array[index + 1].length) {
                let aux = new Array();
                aux[index] = array[index];
                array[index] = array[index + 1];
                array[index + 1] = aux[index];
                ordenado = false;
            }
        }
    } while (!ordenado);
    console.log(array);
}


if (localStorage.getItem("modo") == "aleatorio") {
    var palabra = cogerPalabraAleatoria().toLowerCase();
} else {
    if (localStorage.getItem("categoria") == "peliculas") {
        ordenarLongitudPalabras(peliculas);
        if (localStorage.getItem("contador") < peliculas.length) {
            var palabra = peliculas[localStorage.getItem("contador")].toLowerCase();
        }else{
            localStorage.setItem("categoria", "videojuegos");
            sessionStorage.setItem("contador", 0);
            location.reload();
        }
    } else if (localStorage.getItem("categoria") == "videojuegos") {
        ordenarLongitudPalabras(videojuegos);
        if (localStorage.getItem("contador") < videojuegos.length) {
            var palabra = videojuegos[localStorage.getItem("contador")].toLowerCase();
        }else{
            localStorage.setItem("categoria", "series");
            sessionStorage.setItem("contador", 0);
            location.reload();
        }
    } else if (localStorage.getItem("categoria") == "series") {
        ordenarLongitudPalabras(series);
        if (localStorage.getItem("contador") < series.length) {
            var palabra = series[localStorage.getItem("contador")].toLowerCase();
        }else{
            localStorage.setItem("categoria", "grupos");
            localStorage.setItem("contador", 0);
            location.reload();
        }
    } else if (localStorage.getItem("categoria") == "grupos") {
        ordenarLongitudPalabras(grupos);
        if (localStorage.getItem("contador") < grupos.length) {
            var palabra = grupos[localStorage.getItem("contador")].toLowerCase();
        }else{
            localStorage.setItem("categoria", "peliculas");
            localStorage.setItem("contador", 0);
            location.reload();
        }
    }
}



console.log(palabra);
var letraCorrecta = new Array();
var palabraDividida = palabra.toLowerCase().split("");
var contador = 0;

var espacioLeido = false;
var letrasFalladas=new Array();
function comprobarLetra(letra) {

    let letraCorrecta = false;
    let fallos1 = Number(sessionStorage.getItem("fallosJugador1"));
    let fallos2 = Number(sessionStorage.getItem("fallosJugador2"));
    // let cuentaEspacios=false;

    if (!espacioLeido) {
        for (let index = 0; index < palabraDividida.length; index++) {
            if (palabraDividida[index] == " ") {
                contador++;
                espacioLeido = true;
            }
        }
    }
    for (let index = 0; index < palabraDividida.length; index++) {
        correcto=true;
        if (letra == palabraDividida[index]) {
            palabraOculta[index] = letra;
            contador++;
            letraCorrecta = true;
        }
        // if(!cuentaEspacios){
        // if(palabraDividida[index]==" "){
        //     contador++;
        //     cuentaEspacios=true;
        // }
        // }
    }
    
    console.log("contador: " + contador);
    console.log("palabra dividida length: " + palabraDividida.length);
    if (contador == palabraDividida.length) {
        cambioTurno();
        finDeJuego();
    }
    console.log(letraCorrecta);
    if (!letraCorrecta) {
        letrasFalladas.push(letra);
        document.getElementById("letrasFalladas").innerText="Letras falladas: "+letrasFalladas;
        // let victoriasJugador1=localStorage.getItem("victoriasJugador1");
        // let victoriasJugador2=localStorage.getItem("victoriasJugador2");
        // if(screen.width<1136){
        //     cambioTurno();
        // }
        if(screen.width<1136){
            if (turno == 1) {
                sessionStorage.setItem("fallosJugador1", fallos1 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador1"))) {
                    case 1:
                        console.log("cabeza");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        console.log("cuerpo");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        console.log("brazo1");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        console.log("brazo2");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        console.log("pierna1");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        console.log("pierna2");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador2", victoriasJugador2++);
                        finDeJuego();
                        break
                }
            } else {
                sessionStorage.setItem("fallosJugador2", fallos2 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador2"))) {
                    case 1:
                        console.log("cabeza");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        console.log("cuerpo");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        console.log("brazo1");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        console.log("brazo2");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        console.log("pierna1");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        console.log("pierna2");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador1", victoriasJugador1++);
                        finDeJuego();
                        break
                }
            }
        }else{
            if (turno == 2) {
                sessionStorage.setItem("fallosJugador1", fallos1 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador1"))) {
                    case 1:
                        console.log("cabeza");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        console.log("cuerpo");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        console.log("brazo1");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        console.log("brazo2");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        console.log("pierna1");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        console.log("pierna2");
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador2", victoriasJugador2++);
                        finDeJuego();
                        break
                }
            } else {
                sessionStorage.setItem("fallosJugador2", fallos2 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador2"))) {
                    case 1:
                        console.log("cabeza");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        console.log("cuerpo");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        console.log("brazo1");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        console.log("brazo2");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        console.log("pierna1");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        console.log("pierna2");
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador1", victoriasJugador1++);
                        finDeJuego();
                        break
                }
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
    var contadorPalabras = localStorage.getItem("contador");
    if(sessionStorage.getItem("conservarCambios")=="false"){//Sólo se suma si el usuario no quiere conservar cambios.
    contadorPalabras++
    }
    localStorage.setItem("contador", contadorPalabras);
    document.getElementById("palabra").children[0].innerHTML = palabraOculta.join(" ");
}