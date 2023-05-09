import got from './data/got/got.js';
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
      
      let filtrarStark = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
      console.log(filtrarStark);
      
      let filtrarTargaryen = data.got.filter(casa => casa.family == "House Targaryen"|| casa.family == "Targaryan");
      console.log(filtrarTargaryen); 
      
      let filtrarBaratheon = data.got.filter(casa => casa.family == "House Baratheon" || casa.family == "Baratheon");
      console.log(filtrarBaratheon);
      
      let filtrarLannister = data.got.filter(casa => casa.family == "House Lannister" || casa.family == "House Lanister" || casa.family == "Lannister");
      console.log(filtrarLannister);
     
      
      //let filtrarTarly = data.got.filter(casa => casa.family == "House Tarly" || casa.family == "Stark");
      //console.log(filtrarTarly); 
      //funcionCiclo(filtrarStark)
      
     /* let name=filtrarDatos[0].fullName;
      let titulo=filtrarDatos[0].title;
      let familia=filtrarDatos[0].family;
      let imagen=filtrarDatos[0].imageUrl;
      let fechaNacimiento=filtrarDatos[0].born; 
      let fechaMuerte=filtrarDatos[0].death;
  if (fechaMuerte=== undefined) {
    fechaMuerte="No aplica"
  }
      document.getElementById("datos").innerHTM = name + "<br>"+ titulo +"<br>"+ familia +"<br>"+ imagen +"<br>"+ fechaNacimiento +"<br>"+fechaMuerte;
*/}


  



 
);




