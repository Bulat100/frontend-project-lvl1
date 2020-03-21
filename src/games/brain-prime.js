import engine from '../index.js';
import getRandomIntInclusive from '../randomNumMaker.js';

const gameDescription = 'Answer yes if given number is prime. Otherwise answer no.';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (counter, givenNum) => {
    if (counter === givenNum) {
      return true;
    }
    if (givenNum % counter === 0) {
      return false;
    }
    return iter(counter + 1, givenNum);
  };
  return iter(2, num);
};
const getGameData = () => {
  const randomNum = getRandomIntInclusive(1, 999);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = String(randomNum);
  return [question, correctAnswer];
};
export default () => engine(gameDescription, getGameData);
