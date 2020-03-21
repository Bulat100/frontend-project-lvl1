import engine from '../index.js';
import getRandomIntInclusive from '../randomNumMaker.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (start, step, length) => {
  const iter = (counter, num, acc) => {
    if (counter > length) {
      return acc;
    }
    return iter(counter + 1, num + step, [...acc, num]);
  };
  return iter(1, start, []);
};
const getGameData = () => {
  // d is common difference of progression
  const d = getRandomIntInclusive(1, 99);
  const startNum = getRandomIntInclusive(1, 99);
  const randomPosition = getRandomIntInclusive(0, 9);
  const progression = generateProgression(startNum, d, progressionLength);
  const progressionClone = progression.slice();
  const correctAnswer = progression[randomPosition];
  // progression for question
  progressionClone[randomPosition] = '..';
  const question = progressionClone.join(' ');
  return [question, String(correctAnswer)];
};
export default () => engine(gameDescription, getGameData);
