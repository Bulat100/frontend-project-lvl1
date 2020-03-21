import readlineSync from 'readline-sync';

const attemptsToWin = 3;
const getName = readlineSync.question('May I have your name?');
export default (description, getGameData) => {
  console.log(`Hello, ${getName}!`);
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const iter = (attempts) => {
    if (attempts === attemptsToWin) {
      console.log(`Congratulations, ${getName}`);
      return;
    }
    const newQuestion = getGameData();
    const [content, correctAnswer] = newQuestion;
    readlineSync.question(`Question: ${content}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${getName}!`);
      return;
    }
    iter(attempts + 1);
  };
  iter(0);
};
