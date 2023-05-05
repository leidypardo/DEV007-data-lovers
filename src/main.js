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


    let botonEnviar=document.getElementById("botonEnviar");

    botonEnviar.addEventListener("click", function () {
      vista1.style.display = "none";
      vista2.style.display = "none";
      vista3.style.display ="block";});

    let filtrarDatos = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark" );
    console.log(filtrarDatos);

    let name=filtrarDatos[1].fullName;
    let titulo=filtrarDatos[1].title;
    let familia=filtrarDatos[1].family;
    let imagen=filtrarDatos[1].imageUrl;
    let nacimiento=filtrarDatos[1].born; 
    let muerte=filtrarDatos[1].death; 

    

    document.getElementById("datos").innerHTML= name + "<br>"+ titulo +"<br>"+ familia +"<br>"+ imagen +"<br>"+ nacimiento +"<br>"+muerte;



function filtroPor(objeto) {
  return objeto.id ==1;
}
const objetosFiltrados = data.got.filter(filtroPor);

console.log(objetosFiltrados);

});





