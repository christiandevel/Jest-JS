import { sumar, multiplicar, restar, dividir } from '../maths';

describe('Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1,1)).toBe(2);
  });
  test('Prueba de multiplicar', () => {
    expect(multiplicar(5,4)).toBe(20);
  });
  test('Prueba de resta', () => {
    expect(restar(10,6)).toBe(4);
  });
  test('Prueba de Divicion', () => {
    expect(dividir(45,3)).toBe(15);
  });
});