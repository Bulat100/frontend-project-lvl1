import engine from '../src/index.js';
import getRandomIntInclusive from '../src/randomNumMaker.js';

const gameDescription = 'Answer yes if given number is prime. Otherwise answer no.';
const isPrime = (num) => {
  if (num === 1) {
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
const gameData = () => {
  const randomNum = getRandomIntInclusive(1, 999);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const questionContent = `${randomNum}`;
  const data = [questionContent, correctAnswer];
  return data;
};
export default () => engine(gameDescription, gameData);
