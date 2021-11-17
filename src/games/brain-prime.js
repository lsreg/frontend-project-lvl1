import random from 'random';
import runGame from '../game-engine.js';

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function generateQuestion() {
  const number = random.int(10, 30);

  return {
    question: `Is ${number} prime? (yes/no)`,
    answer: isPrimeNumber(number) ? 'yes' : 'no',
  };
}

runGame(generateQuestion);
