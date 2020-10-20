import { isNull, isTrue, isFalse, isUndefined } from '../true';

/**
    .toBeNull()       DATOS NULL
    .toBeTruthy()     DATOS VERDADEROS
    .toBeFalsy()      DATOS FALSOS
    .toBeUndefined()  DATOS INDEFINIDOS
*/


describe('Probar resultados nulos', () => {
  test('Nulo' , () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados true', () => {
  test('True', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados Falsos', () => {
  test('False', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados Undefined', () => {
  test('Undefined ', () => {
    expect(isUndefined()).toBeUndefined();
  });
})
