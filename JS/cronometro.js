//Cambio de turno
function cambioTurno() {
    if (turno == 1) {
        turno = 2;
    } else {
        turno = 1;
    }
}
var turno = 1;

window.addEventListener("load", iniciar);


function iniciar() {
    var cronometro1 = document.getElementById("cronometro1");
    var cronometro2 = document.getElementById("cronometro2");

    //Cronómetro
    function restarCronometro(cronometro) {
        let numero = Number(cronometro.innerText);//Obtenemos el número por el que va el cronómetro
        if (numero != 0) {//Si es distinto de 0, se resta uno, sino, cambia de turno y se resetea.
            numero--;
        } else {
            cambioTurno();
            numero = 30;
        }
        cronometro.innerText = numero;
    }
    
    window.setInterval(function () {
        if(screen.width>1136){//Si estamos en el modo de pc hay animaciones en las cajas de los jugadores
        if (turno == 1) {
            restarCronometro(cronometro1);
            cajaJugador1.style.opacity = 1;
            cajaJugador1.style.transform = "scale(1.1) translateX(50px)";
            cajaJugador2.style.opacity = 0.2;
            cajaJugador2.style.transform = "scale(0.8)";
        } else {
            restarCronometro(cronometro2);
            cajaJugador2.style.opacity = 1;
            cajaJugador2.style.transform = "scale(1.1) translateX(-50px)";
            cajaJugador1.style.opacity = 0.2;
            cajaJugador1.style.transform = "scale(0.8)";
        }
    }else{//Pero si estamos en el modo tablet o móvil, no hacemos las animaciones, ya que las cajas sobresaldrían.
        if (turno == 1) {
            restarCronometro(cronometro1);
            cajaJugador1.style.display = "";
            cajaJugador2.style.opacity=0;
            cajaJugador1.style.opacity=1;
            cajaJugador2.style.display="none";

        } else {
            restarCronometro(cronometro2);
            cajaJugador2.style.display="";
            cajaJugador1.style.opacity=0;
            cajaJugador2.style.opacity = 1;
            cajaJugador1.style.display="none";
        }
    }
    }, 1000);
    
}