import startEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'Answer yes if given number is prime. Otherwise answer no.';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor, n) => {
    if (divisor === n) {
      return true;
    }
    if (n % divisor === 0) {
      return false;
    }
    return iter(divisor + 1, n);
  };
  return iter(2, number);
};
const getGameData = () => {
  const randomNum = getRandomIntInclusive(1, 999);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = String(randomNum);
  return [question, correctAnswer];
};
export default () => startEngine(gameDescription, getGameData);
