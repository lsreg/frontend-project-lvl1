import random from 'random';
import runGame from '../game-engine.js';

function sum(a, b) { return a + b; }
function diff(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
const signMarks = ['+', '-', '*'];
const signFunctions = [sum, diff, multiply];

function generateQuestion() {
  const first = random.int(1, 20);
  const second = random.int(1, 20);
  const sign = random.int(0, 2);

  return {
    question: `${first} ${signMarks[sign]} ${second}`,
    answer: signFunctions[sign](first, second).toString(),
  };
}

runGame(generateQuestion, 'What is the result of the expression?');
