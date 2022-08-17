const longestWord = require('../src/longestWord.js');

describe('Encontre a maior palavra dentro de um array', () => {
  it('Retorne `candy` caso o array seja `["I", "need", "candy"]`', () => {
    expect(longestWord(["I", "need", "candy"])).toBe(`candy`);
  });
  it('Retorne `help` caso o array seja `["help", "me"]`', () => {
    expect(longestWord(["help", "me"])).toBe(`help`);
  });
  it('Retorne `Array inválido!` caso o array contenha algum item no array que não seja uma string', () => {
    expect(longestWord([])).toBe(`Array inválido!`);
  });
  it('Retorne `Array inválido!` caso não envie parâmetros', () => {
    expect(longestWord()).toBe(`Array inválido!`);
  });
  it('Retorne `Array inválido!` caso o array esteja vazio', () => {
    expect(longestWord([])).toBe(`Array inválido!`);
  });
});
