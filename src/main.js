import data from './data/got/got.js';

let botonContinuar = document.getElementById("botonContinuar");
vista1.style.display = "block";
vista2.style.display = "none";
botonContinuar.style.display = "block";

//evento cuando se presiona el boton continuar para cambiar a la segunda vista
botonContinuar.addEventListener("click", function () {
    let nombreJugador=document.getElementById("userName").value; 
    document.getElementById("saludoJugador").innerHTML= "Bienvenid@ "+ nombreJugador + " elige una casa";
    vista1.style.display = "none";
    vista2.style.display = "block";
    botonContinuar.style.display = "block";
    let filtrarDatos = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark" );
    console.log(filtrarDatos);
  });


  

