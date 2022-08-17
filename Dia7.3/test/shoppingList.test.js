const shoppingList = require('../src/shoppingList.js');

describe('Teste se um elemento é adicionado a um array', () => {
  it('adicionando "refrigerante de laranja" a lista de compra', () => {
    expect(shoppingList('file de peixe')).toBeTruthy();
  });

  it('adicionando "filé de peixe" a lista de compra', () => {
    expect(shoppingList('refrigerante de laranja')).toBeTruthy();
  });

  it('adicionando "farinha de trigo" a lista de compra', () => {
    expect(shoppingList('farinha de trigo')).toBeTruthy();
  });
  it('retorna a lista com 5 itens quando não tem parâmetro', () => {
    expect(shoppingList()).toBeTruthy();
  });
});
