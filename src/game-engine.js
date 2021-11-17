import readlineSync from 'readline-sync';

export default function runGame(generateQuestion) {
  const name = readlineSync.question('What is your name?\r\n');

  console.log(`Hello, ${name}`);

  for (let i = 1; i <= 3; i++) {
    console.log(`Question № ${i}`);
    const task = generateQuestion();
    const answer = readlineSync.question(`${task.question}\r\n`);
    if (answer !== task.answer) {
      console.log('Test failed');
      console.log(`Right answer was ${task.answer}`);
      return;
    }
  }

  console.log('Test succesfully passed');
}
