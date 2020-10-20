describe('Comprobando cadenas de texto', () => {

  const text = 'Un bonito texto';

  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/);
  });

  test('No debe contener el siguiente texto', () => {
    expect(text).not.toMatch(/dia/);
  });

  test('Validar valor de caracteres', () => {
    expect(text).toHaveLength(15);
  })
  
})