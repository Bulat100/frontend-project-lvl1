import readlineSync from 'readline-sync';

const getName = readlineSync.question('May I have your name?');
export const greeting = () => console.log(`Hello, ${getName}!`);

export const welcoming = () => console.log('Welcome to the Brain Games!');
export const getAnswer = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const logic = (attemts) => {
    const isEven = (number) => number % 2 === 0;
    // random number from 0 to 99
    const rndMaker = () => Math.floor(Math.random() * 100);
    const randomNum = rndMaker();
    const question = () => readlineSync.question('Your answer:');
    const again = () => console.log(`Let's try again, ${getName}!`);
    const isCorrect = (answer, num) => (answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num));
    if (attemts === 0) {
      return console.log(`Congratulations, ${getName}`);
    }
    console.log(`Question: ${randomNum}`);
    const response = question();
    if (response !== 'yes' && response !== 'no') {
      console.log('Answer should be yes or no');
      return again();
    }
    if (isCorrect(response, randomNum)) {
      console.log('Correct!');
      return logic(attemts - 1);
    }
    console.log('yes is wrong answer ;(. Correct answer was no');
    return again();
  };
  return logic(3);
};
