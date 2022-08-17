const welcomeUser = require('../src/welcomeUser.js');

describe('Retorne Boas-vindas a nova pessoa usuária', () => {
  it('Retorne `Boas-vindas, Gabriel!` caso `Gabriel` seja o nome passado como parâmetro', () => {
    expect(welcomeUser(`Gabriel`)).toBe(`Boas-vindas, Gabriel!`);
  });
  it('Retorna `O parâmetro username deve conter pelo menos um caracter!` caso a quantidade de caracteres for menor que 1;', () => {
    expect(welcomeUser('G')).toBe(`O parâmetro username deve conter pelo menos um caracter!`);
  });
  it('Retorna `O parâmetro username deve ser do tipo texto!` caso o parâmetro não seja do tipo `string`', () => {
    expect(welcomeUser(String)).toBe(`O parâmetro username deve ser do tipo texto!`);
  });
});
