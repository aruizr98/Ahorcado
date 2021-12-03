

function cogerPalabraAleatoria() {//Obtiene una palabra aleatoria dentro de la categoría definida por los jugadores.
    let palabraAleatoria;
    let categoria = localStorage.getItem("categoria");

    if (categoria === "peliculas") {
        palabraAleatoria = peliculas[Math.floor(peliculas.length * Math.random())]
    } else if (categoria === "videojuegos") {
        palabraAleatoria = videojuegos[Math.floor(videojuegos.length * Math.random())]
    } else if (categoria === "series") {
        palabraAleatoria = series[Math.floor(series.length * Math.random())]
    } else if (categoria === "grupos") {
        palabraAleatoria = grupos[Math.floor(grupos.length * Math.random())]
    }
    return palabraAleatoria;
}
function ordenarLongitudPalabras(array) {//Ordena las palabras por orden de longitud: Las más largas primero. Dependiendo de la categoría, tendrá un array u otro como parámetro de entrada.
    let ordenado = true;
    do {
        ordenado = true;
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index].length < array[index + 1].length) {//Si la palabra actual es más corta que la siguiente, las intercambia.
                let aux = new Array();
                aux[index] = array[index];
                array[index] = array[index + 1];
                array[index + 1] = aux[index];
                ordenado = false;
            }
        }
    } while (!ordenado);//Esto se realiza hasta que no tiene que cambiar ninguna palabra, es decir, están todas ordenadas (la siguiente palabra es más corta que la anterior)
}


if (localStorage.getItem("modo") == "aleatorio") {//Si el usuario ha seleccionado modo aleatorio 
    var palabra = cogerPalabraAleatoria().toLowerCase();//se obtiene una palabra aleatoria y se pasan todas las letras a minúscula.
} else {//Si ha elegido por dificultad
    if (localStorage.getItem("categoria") == "peliculas") {//se ordena el array de la categoría seleccionada
        ordenarLongitudPalabras(peliculas);
        if (localStorage.getItem("contador") < peliculas.length) {//Siempre que el contador sea menor a la longitud del array
            var palabra = peliculas[localStorage.getItem("contador")].toLowerCase();//Se utiliza el contador como indice para seleccionar la palabra a resolver.
        } else {//Si el contador supera el tamaño del array
            localStorage.setItem("categoria", "videojuegos");//Se cambia de categoría
            localStorage.setItem("contador", 0);//Se resetea el contador
            location.reload();//Y, por último, se actualiza la página.
        }
    } else if (localStorage.getItem("categoria") == "videojuegos") {
        ordenarLongitudPalabras(videojuegos);
        if (localStorage.getItem("contador") < videojuegos.length) {
            var palabra = videojuegos[localStorage.getItem("contador")].toLowerCase();
        } else {
            localStorage.setItem("categoria", "series");
            localStorage.setItem("contador", 0);
            location.reload();
        }
    } else if (localStorage.getItem("categoria") == "series") {
        ordenarLongitudPalabras(series);
        if (localStorage.getItem("contador") < series.length) {
            var palabra = series[localStorage.getItem("contador")].toLowerCase();
        } else {
            localStorage.setItem("categoria", "grupos");
            localStorage.setItem("contador", 0);
            location.reload();
        }
    } else if (localStorage.getItem("categoria") == "grupos") {
        ordenarLongitudPalabras(grupos);
        if (localStorage.getItem("contador") < grupos.length) {
            var palabra = grupos[localStorage.getItem("contador")].toLowerCase();
        } else {
            localStorage.setItem("categoria", "peliculas");
            localStorage.setItem("contador", 0);
            location.reload();
        }
    }
}



console.log(palabra);
var letraCorrecta = new Array();
var palabraDividida = palabra.toLowerCase().split("");//Se divide la palabra en letras para poder comprobar cada una de ellas.
var contador = 0;//Contador para saber si se ha completado la palabra por completo o no.

