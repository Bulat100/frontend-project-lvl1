import engine from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
// random number from min to max.
const getRandomIntInclusive = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin;
};
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
