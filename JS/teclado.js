window.addEventListener("load", iniciar);

function iniciar() {
    /**
     * Metemos en variables los elementos del DOM que vamos a utilizar
     */
    var teclado = document.getElementById("teclado");
    var teclas = teclado.getElementsByTagName("button");
    /**
     * Es necesario pasar la variable teclas a otra variable ya que 
     * la variable teclas es un HTMLCollection en lugar de un Array
     * y necesitamos un Array para poder utilizar el método Slice
     * y poder seleccionar sólo los elementos que necesitamos
     */
    var teclasArray = new Array();
    for (let index = 0; index < teclas.length; index++) {
        teclasArray[index] = teclas[index];
    }
    var teclasArray2 = teclasArray.slice(1, teclasArray.length);//Obtenemos todos los botones menos el primero, que no lo necesitamos
    var aceptarTeclado = document.getElementById("aceptarTeclado");
    var inputTeclado = document.getElementById("inputTeclado");
    var resolver = document.getElementById("resolver");
    var nuevaPartida = document.getElementById("nuevaPartida");
    var cronometro1 = document.getElementById("cronometro1");
    var cronometro2 = document.getElementById("cronometro2");
    var letrasPulsadas = new Array();
    var correcto = true;
    
    for (let index = 0; index < teclasArray2.length; index++) {
        teclasArray2[index].addEventListener("click", function (e) {//Teclado modo PC
            correcto = true;
            sessionStorage.setItem("letraPulsada", e.target.value);//Obtenemos el valor de la tecla que ha sido pulsada
            for (let index = 0; index < letrasPulsadas.length; index++) {//Recorremos las letras que han sido pulsadas anteriormente
                if (letrasPulsadas[index] == sessionStorage.getItem("letraPulsada")) {//Si la letra pulsada ya había sido pulsada antes
                    correcto = false;//no es correcto
                }
            }
            if (correcto) {//Si la tecla pulsada no se había pulsado antes
                letrasPulsadas.push(e.target.value);//Se añade al array de las letras pulsadas para que no se pueda volver a pulsar
                cambioTurno();//Se cambia el turno
                cronometro1.innerText = "30";//Se resetean los cronómetros
                cronometro2.innerText = "30";
                //Se comprueba si la letra pulsada es correcta (forma parte de la palabra a resolver)
                document.getElementById("palabra").children[0].innerHTML = comprobarLetra(sessionStorage.getItem("letraPulsada"));
                teclasArray2[index].style.opacity = "0.2";//Bajamos la opacidad de la tecla para indicar al jugador que esa letra ya ha sido pulsada
                teclasArray2[index].classList = "";//Le quitamos la clase para que no se produzca el efecto hover
                teclasArray2[index].style.cursor = "unset";//Y le quitamos la mano como cursor, dejando la flecha
            }
        })

    }

    function animar() {
        /**
         * Animación utilizada en el teclado del modo tablet/móvil para saber si la letra pulsada
         * ha sido pulsada con anterioridad o está dentro de las letras falladas
         */
        let fallada = false;
        var animacion = [{
                transform: "translateY(10px)"
            },
            {
                transform: "translateY(-10px)"
            },
            {
                transform: "translateY(0px)"
            },
            {
                transform: "translateY(10px)"
            },
            {
                transform: "translateY(-10px)"
            },
            {
                transform: "translateY(0px)"
            },
            {
                transform: "translateY(10px)"
            },
            {
                transform: "translateY(-10px)"
            },
            {
                transform: "translateY(0px)"
            }
        ]
        for (let index = 0; index < letrasFalladas.length; index++) {//recorremos las letras falladas
            fallada = false;
            if (letrasFalladas[index] == sessionStorage.getItem("letraPulsada")) {//Si la letra pulsada está dentro de las falladas
                fallada = true;
                index = letrasFalladas.length;//salimos del bucle
            }
        }
        if (fallada) { //Si la letra pulsada es una de las falladas, se anima la fila de letras falladas
            document.getElementById("letrasFalladas").animate(animacion, {
                duration: 500
            });
        } else { //Si no, se anima la palabra oculta
            document.getElementById("palabraResolver").animate(animacion, {
                duration: 500
            });
        }
    };
    aceptarTeclado.addEventListener("click", function () {//Teclado modo tablet/móvil
        correcto = true;
        sessionStorage.setItem("letraPulsada", inputTeclado.value);//Obtenemos el valor de la letra escrita en el input
        if (sessionStorage.getItem("letraPulsada") != "") {//Verificamos que el input no esté vacío
            for (let index = 0; index < letrasPulsadas.length; index++) {//Recorremos las letras pulsadas
                if (letrasPulsadas[index] == sessionStorage.getItem("letraPulsada")) {//Si la letra pulsada está dentro de las pulsadas anteriormente
                    correcto = false;
                    inputTeclado.value = "";//Borramos la letra que se haya escrito en el teclado
                    animar();//Y llamamos a la función animar, que realizará la animación donde corresponda
                }
            }

            if (correcto) {//Si la letra pulsada no se había pulsado antes
                letrasPulsadas.push(inputTeclado.value);//La añadimos a la lista de letras pulsadas
                inputTeclado.value = "";//Borramos esa letra del input para dejarlo vacío
                cronometro1.innerText = "30";//Reseteamos los cronómetros
                cronometro2.innerText = "30";
                //Comprobamos si la letra introducida es correcta o no
                document.getElementById("palabra").children[0].innerHTML = comprobarLetra(sessionStorage.getItem("letraPulsada"));
                cambioTurno();//Y cambiamos de turno
            }

        }
    })
    resolver.addEventListener("click", function () {//Al pulsar el botón de resolver
        let solucion = prompt("Introduce la palabra o frase");//El jugador introduce su respuesta
        if (solucion == palabra) {//Si es correcta

            if (turno == 1) {//Si el turno era del jugador 1, entonces ha ganado el jugador 1
                alert("Enhorabuena, " + localStorage.getItem("nombreJugador1") + ", has ganado");//Mostramos un mensaje con el nombre del jugador
                finDeJuego();//Y finaliza esa partida
            } else {
                alert("Enhorabuena, " + localStorage.getItem("nombreJugador2") + ", has ganado");
                finDeJuego();
            }
        } else {//Si la respuesta del jugador no es correcta
            alert("Incorrecto");//Se le indica
            cambioTurno();//Y se cambia el turno
        }
    })


    nuevaPartida.addEventListener("click", function () {//Si un jugador hace click en nueva partida
        //Se le pide una confirmación, advirtiendole de que se borrarán los datos
        if (confirm("¿Estás seguro de que quieres empezar una nueva partida? Se borrarán todos los datos.")) {
            localStorage.clear();//Se borran los datos

            window.open("FormularioInicial.html");//se le redirige al formulario inicial
            window.close();
        }

    })
}