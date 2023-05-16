
export function filterData(data,condition){
  let filtrarcasas = []
  if (condition === "stark") {
    filtrarcasas = data.got.filter(casa => casa.family === "House Stark" || casa.family === "Stark");
  } else if (condition === "targaryen") {
    filtrarcasas = data.got.filter(casa => casa.family === "House Targaryen" || casa.family === "Targaryan");
  } else if (condition === "baratheon") { 
    filtrarcasas = data.got.filter(casa => casa.family === "House Baratheon" || casa.family === "Baratheon");
  }
  else if (condition === "lannister") { 
    filtrarcasas = data.got.filter(casa => casa.family === "House Lannister" || casa.family === "House Lanister" || casa.family === "Lannister");
  }
  else if (condition === "mormont") { 
    filtrarcasas = data.got.filter(casa => casa.family === "Mormont");
  } else if (condition === "tyrell") {
    filtrarcasas = data.got.filter(casa => casa.family === "House Tyrell" || casa.family === "Tyrell");
  } else if (condition === "greyjoy") { 
    filtrarcasas = data.got.filter(casa => casa.family === "House Greyjoy" || casa.family === "House Greyjoy" || casa.family === "Greyjoy");
  } else if (condition === "martell") { 
    filtrarcasas = data.got.filter(casa => casa.family === "viper" || casa.family === "Sand");
  } else if (condition === "naharin") { 
    filtrarcasas = data.got.filter(casa => casa.family === "Naharis");
  } else if (condition === "tarth") { 
    filtrarcasas = data.got.filter(casa => casa.family === "Tarth");
  }else if (condition === "bolton") { 
    filtrarcasas = data.got.filter(casa => casa.family === "Bolton");
  }else if (condition === "genteLibre") { 
    filtrarcasas = data.got.filter(casa => casa.family === "Free Folk");
  }else if (condition === "none") { 
    filtrarcasas = data.got.filter(casa => casa.family === "House Clegane" || casa.family === "House Baelish"|| casa.family === "House Seaworth"|| casa.family === "Unknown"|| casa.family === "Naathi"|| casa.family === "None"|| casa.family === "Lorathi"|| casa.family === "Sparr  ow"|| casa.family === "Unkown"|| casa.family === "Lorath"|| casa.family === "Naathi"|| casa.family === "None"|| casa.family === "Lorathi"|| casa.family === "Sparr  ow"|| casa.family === "Unkown"|| casa.family === "Lorath"|| casa.family === "Worm"|| casa.family === ""|| casa.family === "Qyburn"|| casa.family === "Bronn");
  }
  return filtrarcasas;
}
export function sortData(data, sortBy, sortOrder) {
  if (sortOrder === "ascendente") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === "descendente") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  return data;
}
     


