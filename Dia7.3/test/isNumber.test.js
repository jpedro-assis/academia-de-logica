const isNumber = require('../src/isNumber.js');

describe('Testa se o tipo de dado do parâmetro é um número', () => {
  it('Retorna `true` se passar um número como parâmetro da função', () => {
    expect(isNumber(10)).toBeTruthy();
  });
  it('Retorna `false` se passar uma string como parâmetro da função', () => {
    expect(isNumber('1')).toBeFalsy();
  });
  it('Retorna `false` se passar uma array como parâmetro da função', () => {
    expect(isNumber([])).toBeFalsy();
  });
  it('Retorna `false` se passar um objeto como parâmetro da função', () => {
    expect(isNumber({})).toBeFalsy();
  });
});
