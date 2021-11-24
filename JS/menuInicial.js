window.addEventListener("load", iniciar);
function iniciar() {
    document.getElementById("muestraOculta").addEventListener("click", mostrarReglas);
    document.getElementById("cerrarReglas").addEventListener("click", cerrarReglas);
}

function mostrarReglas() {
    document.getElementById("reglas").style.display = "";
    document.getElementById("sombraFondoReglas").style.display = "";
}

function cerrarReglas() {
    document.getElementById("reglas").style.display = "none";
    document.getElementById("sombraFondoReglas").style.display = "none";
}