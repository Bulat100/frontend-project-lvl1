import startEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isEven = (number) => number % 2 === 0;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const randomNum = getRandomIntInclusive(1, 99);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = String(randomNum);
  return [question, correctAnswer];
};
export default () => startEngine(gameDescription, getGameData);
