
window.addEventListener("load", iniciar);
function iniciar(){
   

    if (localStorage.getItem("categoria")=== "peliculas") {
        document.getElementById("palabra").innerHTML=peliculas[Math.floor(peliculas.length*Math.random())];
    }
    else if(localStorage.getItem("categoria")=== "videojuegos") {
        document.getElementById("palabra").innerHTML=videojuegos[Math.floor(videojuegos.length*Math.random())];
    }
    else if(localStorage.getItem("categoria")=== "series") {
        document.getElementById("palabra").innerHTML=series[Math.floor(series.length*Math.random())];
    }
    else if(localStorage.getItem("categoria")=== "grupos") {
        document.getElementById("palabra").innerHTML=grupos[Math.floor(grupos.length*Math.random())];
    }
    


    
}