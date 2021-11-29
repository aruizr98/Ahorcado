window.addEventListener("load", iniciar);

    function iniciar() {
        
        var nombreJugador1 = document.getElementById("nombreJugador1");
        var nombreJugador2 = document.getElementById("nombreJugador2");
        var colorJugador1 = document.getElementById("colorJugador1");
        var colorJugador2 = document.getElementById("colorJugador2");
        var formulario=document.getElementById("formulario");
        var categoria=document.getElementById("categoria");
        var modo=document.getElementsByName("modo");

        formulario.addEventListener("submit", function () {
            localStorage.setItem("nombreJugador1", nombreJugador1.value);
            localStorage.setItem("nombreJugador2", nombreJugador2.value);
            localStorage.setItem("colorJugador1", colorJugador1.value);
            localStorage.setItem("colorJugador2", colorJugador2.value);
            localStorage.setItem("categoria", categoria.value);
            localStorage.setItem("victoriasJugador1", 0);
            localStorage.setItem("victoriasJugador2",0);
            sessionStorage.setItem("fallosJugador1", 0);
            sessionStorage.setItem("fallosJugador2", 0);
            if(modo[0].checked){
                localStorage.setItem("modo", modo[0].value);
            }else{
                localStorage.setItem("modo",modo[1].value);
            }
            window.open("pantalla de juego.html", "Ahorcado");
            window.close();
        })
    }