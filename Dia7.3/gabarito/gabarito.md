# Gabarito

Esse é o gabarito da academia de lógica dia 7.2, abaixo estão a resolução de cada exercício.

# isEven

```
expect(isEven(2)).toBe('esse valor é par');
expect(isEven(3)).toBe('esse valor é ímpar');
```

# sumEven

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
expect(sumEven(arr)).toEqual(30);

const arr = [1, 3, 5, 7, 9, 11];
expect(sumEven(arr)).toEqual(0);

expect(sumEven()).toEqual(0);
```

# isNumber

```
expect(isNumber(10)).toBeTruthy();

expect(isNumber('20')).toBeFalsy();
expect(isNumber('string')).toBeFalsy();

expect(isNumber([20, 10, 30, 50, 90])).toBeFalsy();
expect(isNumber(['1', '2', '3', '4'])).toBeFalsy();

expect(isNumber({ a: 10, b: 20, c: 30 })).toBeFalsy();
```

# welcomeUser

```
expect(welcomeUser('Gabriel')).toMatch('Boas-vindas, Gabriel!');


expect(welcomeUser('a')).toMatch(
  'O parâmetro username deve conter pelo menos um caracter!',
);
expect(welcomeUser('')).toMatch(
  'O parâmetro username deve conter pelo menos um caracter!',
);


expect(welcomeUser(['Carlos'])).toMatch(
  'O parâmetro username deve ser do tipo texto!',
);
expect(welcomeUser()).toMatch(
  'O parâmetro username deve ser do tipo texto!',
);
```

# finalSpeed

```
expect(finalSpeed(5)).toEqual(49);

expect(finalSpeed('5')).toEqual(0);
expect(finalSpeed('string')).toEqual(0);
expect(finalSpeed(['5'])).toEqual(0);
expect(finalSpeed([5])).toEqual(0);
expect(finalSpeed({ a: 5 })).toEqual(0);

expect(finalSpeed()).toEqual(0);
```

# shoppingList

```
expect(shoppingList('refrigerante de laranja')).toContain(
  'refrigerante de laranja',
);

expect(shoppingList('filé de peixe')).toContain('filé de peixe');

expect(shoppingList('farinha de trigo')).toContain('farinha de trigo');

const arr = [
  'suco de maracujá',
  'maçã',
  'sacos de lixo',
  'papel toalha',
  'leite',
];
expect(shoppingList()).toEqual(arr);
```
