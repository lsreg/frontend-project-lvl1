import random from 'random';
import runGame from '../game-engine.js';

function sum(a, b) { return a + b; }
function diff(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
const signMarks = ['+', '-', '*'];
const signFunctions = [sum, diff, multiply];

function generateQuestionAndAnswer() {
  const first = random.int(1, 20);
  const second = random.int(1, 20);
  const sign = random.int(0, signMarks.length - 1);

  return {
    question: `${first} ${signMarks[sign]} ${second}`,
    answer: signFunctions[sign](first, second).toString(),
  };
}

export default function startGame() {
  runGame(generateQuestionAndAnswer, 'What is the result of the expression?');
}
