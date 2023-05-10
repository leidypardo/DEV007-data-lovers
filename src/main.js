import data from './data/got/got.js';

let botonContinuar = document.getElementById("botonContinuar");
let botonIdEnviar =document.getElementsByClassName("botonEnviar");
let AlmacenarIdBoton= "";
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
let filtrarcasas = [];
    let botonEnviar = document.querySelectorAll(".botonEnviar");
    let cuandosehaceclick = function(){
      botonEnviar.forEach(boton => {
        boton.addEventListener('click', function() {
          AlmacenarIdBoton = boton.id
     console.log(AlmacenarIdBoton);
     if (AlmacenarIdBoton === "stark") {
      filtrarcasas = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
     }else if (AlmacenarIdBoton === "targaryen") {
      filtrarcasas = data.got.filter(casa => casa.family == "House Targaryen"|| casa.family == "Targaryan");
      } else if (AlmacenarIdBoton === "baratheon") {  
        filtrarcasas = data.got.filter(casa => casa.family == "House Baratheon" || casa.family == "Baratheon");} 
        else if (AlmacenarIdBoton === "lannister") {  
          filtrarcasas = data.got.filter(casa => casa.family == "House Lannister" || casa.family == "House Lanister" || casa.family == "Lannister");
        } 
        else if (AlmacenarIdBoton === "mormont") {  
          filtrarcasas = data.got.filter(casa => casa.family == "Mormont");
        } else if (AlmacenarIdBoton === "tyrell") {  
          filtrarcasas = data.got.filter(casa => casa.family == "House Tyrell" || casa.family == "Tyrell");
        }  else if (AlmacenarIdBoton === "greyjoy") {  
        filtrarcasas = data.got.filter(casa => casa.family == "House Greyjoy" || casa.family == "House Greyjoy" || casa.family == "Greyjoy");
      } 
      

      
     
      let filtrarGenteLibre = data.got.filter(casa => casa.family == "Free Folk" || casa.family == "House Greyjoy" || casa.family == "Greyjoy");
    

      let filtrarMartel = data.got.filter(casa => casa.family == "viper"|| casa.family == "Sand");
      

      let filtrarNaharis = data.got.filter(casa => casa.family == "Naharis");
     
      
      let filtrarNaath = data.got.filter(casa => casa.family == "Naathi");
      
    
      let filtrarTarth = data.got.filter(casa => casa.family == "Tarth");
   
     
      const seccionCasas=document.querySelector("[name='informacioncasa']").outerHTML;
      document.querySelector("[name='informacioncasa']").style.display="none";

    for (let i = 0; i < filtrarcasas.length; i++) {
      let AcumularAtributos=seccionCasas;
      let nombre=filtrarcasas[i].fullName;
      let titulo=filtrarcasas[i].title;
      let familia=filtrarcasas[i].family;
      let imagen=filtrarcasas[i].imageUrl;
      let nacimiento=filtrarcasas[i].born; 
      let muerte=filtrarcasas[i].death; 
     
      if (nacimiento === null) {
     nacimiento= "no aplica"
   }
      if (muerte === undefined) {
        muerte = "no aplica"
  }
  document.getElementById("datos").innerHTML += nombre + "<br>" +  titulo + "<br>" + familia + "<br>" + nacimiento + "<br>" + muerte;
  AcumularAtributos=AcumularAtributos.replace("[PP]",nombre);
  AcumularAtributos=AcumularAtributos.replace("[img]",imagen);

      document.querySelector("#deTodo").innerHTML += AcumularAtributos;
 
}

   
      vista1.style.display = "none";
      vista2.style.display = "none";
      vista3.style.display ="block";
    });
  });
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