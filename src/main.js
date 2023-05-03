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


    
botonEnviar.addEventListener("click", function () {

  vista1.style.display = "none";
vista2.style.display = "none";
vista3.style.display = "block";


function filtroPor(objeto) {
  return objeto.id ==1;
}
const objetosFiltrados = data.got.filter(filtroPor);

console.log(objetosFiltrados);

});
  });



