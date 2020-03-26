import startEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (start, step, length) => {
  const iter = (index, current, progression) => {
    if (index > length) {
      return progression;
    }
    return iter(index + 1, current + step, [...progression, current]);
  };
  return iter(1, start, []);
};
const getGameData = () => {
  // common difference of progression
  const difference = getRandomIntInclusive(1, 99);
  const firstMember = getRandomIntInclusive(1, 99);
  const hiddenMemberIndex = getRandomIntInclusive(0, (progressionLength - 1));
  const progression = generateProgression(firstMember, difference, progressionLength);
  const progressionClone = progression.slice();
  const correctAnswer = progression[hiddenMemberIndex];
  // progression for question
  progressionClone[hiddenMemberIndex] = '..';
  const question = progressionClone.join(' ');
  return [question, String(correctAnswer)];
};
export default () => startEngine(gameDescription, getGameData);
