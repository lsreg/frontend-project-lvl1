import random from 'random';
import runGame from '../game-engine.js';

function generateQuestionAndAnswer() {
  const number = random.int(1, 20);
  return {
    question: number.toString(),
    answer: (number % 2) === 0 ? 'yes' : 'no',
  };
}

export default function startGame() {
  runGame(generateQuestionAndAnswer, 'Answer "yes" if the number is even, otherwise answer "no".');
}
