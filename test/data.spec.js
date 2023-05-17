import { filterData, sortData} from '../src/data.js';
import data from '../src/data/got/got.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
 


  it('deberia retornar 10 para"data"',() => {
    const arreglo = filterData(data,"stark")
    expect(arreglo.length).toBe(10);
  });
  it('deberia retornar 3 para"data"',() => {
    const arreglo = filterData(data,"targaryen")
    expect(arreglo.length).toBe(3);
  }); 
  it('deberia retornar 5 para"data"',() => {
    const arreglo = filterData(data,"baratheon")
    expect(arreglo.length).toBe(5);
  });
  it('deberia retornar 5 para"data"',() => {
    const arreglo = filterData(data,"lannister")
    expect(arreglo.length).toBe(5);
  });
  it('deberia retornar 2 para"data"',() => {
    const arreglo = filterData(data,"mormont")
    expect(arreglo.length).toBe(2);
  });
  it('deberia retornar 2 para"data"',() => {
    const arreglo = filterData(data,"tyrell")
    expect(arreglo.length).toBe(2);
  });
  it('deberia retornar 3 para"data"',() => {
    const arreglo = filterData(data,"greyjoy")
    expect(arreglo.length).toBe(3);
  });
  it('deberia retornar 1 para"data"',() => {
    const arreglo = filterData(data,"martell")
    expect(arreglo.length).toBe(1);
  });
  it('deberia retornar 1 para"data"',() => {
    const arreglo = filterData(data,"naharin")
    expect(arreglo.length).toBe(1);
  });
  it('deberia retornar 1 para"data"',() => {
    const arreglo = filterData(data,"tarth")
    expect(arreglo.length).toBe(1);
  });
  it('deberia retornar 2 para"data"',() => {
    const arreglo = filterData(data,"bolton")
    expect(arreglo.length).toBe(2);
  });
  it('deberia retornar 2 para"data"',() => {
    const arreglo = filterData(data,"genteLibre")
    expect(arreglo.length).toBe(2);
  });
  it('deberia retornar 14 para"data"',() => {
    const arreglo = filterData(data,"none")
    expect(arreglo.length).toBe(14);
  });
  
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
 
  it('deberia retornar de forma ascendente para "data"',() => {
    const arreglo = sortData(data.got, "fullName", "ascendente")
    expect(arreglo[0].fullName).toBe("Arya Stark");
  });
  it('deberia retornar de forma descendente para "data"',() => {
    const arreglo = sortData(data.got, "fullName", "descendente")
    expect(arreglo[0].fullName).toBe("Ygritte");
  });
  
  it('deberia retornar el arreglo "data"',() => {
    const arreglo = sortData(data.got,"fullName")
    expect(arreglo[0].fullName).toBe("Ygritte");
  });
});