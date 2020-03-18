import engine from '../index.js';
import getRandomIntInclusive from '../randomNumMaker.js';

const gameDescription = 'What number is missing in the progression?';
const getProgression = (step) => {
  const result = [];
  result[0] = getRandomIntInclusive(1, 99);
  const iter = (n, acc) => {
    if (acc.length === 10) {
      return acc;
    }
    const next = acc[n - 1] + step;
    return iter(n + 1, acc.concat(next));
  };
  return iter(1, result);
};
const getGameData = () => {
  // d is common difference of progression
  const d = getRandomIntInclusive(1, 99);
  const progression = getProgression(d);
  const progressionClone = progression.slice();
  const randomPosition = Math.floor(Math.random() * (progression.length));
  const correctAnswer = progression[randomPosition];
  // progression for question
  progressionClone[randomPosition] = '..';
  const question = progressionClone.join(' ');
  return [question, String(correctAnswer)];
};
export default () => engine(gameDescription, getGameData);
