describe('Comparadores Comunes', () => {

  const user = {
    name: "Christian",
    lastName: 'Moreno'
  }

  const user2 = {
    name: "Christian",
    lastName: "Moreno"
  }

  // --------> Validamos que dos objetos sean iguales

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  

  // --------> Validamos que dos objetos sean diferente

  // test('No son exactamente iguales', () => {
  //   expect(user).not.toEqual(user2);
  // })

})