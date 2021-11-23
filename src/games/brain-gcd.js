import random from 'random';
import runGame from '../game-engine.js';

function calculateGreatestCommonFactor(first, second) {
  let result = 1;
  let min = first;
  if (min > second) {
    min = second;
  }

  for (let i = 2; i <= min; i += 1) {
    if ((first % i === 0) && (second % i === 0)) {
      result = i;
    }
  }

  return result;
}

function generateQuestionAndAnswer() {
  const first = random.int(10, 30);
  const second = random.int(10, 30);

  return {
    question: `${first} ${second}`,
    answer: calculateGreatestCommonFactor(first, second).toString(),
  };
}

export default function startGame() {
  runGame(generateQuestionAndAnswer, 'Find the greatest common divisor of given numbers.');
}
