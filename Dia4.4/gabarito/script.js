//1
function quadrilatero(base, altura) {
  let resultado = {
    perimetro: (2 * base) + (2 * altura),
    area: (base * altura)
  };
  return resultado;
};

//2
function imparesEPares(numeros) {

  let resultado = {
    par: 0,
    impar: 0,
  };

  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[i] % 2 == 0) {
      resultado.par += 1;
    } else {
      resultado.impar += 1;
    };
  };
  return resultado;
};
console.log(imparesEPares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//3

function verificaString(palavra, ending) {
  let resultado = false;
  if (palavra.endsWith(ending)) {
    resultado = true;
  }
  return resultado;
}
console.log(verificaString('trybe', 'be'));


//3 com split 

function verificaFimPalavra(word, ending) {
  let resultado = word.split(ending);
  if (resultado[resultado.length - 1] === '') {
    return true;
  }
  else
    return false;
}