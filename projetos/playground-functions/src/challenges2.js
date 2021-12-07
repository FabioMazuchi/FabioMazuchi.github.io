// Desafio 10
function techList(array, nome) {
  array = array.sort();

  if (array.length !== 0) {
    return array.map((el) => ({
      tech: el,
      name: nome,
    }));
  }
  return 'Vazio!';
}

const templatePhone = (array) => {
  let string = '(';
  array.forEach((n, i) => {
    if (i < 2) {
      string += n;
    } else if (i < 3) {
      string += `) ${n}`;
    } else if (i < 7) {
      string += n;
    } else if (i < 8) {
      string += `-${n}`;
    } else {
      string += n;
    }
  });
  return string;
};

const checkMenorZero = (array) => array.some((n) => n < 0 || n > 9);

const checkRepeat = (array) => {
  const newArray = array.map((n) => n.toString());

  const res = newArray.reduce((acc, atual) => {
    acc[atual] = (acc[atual] || 0) + 1;
    return acc;
  }, {});
  return Object.values(res).some((num) => num >= 3);
};

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (checkMenorZero(array) || checkRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return templatePhone(array);
}

const triangBmenosC = (a, b, c) => {
  const absBc = Math.abs(b - c);

  if (absBc < a && a >= (b + c)) {
    return false;
  }
  return true;
};

const triangAmenosC = (a, b, c) => {
  const absAc = Math.abs(a - c);

  if (absAc < b && b >= (a + c)) {
    return false;
  }
  return true;
};

const triangAmenosB = (a, b, c) => {
  const absAb = Math.abs(a - b);

  if (absAb < c && c >= (a + c)) {
    return false;
  }
  return true;
};

// Desafio 12
function triangleCheck(a, b, c) {
  if (triangBmenosC(a, b, c) && triangAmenosC(a, b, c) && triangAmenosB(a, b, c)) {
    return true;
  }
  return false;
}

const searchString = (string) => {
  let soma = 0;
  const res = string.split('').filter((s) => !s.search(/[1-9]/)).map((str) => Number(str));
  res.forEach((n) => {
    soma += n;
  });
  return soma;
};

// Desafio 13
function hydrate(string) {
  let soma = searchString(string);
  let resultado = '';

  if (soma > 1) {
    resultado = `${soma} copos de água`;
  } else {
    resultado = `${soma} copo de água`;
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
