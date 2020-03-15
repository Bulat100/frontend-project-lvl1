import engine from '../src/index.js';

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

const gameData = () => {
  // random number from 0 to 99.
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  // get random operation from array.
  const operation = operations[Math.floor(Math.random() * (operations.length))];
  const correctAnswer = getResult(firstNum, secondNum, operation);
  const questionContent = `${firstNum} ${operation} ${secondNum}`;
  const data = [questionContent, String(correctAnswer)];
  return data;
};
export default () => engine(gameDescription, gameData);
