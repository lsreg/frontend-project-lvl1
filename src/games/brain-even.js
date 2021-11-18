import random from 'random';
import runGame from '../game-engine.js';

function generateQuestion() {
  const number = random.int(1, 20);
  return {
    question: number.toString(),
    answer: (number % 2) === 0 ? 'yes' : 'no',
  };
}

runGame(generateQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
