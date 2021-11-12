window.addEventListener("load", iniciar);
function iniciar() {
    var teclado = document.getElementById("teclado");
    var teclas = teclado.getElementsByTagName("button");
    var aceptarTeclado=document.getElementById("aceptarTeclado");
    var inputTeclado=document.getElementById("inputTeclado");
    for (let index = 0; index < teclas.length; index++) {
        teclas[index].addEventListener("click", function (e) {
            sessionStorage.setItem("letraPulsada", e.target.value);
        })
    }
    
    aceptarTeclado.addEventListener("click", function(){
        sessionStorage.setItem("letraPulsada", inputTeclado.value);
    })
}


