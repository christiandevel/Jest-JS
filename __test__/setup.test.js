// Despues de cada prueba

// afterEach(() => console.log('Despues de Cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// Antes de cada prueba
// beforeAll(() => console.log('Antes de todas las pruebas'));
// beforeEach(() => console.log('Antes de cada prueba'));

import { isNull } from '../true';


describe('Probar resultados nulos', () => {
  test('Nulo' , () => {
    expect(isNull()).toBeNull();
  });
});

