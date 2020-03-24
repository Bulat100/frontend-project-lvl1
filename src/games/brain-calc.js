import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const getResultOfCalc = (first, second, operator) => {
  switch (operator) {
    case '-':
      return first - second;

    case '+':
      return first + second;

    case '*':
      return first * second;

    default:
      return false;
  }
};

const getGameData = () => {
  // random number from 1 to 99.
  const firstNum = getRandomIntInclusive(1, 99);
  const secondNum = getRandomIntInclusive(1, 99);
  // get random operation from array.
  const operator = operators[getRandomIntInclusive(0, (operators.length - 1))];
  const correctAnswer = getResultOfCalc(firstNum, secondNum, operator);
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [question, String(correctAnswer)];
};
export default () => engine(gameDescription, getGameData);
