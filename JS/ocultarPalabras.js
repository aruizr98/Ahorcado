
window.addEventListener("load", iniciar);
function iniciar(){
   
    function cogerPalabraAleatoria(){
        let palabraAleatoria;

        if (localStorage.getItem("categoria")=== "peliculas") {
            
            palabraAleatoria= peliculas[Math.floor(peliculas.length*Math.random())]
            console.log(palabraAleatoria)
            // document.getElementById("palabra").children[0].innerHTML=palabraAleatoria;
        }

        else if(localStorage.getItem("categoria")=== "videojuegos") {
            palabraAleatoria= videojuegos[Math.floor(videojuegos.length*Math.random())]
            console.log(palabraAleatoria)
    
        }
        else if(localStorage.getItem("categoria")=== "series") {
            palabraAleatoria= series[Math.floor(series.length*Math.random())]
            console.log(palabraAleatoria)
    
        }
        else if(localStorage.getItem("categoria")=== "grupos") {
            palabraAleatoria= grupos[Math.floor(grupos.length*Math.random())]
            console.log(palabraAleatoria)
        }
    }
    cogerPalabraAleatoria();
    
    function palabraOculta(palabra){
        let palabraArray=palabra.split("");
        for (let i = 0; i < palabra.length; i++) {
            const element = palabra[i];
            
        }

    }
    palabraOculta();
         
}
