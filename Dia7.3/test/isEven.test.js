const isEven = require('../src/isEven.js');

describe('Escreva uma função que dado um valor numérico, retorne se o valor é par', () => {
  it('Caso o valor do parâmetro seja 2, retorna a string "esse valor é par"', () => {
    expect(isEven(2)).toBe('esse valor é par');
  });
  it('Caso o valor do parâmetro seja 3, retorna a string "esse valor é ímpar"', () => {
    expect(isEven(3)).toBe('esse valor é ímpar');
  });
});
