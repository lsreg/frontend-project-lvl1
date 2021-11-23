import readlineSync from 'readline-sync';

const roundCount = 3;

export default function runGame(generateQuestionAndAnswer, gameDescription) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 1; i <= roundCount; i += 1) {
    const task = generateQuestionAndAnswer();
    console.log(`Question: ${task.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== task.answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
