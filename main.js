
function generateProblem() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

  
    let problem = `${num1} ${operator} ${num2}`;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = parseFloat((num1 / num2).toFixed(2)); 
            break;
    }

    return { problem, correctAnswer };
}


function main() {
    const numProblems = parseInt(prompt("Введите количество примеров:"));

    if (isNaN(numProblems) || numProblems <= 0) {
        console.log("Пожалуйста, введите корректное число примеров.");
        return;
    }

    let correctCount = 0;

    for (let i = 0; i < numProblems; i++) {
        const { problem, correctAnswer } = generateProblem();
        const userAnswer = parseFloat(prompt(`Пример ${i + 1}: ${problem}`));

        if (Math.abs(userAnswer - correctAnswer) < 0.01) { 
            console.log("Ваш ответ верный!");
            correctCount++;
        } else {
            console.log(`Ваш ответ неверный. Правильный ответ: ${correctAnswer}`);
        }
    }

    console.log(`Вы решили правильно ${correctCount} из ${numProblems} примеров.`);
}


main();
