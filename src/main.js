
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
   
    botonContinuar.style.display = "block";
      
      let filtrarDatos = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
      console.log(filtrarDatos);
    
      let name=filtrarDatos[0].fullName;
      let titulo=filtrarDatos[0].title;
      let familia=filtrarDatos[0].family;
      let imagen=filtrarDatos[0].imageUrl;
      let fechaNacimiento=filtrarDatos[0].born; 
      let fechaMuerte=filtrarDatos[0].death;
  if (fechaMuerte=== undefined) {
    fechaMuerte="No aplica"
  }
      document.getElementById("datos").innerHTM = name + "<br>"+ titulo +"<br>"+ familia +"<br>"+ imagen +"<br>"+ fechaNacimiento +"<br>"+fechaMuerte;
    }
 
);



function filtroPor(objeto) {
  return objeto.id ==1;
}
const objetosFiltrados = data.got.filter(filtroPor);

console.log(objetosFiltrados);







