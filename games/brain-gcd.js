import engine from '../src/index.js';
import getRandomIntInclusive from '../src/randomNumMaker.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const gameData = () => {
  const firstNum = getRandomIntInclusive(1, 99);
  const secondNum = getRandomIntInclusive(1, 99);
  const correctAnswer = gcd(firstNum, secondNum);
  const questionContent = `${firstNum} ${secondNum}`;
  const data = [questionContent, String(correctAnswer)];
  return data;
};
export default () => engine(gameDescription, gameData);
