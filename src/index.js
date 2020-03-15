import readlineSync from 'readline-sync';

export default (rules, gameData) => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getName}!`);
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const win = (name) => console.log(`Congratulations, ${name}`);
  const again = (name) => console.log(`Let's try again, ${name}!`);
  const iter = (attempts) => {
    if (attempts === 3) {
      return win(getName);
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
      return again(getName);
    }
    return iter(attempts + 1);
  };
  iter(0);
};
