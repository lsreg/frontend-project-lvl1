import random from 'random';
import runGame from '../game-engine.js';

function calculateGreatestCommonFactor(first, second) {
  let result = 1;
  let min = first;
  if (min > second) {
    min = second;
  }

  for (let i = 2; i <= min; i++) {
    if ((first % i === 0) && (second % i === 0)) {
      result = i;
    }
  }

  return result;
}

function generateQuestion() {
  const first = random.int(10, 30);
  const second = random.int(10, 30);

  return {
    question: `What is greatest common factor of ${first} and ${second}`,
    answer: calculateGreatestCommonFactor(first, second).toString(),
  };
}

runGame(generateQuestion);
