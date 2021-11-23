import random from 'random';
import runGame from '../game-engine.js';

function generateProgression(first, delta, count, missing) {
  const result = [];
  for (let i = 1; i <= count; i += 1) {
    if (i === missing) {
      result.push('..');
    } else {
      result.push((first + delta * (i - 1)).toString());
    }
  }

  return result;
}

function generateQuestionAndAnswer() {
  const first = random.int(1, 20);
  const delta = random.int(1, 20);
  const count = random.int(5, 10);
  const missing = random.int(1, count);
  const progression = generateProgression(first, delta, count, missing);

  return {
    question: progression.join(' '),
    answer: (first + (missing - 1) * delta).toString(),
  };
}

export default function startGame() {
  runGame(generateQuestionAndAnswer, 'What number is missing in the progression?');
}
