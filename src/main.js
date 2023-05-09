import data from './data/got/got.js';

let botonContinuar = document.getElementById("botonContinuar");
vista1.style.display = "block";
vista2.style.display = "none";
vista3.style.display = "none";
botonContinuar.style.display = "block";

//evento cuando se presiona el boton continuar para cambiar a la segunda vista
botonContinuar.addEventListener("click", function () {
    let nombreJugador=document.getElementById("userName").value; 
    document.getElementById("saludoJugador").innerHTML= "Bienvenid@ "+ nombreJugador + " elige una casa";
    vista1.style.display = "none";
    vista2.style.display = "block";
    vista3.style.display = "none";
    botonContinuar.style.display = "block";

  

    let botonEnviar = document.querySelectorAll(".botonEnviar");
    let cuandosehaceclick = function(){
      let filtrarDatos = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
      console.log(filtrarDatos);
  
      let name=filtrarDatos[0].fullName;
      let filtrarStark = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
      console.log(filtrarStark);
  
      let filtrarTargaryen = data.got.filter(casa => casa.family == "House Targaryen"|| casa.family == "Targaryan");
      console.log(filtrarTargaryen); 
  
      let filtrarBaratheon = data.got.filter(casa => casa.family == "House Baratheon" || casa.family == "Baratheon");
      console.log(filtrarBaratheon);
  
      let filtrarLannister = data.got.filter(casa => casa.family == "House Lannister" || casa.family == "House Lanister" || casa.family == "Lannister");
      console.log(filtrarLannister);
      
      document.getElementById("datos").innerHTML= name;
      vista1.style.display = "none";
      vista2.style.display = "none";
      vista3.style.display ="block";
      }
      botonEnviar.forEach(boton => {
        boton.addEventListener("click", cuandosehaceclick);
         
  
      });
      
      let home = document.getElementById("home");
      home.addEventListener("click", function () {
        vista1.style.display = "block";
        vista2.style.display = "none";
        vista3.style.display ="none";
      });
  
      let retornar =document.getElementById("retornar");
      retornar.addEventListener("click", function () {
        vista2.style.display = "block";
        vista3.style.display = "none";
      });
  
  
    });