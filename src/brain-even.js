import runGame from "./game-engine.js";
import random from 'random';


function generateQuestion() {
    const number = random.int(1, 20);
    return {
        question: `Is ${number} even? (yes/no)`,
        answer: (number % 2) === 0 ? 'yes' : 'no',
    };
}

runGame(generateQuestion);