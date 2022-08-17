// Exercício 1
const isEven = (number) => number % 2 === 0;

// Exercício 2
const sumEvenNumbers = (numbers) => {
  let sum = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
};

// Exercício 3
const isNumber = (param) => typeof param === 'number';

// Exercício 4
const welcomeUser = (username) => {
  if (typeof username !== 'string' || username.length < 1) {
    return 'Parâmetro inválido.';
  }
  return `Boas vindas, ${username}!`;
}

// Exercício 5
const freeFallVelocity = (timeOfFall) => {
  const gravitationalAcceleration = 9.8;
  return gravitationalAcceleration * timeOfFall;
}

// Exercício 6
const isZero = (number) => (number === 0) ? 'Zero' : 'Not zero';

// Exercício 7
const allEqual = (array) => {
  if (!Array.isArray(array) || array.length <= 1) {
    return 'Parâmetro inválido.';
  }

  for (let value of array) {
    if (value !== array[0]) {
      return false;
    }
  }

  return true;
};
