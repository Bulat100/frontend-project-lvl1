import engine from '../src/index.js';
import getRandomIntInclusive from '../src/randomNumMaker.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = () => {
  const isEven = (number) => number % 2 === 0;
  const randomNum = getRandomIntInclusive(1, 99);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const questionContent = `${randomNum}`;
  const data = [questionContent, correctAnswer];
  return data;
};
export default () => engine(gameDescription, gameData);
