import readlineSync from 'readline-sync';

const attemptsToWin = 3;
export default (description, getGameData) => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getName}!`);
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const iter = (attempt) => {
    if (attempt === attemptsToWin) {
      console.log(`Congratulations, ${getName}`);
      return;
    }
    const gameData = getGameData();
    const [question, correctAnswer] = gameData;
    readlineSync.question(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${getName}!`);
      return;
    }
    iter(attempt + 1);
  };
  iter(0);
};
