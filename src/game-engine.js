import readlineSync from 'readline-sync';

export default function runGame(generateQuestion, gameDescription) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 1; i <= 3; i += 1) {
    const task = generateQuestion();
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
