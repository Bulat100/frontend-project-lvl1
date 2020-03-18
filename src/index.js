import readlineSync from 'readline-sync';

export default (rules, gameData) => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getName}!`);
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const iter = (attempts) => {
    const attemptsToWin = 3;
    if (attempts === attemptsToWin) {
      return console.log(`Congratulations, ${getName}`);
    }
    const newQuestion = gameData();
    const content = newQuestion[0];
    const correctAnswer = newQuestion[1];
    readlineSync.question(`Question: ${content}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${getName}!`);
    }
    return iter(attempts + 1);
  };
  iter(0);
};
