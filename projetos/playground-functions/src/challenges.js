// Desafio 1
function compareTrue(par1, par2) {
  let resultado = '';

  if (par1 && par2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let pos1 = array[0];
  let ultimaPos = array[array.length - 1];

  return `${ultimaPos}, ${pos1}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  const maior = array.reduce((a, b) => Math.max(a, b));
  let cont = 0;
  for (let n = 0; n < array.length; n += 1) {
    if (array[n] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distGato1 = Math.abs(mouse - cat1);
  const distGato2 = Math.abs(mouse - cat2);

  if (distGato1 < distGato2) {
    return 'cat1';
  }
  if (distGato1 === distGato2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numeros) {
  let res = [];
  numeros.forEach((n) => {
    if (n % 5 === 0 && n % 3 === 0) {
      res.push('fizzBuzz');
    } else if (n % 3 === 0) {
      res.push('fizz');
    } else if (n % 5 === 0) {
      res.push('buzz');
    } else {
      res.push('bug!');
    }
  });
  return res;
}

// Desafio 9
function encode(string) {
  let str = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4');
  let str1 = str.replace(/u/g, '5');
  return str1;
}

function decode(string) {
  let str = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o');
  let str1 = str.replace(/5/g, 'u');
  return str1;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
