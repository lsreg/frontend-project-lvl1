import random from 'random';
import runGame from '../game-engine.js';

function generateQuestion() {
  const first = random.int(1, 20);
  const delta = random.int(1, 20);
  const count = random.int(5, 10);
  const missing = random.int(1, count);
  let questionString = '';

  for (let i = 1; i <= count; i += 1) {
    if (i === missing) {
      questionString += '.. ';
    } else {
      questionString += `${first + delta * (i - 1)} `;
    }
  }

  return {
    question: questionString.trim(),
    answer: (first + (missing - 1) * delta).toString(),
  };
}

runGame(generateQuestion, 'What number is missing in the progression?');
