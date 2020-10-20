import { numbers } from '../numbers';

/**
 * 
    .toBeGreaterThan()           MAYOR: >
    .toBeGreaterThanOrEqual()    MAYOR IGUAL: >=
    .toBeLessThan()              MENOR: <
    .toBeLessThanOrEqual()       MERNOR IGUAL: <=
    .toBeCloseTo()               VALORES FLOTANTES 
 */

describe('Comparar Numeros', () => {

  test('Mayor qué', () => {
      expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  
  test('Mayor o igual que', () => {
    expect(numbers(3, 3)).toBeGreaterThanOrEqual(6);
  });

  test('Menor que', () => {
    expect(numbers(4, 4)).toBeLessThan(10);
  });

  test('Menor o igual que', () => {
    expect(numbers(5, 5)).toBeLessThanOrEqual(10);
  });

  test('Valores Flotantes ', () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4)
  })
  
})

