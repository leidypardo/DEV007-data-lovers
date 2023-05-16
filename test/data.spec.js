import { filterData, sortData} from '../src/data.js';
import data from '../src/data/got/got.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
 
  it('deberia retornar 10 para"data"',() => {
    const arreglo = filterData(data,"star")
    expect(arreglo.length).toBe(0);
  }); 

  it('deberia retornar 10 para"data"',() => {
    const arreglo = filterData(data,"stark")
    expect(arreglo.length).toBe(10);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
 
  it('deberia retornar 10 para"data"',() => {
    const arreglo = sortData(data.got, "fullName", "ascendente")
    expect(arreglo[0].fullName).toBe("Arya Stark");
  });
});