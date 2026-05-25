const prompt = require('prompt-sync')({ sigint: true });

// Introduction

console.log('Terminal Calculator');
console.log('====================');
console.log('What it can do:');
console.log("-Find the result you're looking");
console.log('-Integer or Decimals');
console.log('-Positive or Negative number');
console.log('-Even or Odd number \n');

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

    if (input.trim() === '' || isNaN(num)) {
      console.log('Invalid Input, please enter a number!');
    } else {
      return num;
    }
  }
}

function getOperator() {
  while (true) {
    const op = prompt('Pick an operator (+, -, *, /, %, **): ');
    if (operations[op.trim()]) {
      return op.trim();
    }

    console.log(
      `Invalid operator! Choose from ${Object.keys(operations.join(', '))}    `
    );
  }
}

// Main Loop

while (true) {
  const num1 = getNumber('Enter your first number: ');
  const op = getOperator();
  const num2 = getNumber('Enter your second number: ');

  const result = operations[op](num1, num2);
  const IntDec = Number.isInteger(result) ? 'Integer' : 'Decimals';
  const PosNeg = result < 0 ? 'Negative' : 'Positive';
  const EvenOdd = result % 2 === 0 ? 'Even' : 'Odd';
  console.log(`\n Your result of ${num1} ${op} ${num2} is ${result}`);
  console.log(' =============================');
  console.log(' About your result:');
  console.log(`  Integer or Decimals: ${IntDec}`);
  console.log(`  Positive or Negative: ${PosNeg}`);
  console.log(`  Even or Odd: ${EvenOdd}`);

  const again = prompt('Want to calculate another number? y/n: ').trim()
    .toLowerCase;
  if (again !== 'y') break;
}
