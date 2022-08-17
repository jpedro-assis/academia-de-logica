const repeatLetter = require('../src/repeatLetter.js');

describe('Encontre quantas vezes a letra se repete em uma string', () => {
  it('Retorne 2 quando a letra `m` for passada na string `how many times does the character occur in this sentence?`', () => {
    expect(repeatLetter('m', 'how many times does the character occur in this sentence?')).toBe(2);
  });
  it('Retorne 4 quando a letra `h` for passada na string `how many times does the character occur in this sentence?`', () => {
    expect(repeatLetter('h', 'how many times does the character occur in this sentence?')).toBe(4);
  });
  it('Retorne 1 quando a letra `?` for passada na string `how many times does the character occur in this sentence?`', () => {
    expect(repeatLetter('?', 'how many times does the character occur in this sentence?')).toBe(1);
  });
  it('Retorne 0 quando a letra `z` for passada na string `how many times does the character occur in this sentence?`', () => {
    expect(repeatLetter('z', 'how many times does the character occur in this sentence?')).toBe(0);
  });
});
