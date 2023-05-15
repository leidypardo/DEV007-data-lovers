import data from './data/got/got.js';

let botonContinuar = document.getElementById("botonContinuar");
let botonIdEnviar = document.getElementsByClassName("botonEnviar");
let AlmacenarIdBoton = "";
vista1.style.display = "block";
vista2.style.display = "none";
vista3.style.display = "none";
botonContinuar.style.display = "block";

//evento cuando se presiona el boton continuar para cambiar a la segunda vista
botonContinuar.addEventListener("click", function () {
  let nombreJugador = document.getElementById("userName").value;
  document.getElementById("saludoJugador").innerHTML = "Bienvenid@ " + nombreJugador + " elige una casa";
  vista1.style.display = "none";
  vista2.style.display = "block";
  vista3.style.display = "none";
  botonContinuar.style.display = "block";
  let filtrarcasas = [];
  let botonEnviar = document.querySelectorAll(".botonEnviar");
  
  let cuandosehaceclick = function (boton) {
        const BorrarListaNueva = document.getElementById("datos");
        BorrarListaNueva.style.display = "none"; //ocultar info
        AlmacenarIdBoton = boton.id
        console.log(AlmacenarIdBoton);
        if (AlmacenarIdBoton === "stark") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Stark" || casa.family == "Stark");
        } else if (AlmacenarIdBoton === "targaryen") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Targaryen" || casa.family == "Targaryan");
        } else if (AlmacenarIdBoton === "baratheon") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Baratheon" || casa.family == "Baratheon");
        }
        else if (AlmacenarIdBoton === "lannister") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Lannister" || casa.family == "House Lanister" || casa.family == "Lannister");
        }
        else if (AlmacenarIdBoton === "mormont") {
          filtrarcasas = data.got.filter(casa => casa.family == "Mormont");
        } else if (AlmacenarIdBoton === "tyrell") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Tyrell" || casa.family == "Tyrell");
        } else if (AlmacenarIdBoton === "greyjoy") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Greyjoy" || casa.family == "House Greyjoy" || casa.family == "Greyjoy");
        } else if (AlmacenarIdBoton === "martell") {
          filtrarcasas = data.got.filter(casa => casa.family == "viper" || casa.family == "Sand");
        } else if (AlmacenarIdBoton === "naharin") {
          filtrarcasas = data.got.filter(casa => casa.family == "Naharis");
        } else if (AlmacenarIdBoton === "tarth") {
          filtrarcasas = data.got.filter(casa => casa.family == "Tarth");
        }else if (AlmacenarIdBoton === "bolton") {
          filtrarcasas = data.got.filter(casa => casa.family == "Bolton");
        }else if (AlmacenarIdBoton === "genteLibre") {
          filtrarcasas = data.got.filter(casa => casa.family == "Free Folk");
        }else if (AlmacenarIdBoton === "none") {
          filtrarcasas = data.got.filter(casa => casa.family == "House Clegane" || casa.family == "House Baelish"|| casa.family == "House Seaworth"|| casa.family == "Unknown"|| casa.family == "Naathi"|| casa.family == "None"|| casa.family == "Lorathi"|| casa.family == "Sparr  ow"|| casa.family == "Unkown"|| casa.family == "Lorath"|| casa.family == "Naathi"|| casa.family == "None"|| casa.family == "Lorathi"|| casa.family == "Sparr  ow"|| casa.family == "Unkown"|| casa.family == "Lorath"|| casa.family == "Worm"|| casa.family == ""|| casa.family == "Qyburn"|| casa.family == "Bronn");
        }
        const seccionCasas = document.querySelector("[name='informacioncasa']").outerHTML;
        document.querySelector("[name='informacioncasa']").style.display = "none";
 
        function sortData(data, sortBy, sortOrder) {
          if (sortOrder === "ascendente") {
            return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
          } else if (sortOrder === "descendente") {
            return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
          } else {
            return data;
          }
        }     
       // sortData(filtrarcasas, "fullName", "ascendente");
        //aqui
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
            let informacionOrdenada = sortData(filtrarcasas, "fullName", "ascendente");
            actualizarResultados(informacionOrdenada);
           
          } else {
            document.querySelector("#deTodo").innerHTML = ''
            document.getElementById("datos").innerHTML = ''
            document.querySelector("[name='informacioncasa']").removeAttribute('style');
            vista2.style.display = "none";
            vista3.style.display = "block";
            botonContinuar.style.display = "block";
            let informacionOrdenadaDesc = sortData(filtrarcasas, "fullName", "descendente");
            actualizarResultados(informacionOrdenadaDesc);
          }
        });
        
        function actualizarResultados(data) {
          console.log(data);
          const seccionCasas2 = document.querySelector("[name='informacioncasa']").outerHTML;
          document.querySelector("[name='informacioncasa']").style.display = "none";
          for (let i = 0; i < data.length; i++) {
            let AcumularAtributos2 = seccionCasas2;
            let nombre = data[i].fullName;
            let titulo = data[i].title;
            let familia = data[i].family;
            let imagen = data[i].imageUrl;
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
        for (let i = 0; i < filtrarcasas.length; i++) {
          let AcumularAtributos = seccionCasas;
          let nombre = filtrarcasas[i].fullName;
          let titulo = filtrarcasas[i].title;
          let familia = filtrarcasas[i].family;
          let imagen = filtrarcasas[i].imageUrl;
          let nacimiento = filtrarcasas[i].born;
          let muerte = filtrarcasas[i].death;

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
          console.log(AcumularAtributos);
          document.querySelector("#deTodo").innerHTML += AcumularAtributos;

        }
        vista1.style.display = "none";
        vista2.style.display = "none";
        vista3.style.display = "block";
  }
  botonEnviar.forEach(boton => {
    boton.addEventListener("click", () => cuandosehaceclick(boton));
  });
  let home = document.getElementById("home");
  home.addEventListener("click", function () {
    vista1.style.display = "block";
    vista2.style.display = "none";
    vista3.style.display = "none";
  });
  let retornar = document.getElementById("retornar");
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


