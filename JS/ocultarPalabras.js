
window.addEventListener("load", iniciar);
function iniciar(){
   
    function cogerPalabraAleatoria(){
        let palabraAleatoria;

        if (localStorage.getItem("categoria")=== "peliculas") {
            
            palabraAleatoria= peliculas[Math.floor(peliculas.length*Math.random())]
            // document.getElementById("palabra").children[0].innerHTML=palabraAleatoria;

        }

        else if(localStorage.getItem("categoria")=== "videojuegos") {
            palabraAleatoria= videojuegos[Math.floor(videojuegos.length*Math.random())]

    
        }
        else if(localStorage.getItem("categoria")=== "series") {
            palabraAleatoria= series[Math.floor(series.length*Math.random())]
    
        }
        else if(localStorage.getItem("categoria")=== "grupos") {
            palabraAleatoria= grupos[Math.floor(grupos.length*Math.random())]
       }
       return palabraAleatoria;

    }
    let palabra=cogerPalabraAleatoria();
    // console.log(palabra.split(""));
    let palabraArray = palabra.split("");
    // console.log(palabraArray.length)

    function palabraOculta(palabraArray){
        for (let i = 0; i < palabraArray.length; i++) {
            console.log(palabraArray.length)
        }
        


    }
    
    palabraOculta(palabraArray);
}
