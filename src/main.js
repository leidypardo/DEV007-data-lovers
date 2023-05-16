import { filterData, sortData } from './data.js';
import data from './data/got/got.js';

const botonContinuar = document.getElementById("botonContinuar");

const vista1 =document.getElementById("vista1"); 
const vista2 =document.getElementById("vista2");
const vista3 =document.getElementById("vista3");

let AlmacenarIdBoton = "";
vista1.style.display = "block";
vista2.style.display = "none";
vista3.style.display = "none";
botonContinuar.style.display = "block";

//evento cuando se presiona el boton continuar para cambiar a la segunda vista
botonContinuar.addEventListener("click", function () {
  const nombreJugador = document.getElementById("userName").value;
  document.getElementById("saludoJugador").innerHTML = "Bienvenid@ " + nombreJugador + " elige una casa";
  vista1.style.display = "none";
  vista2.style.display = "block";
  vista3.style.display = "none";
  botonContinuar.style.display = "block";
  // const filtradoFinal = [];
  const botonEnviar = document.querySelectorAll(".botonEnviar");
  
  const cuandosehaceclick = function (boton) {
    const BorrarListaNueva = document.getElementById("datos");
    BorrarListaNueva.style.display = "none"; //ocultar info
    AlmacenarIdBoton = boton.id
    console.log(AlmacenarIdBoton);
       
    const filtradoFinal = filterData(data,AlmacenarIdBoton);
      
    const seccionCasas = document.querySelector("[name='informacioncasa']").outerHTML;
    document.querySelector("[name='informacioncasa']").style.display = "none";

    const barraDesplegable = document.getElementById('orden');
        
    barraDesplegable.addEventListener('change', function() {  

      const orderValue = document.getElementById("orden").value;
        
      if (orderValue === 'ascendente') {
        document.querySelector("#deTodo").innerHTML = ''
        document.getElementById("datos").innerHTML = ''
        document.querySelector("[name='informacioncasa']").removeAttribute('style');
        vista2.style.display = "none";
        vista3.style.display = "block";
        botonContinuar.style.display = "block";
        const informacionOrdenada = sortData(filtradoFinal, "fullName", "ascendente");
        actualizarResultados(informacionOrdenada);
           
      } else {
        document.querySelector("#deTodo").innerHTML = ''
        document.getElementById("datos").innerHTML = ''
        document.querySelector("[name='informacioncasa']").removeAttribute('style');
        vista2.style.display = "none";
        vista3.style.display = "block";
        botonContinuar.style.display = "block";
        const informacionOrdenadaDesc = sortData(filtradoFinal, "fullName", "descendente");
        actualizarResultados(informacionOrdenadaDesc);
      }
    });
        
    function actualizarResultados(data) {
      console.log(data);
      const seccionCasas2 = document.querySelector("[name='informacioncasa']").outerHTML;
      document.querySelector("[name='informacioncasa']").style.display = "none";
      for (let i = 0; i < data.length; i++) {
        let AcumularAtributos2 = seccionCasas2;
        const nombre = data[i].fullName;
        const titulo = data[i].title;
        const familia = data[i].family;
        const imagen = data[i].imageUrl;
        let nacimiento = data[i].born;
        let muerte = data[i].death;
  
        if (nacimiento === null) {
          nacimiento = "No Registra fecha de nacimiento"  
        }
        if (muerte === undefined) {
          muerte = "No Registra fecha de muerte"
        }
        document.getElementById("datos").innerHTML += nombre + "<br>" + titulo + "<br>" + familia + "<br>" + nacimiento + "<br>" + muerte;
          
        AcumularAtributos2 = AcumularAtributos2.replace("[nombre]", nombre);
        AcumularAtributos2 = AcumularAtributos2.replace("[img]", imagen);
        AcumularAtributos2 = AcumularAtributos2.replace("[familia]", familia);
        AcumularAtributos2 = AcumularAtributos2.replace("[titulo]", titulo);
        AcumularAtributos2 = AcumularAtributos2.replace("[nacimiento]", nacimiento);
        AcumularAtributos2 = AcumularAtributos2.replace("[muerte]", muerte);
           
        document.querySelector("#deTodo").innerHTML += AcumularAtributos2;
      }
    }
    for (let i = 0; i < filtradoFinal.length; i++) {
      let AcumularAtributos = seccionCasas;
      const nombre = filtradoFinal[i].fullName;
      const titulo = filtradoFinal[i].title;
      const familia = filtradoFinal[i].family;
      const imagen = filtradoFinal[i].imageUrl;
      let nacimiento = filtradoFinal[i].born;
      let muerte = filtradoFinal[i].death;

      if (nacimiento === null) {
        nacimiento = "No Registra fecha de nacimiento"
      }
      if (muerte === undefined) {
        muerte = "No Registra fecha de muerte"
      }
      document.getElementById("datos").innerHTML += nombre + "<br>" + titulo + "<br>" + familia + "<br>" + nacimiento + "<br>" + muerte;
          
      AcumularAtributos = AcumularAtributos.replace("[nombre]", nombre);
      AcumularAtributos = AcumularAtributos.replace("[img]", imagen);
      AcumularAtributos = AcumularAtributos.replace("[familia]", familia);
      AcumularAtributos = AcumularAtributos.replace("[titulo]", titulo);
      AcumularAtributos = AcumularAtributos.replace("[nacimiento]", nacimiento);
      AcumularAtributos = AcumularAtributos.replace("[muerte]", muerte);
      //console.log(AcumularAtributos);
      document.querySelector("#deTodo").innerHTML += AcumularAtributos;

    }
    vista1.style.display = "none";
    vista2.style.display = "none";
    vista3.style.display = "block";
  }
  botonEnviar.forEach(boton => {
    boton.addEventListener("click", () => cuandosehaceclick(boton));
  });
  const home = document.getElementById("home");
  home.addEventListener("click", function () {
    vista1.style.display = "block";
    vista2.style.display = "none";
    vista3.style.display = "none";
  });
  const retornar = document.getElementById("retornar");
  retornar.addEventListener("click", function () {
    document.querySelector("#deTodo").innerHTML = ''
    document.getElementById("datos").innerHTML = ''
    document.getElementById("orden").value = ""
    document.querySelector("[name='informacioncasa']").removeAttribute('style');
    vista2.style.display = "block";
    vista3.style.display = "none";
    botonContinuar.style.display = "block";

  });
});


