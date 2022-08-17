const finalSpeed = require('../src/finalSpeed.js');

describe('Retorna o cálculo da velocidade final de um objeto em queda livre', () => {
  it('Retorna `49` caso a função seja chamanda com o argumento 5', () => {
    expect(finalSpeed(5)).toBe(49);
  });
  it('Retorna `0` caso o parâmetro seja algum tipo diferente de `number`', () => {
    expect(finalSpeed(Number)).toBe(0);
  });
  it('Retorna `0` caso não seja passado parâmetros', () => {
    expect(finalSpeed()).toBe(0);
  });
});
