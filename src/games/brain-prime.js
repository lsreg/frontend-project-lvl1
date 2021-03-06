import random from 'random';
import runGame from '../game-engine.js';

function isPrimeNumber(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function generateQuestionAndAnswer() {
  const number = random.int(10, 30);

  return {
    question: number.toString(),
    answer: isPrimeNumber(number) ? 'yes' : 'no',
  };
}

export default function startGame() {
  runGame(generateQuestionAndAnswer, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
