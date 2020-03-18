import engine from '../index.js';
import getRandomIntInclusive from '../randomNumMaker.js';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getResult = (a, b, operation) => {
  if (operation === '+') {
    return a + b;
  }
  if (operation === '-') {
    return a - b;
  }
  return a * b;
};

const getGameData = () => {
  // random number from 1 to 99.
  const firstNum = getRandomIntInclusive(1, 99);
  const secondNum = getRandomIntInclusive(1, 99);
  // get random operation from array.
  const operation = operations[Math.floor(Math.random() * (operations.length))];
  const correctAnswer = getResult(firstNum, secondNum, operation);
  const question = `${firstNum} ${operation} ${secondNum}`;
  return [question, String(correctAnswer)];
};
export default () => engine(gameDescription, getGameData);
