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
function catAndMouse(mouse, cat1, cat2) {
  let posicoes = [mouse, cat1, cat2]
  if((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))){
    return "cat1";
  } else if((Math.abs(mouse - cat2)) < (Math.abs(mouse - cat1))){
    return "cat2";
  } else if((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))){
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
    for(let entrada of array){
      if(entrada %3 === 0 && entrada %5 === 0){
       resultado.push('fizzBuzz');
      } else if(entrada%3 === 0){
       resultado.push('fizz');
      } else if(entrada%5 === 0){
      resultado.push('buzz');
      } else 
      resultado.push('bug!');
    }
  return resultado;
}


// Desafio 9
function encode(strings) {
  for (let index = 0; index < strings.length; index += 1) {

    if (strings[index] === "a") {
      strings = strings.replace("a", "1")
    } else if (strings[index] === "e") {
      strings = strings.replace("e", "2")
    } else if (strings[index] === "i") {
      strings = strings.replace("i", "3")
    } else if (strings[index] === "o") {
      strings = strings.replace("o", "4")
    } else if (strings[index] === "u") {
      strings = strings.replace("u", "5")
    } else {

    }

  }
  return strings;
}


function decode(strings) {
  for (let index = 0; index < strings.length; index += 1) {

    if (strings[index] === "1") {
      strings = strings.replace("1", "a")
    } else if (strings[index] === "2") {
      strings = strings.replace("2", "e")
    } else if (strings[index] === "3") {
      strings = strings.replace("3", "i")
    } else if (strings[index] === "4") {
      strings = strings.replace("4", "o")
    } else if (strings[index] === "5") {
      strings = strings.replace("5", "u")
    } else {

    }

  }
  return strings;
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
