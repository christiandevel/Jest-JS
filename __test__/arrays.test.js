import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobar que existe un elemento', () => {

  test('Contiene una banana', () => {
    expect(arrayFruits()).toContain('banana'); 
  });

  test('No contiene un platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });

  // test('Comprobar el tamaño de un arreglo', () => {
  //   expect(arrayColors()).toHaveLength(5);
  // })
  
  
})