var espacioLeido = false;
var letrasFalladas = new Array();
function comprobarLetra(letra) {//Comprobamos la letra que ha sido pulsada por el jugador

    let letraCorrecta = false;
    let fallos1 = Number(sessionStorage.getItem("fallosJugador1"));
    let fallos2 = Number(sessionStorage.getItem("fallosJugador2"));
    // let cuentaEspacios=false;

    if (!espacioLeido) {//Si no se ha leido ningún espacio, comprobaremos si la palabra tiene alguno.
        for (let index = 0; index < palabraDividida.length; index++) {
            if (palabraDividida[index] == " ") {//Si la palabra tiene un espacio
                contador++;//Se suma uno al contador
                espacioLeido = true;//Y se define que se ha encontrado un espacio.
            }
        }
    }
    for (let index = 0; index < palabraDividida.length; index++) {
        correcto = true;
        if (letra == palabraDividida[index]) {//Si la letra pulsada es correcta
            palabraOculta[index] = letra;//Se sustituye el _ de esa posición por la letra correcta
            contador++;//Se suma uno al contador
            letraCorrecta = true;//Y se define que la letra pulsada ha sido correcta.
        }
    }

    console.log("contador: " + contador);
    console.log("palabra dividida length: " + palabraDividida.length);
    if (contador == palabraDividida.length) {//Si número del contador es igual al número de letras (contando los espacios) que tiene la palabra, quiere decir que se ha completado la palabra y ya está resuelta.
        cambioTurno();//Se cambia de turno
        finDeJuego();//Y se finaliza el juego, mostrando un resúmen en con los datos de la partida.
    }
    if (!letraCorrecta) {//Si la letra pulsada no es correcta
        document.getElementById("fallar").play();//Se activa el efecto de sonido de fallo
        letrasFalladas.push(letra);//Se añade esa letra al array de letras falladas
        document.getElementById("letrasFalladas").innerText = "Letras falladas: " + letrasFalladas;//se muestran las letras falladas por pantalla (esto será visible sólo en tablet o móvil, no en pc).

        if (screen.width < 1136) {//Si la pantalla no es de pc
            if (turno == 1) {//Si es el turno del jugador 1
                sessionStorage.setItem("fallosJugador1", fallos1 + 1);//Se le suma un fallo
                switch (Number(sessionStorage.getItem("fallosJugador1"))) {//Se comprueba el número de fallos y dependiendo de eso, se aplica una imagen del muñeco u otra.
                    case 1:
                        //cabeza
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        //cuerpo
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        //Brazo 1
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                       //Brazo 2
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        //Pierna 1
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        //Pierna 2
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo6.png");
                        cambioTurno();//Se cambia el turno para que la victoria se la lleve el jugador correcto.
                        finDeJuego();//En el caso de que se cometan 6 fallos, el muñeco estará completo, por tanto fin de juego
                        break
                }
            } else {
                sessionStorage.setItem("fallosJugador2", fallos2 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador2"))) {
                    case 1:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador1", victoriasJugador1++);
                        cambioTurno();
                        finDeJuego();
                        break
                }
            }
        } else {
            /**
             * //Si la pantalla es de PC hay que hacer lo mismo, pero con los turnos cambiados, 
             * ya que al hacer click en una letra del teclado, se cambia el turno.
             */
            if (turno == 2) {//Si es el turno del jugador 2
                sessionStorage.setItem("fallosJugador1", fallos1 + 1);//Se le suman los fallos al jugador 1
                switch (Number(sessionStorage.getItem("fallosJugador1"))) {
                    case 1:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        document.getElementById("imagenJugador1").setAttribute("src", "img/fallo6.png");
                        // localStorage.setItem("victoriasJugador2", victoriasJugador2++);
                        finDeJuego();
                        break
                }
            } else {
                sessionStorage.setItem("fallosJugador2", fallos2 + 1);
                switch (Number(sessionStorage.getItem("fallosJugador2"))) {
                    case 1:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo1.png");
                        break;
                    case 2:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo2.png");
                        break;
                    case 3:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo3.png");
                        break;
                    case 4:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo4.png");
                        break;
                    case 5:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo5.png");
                        break;
                    case 6:
                        document.getElementById("imagenJugador2").setAttribute("src", "img/fallo6.png");
                        finDeJuego();
                        break
                }
            }

        }

    }

    return palabraOculta.join(" ");
}

let palabraArray = palabra.toLowerCase().split("");//Se divide la palabra a resolver en letras minúsculas
/**
 * Se sustituyen los espacios de la palabra a resolver por / y las letras por _ 
 */
function ocultarPalabra() {
    for (let i = 0; i < palabraArray.length; i++) {
        if (palabraArray[i] != " ") {
            palabraArray[i] = "_";
        } else {
            palabraArray[i] = "/";
        }
    }
    return palabraArray;
}
var palabraOculta = ocultarPalabra();//Se guarda la palabra oculta en una array. Este será el array al que tendremos que acceder para mostrar las letras correctas.



window.addEventListener("load", iniciar);

function iniciar() {
    /**
     * Cada vez que se inicia la página, se suma uno al contador y se muestra la palabra oculta.
     */
    var contadorPalabras = localStorage.getItem("contador");
    contadorPalabras++;
    localStorage.setItem("contador", contadorPalabras);
    document.getElementById("palabra").children[0].innerHTML = palabraOculta.join(" ");
}