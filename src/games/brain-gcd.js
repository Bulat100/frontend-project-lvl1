import startEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const getGameData = () => {
  const firstNum = getRandomIntInclusive(1, 99);
  const secondNum = getRandomIntInclusive(1, 99);
  const correctAnswer = gcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  return [question, String(correctAnswer)];
};
export default () => startEngine(gameDescription, getGameData);
