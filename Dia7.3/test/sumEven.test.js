const sumEven = require('../src/sumEven.js');

describe('Soma de números pares que vem no array', () => {
  it('Retorne a soma de todos os números pares', () => {
    expect(sumEven([2,8])).toBe(10);
  });
  it('Retorne `0` se o array não tenha ao menos um número par', () => {
    expect(sumEven([1,3,7])).toBe(0);
  });
  it('Retorne `0` se o parâmetro da função estiver vazio', () => {
    expect(sumEven()).toBe(0);
  });
});
