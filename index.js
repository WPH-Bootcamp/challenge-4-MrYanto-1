const prompt = require('prompt-sync')({ sigint: true });

// Introduction

console.log('Terminal Calculator');
console.log('====================');
console.log('What it can do:');
console.log("-Find the result you're looking");
console.log('-Integer or Decimals');
console.log('-Positive or Negative number');
console.log('-Even or Odd number');

// Available Operators

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const modulo = function (a, b) {
  return a % b;
};

const power = function (a, b) {
  return a ** b;
};

// Ask
const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulo,
  '**': power,
};

function getNumber(label) {
  while (true) {
    const input = prompt(label);
    const num = Number(input);

    if (num.trim() === '' || isNaN(num)) {
      console.log('Invalid Input, please enter a number!');
    } else {
      return num;
    }
  }
}
