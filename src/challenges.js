// Desafio 1

function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2

function calcArea(base, altura) {
 return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ");
  return resultado;
  }  
  
// Desafio 4
function concatName(string) {
  let primeiraString = string[0];
  let ultimaString = string[string.length -1];
  return `${ultimaString}, ${primeiraString}`
}
  
// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  ties = ties * 1
  return wins + ties;
}

// Desafio 6
function highestCount(nums) {
  let numeroMaior = nums[0];
  let contador = 0;

  for(let index = 0; index < nums.length; index += 1) {
    if(nums[index] > numeroMaior) {
      numeroMaior = nums[index];
    }      
  }
  for(let index2 = 0; index2 < nums.length; index2 += 1) {
    if(numeroMaior === nums[index2]) {
      contador = contador + 1;
    }
  }
  return contador
}



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
  techList,
};
