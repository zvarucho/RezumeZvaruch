    const score = 10;
    let correctScore = 0;
    let currentScore = 1;
    
    let firstNumber;
    let secondNumber;
    
    const generateTask = () => {
      const { random, floor } = Math;
      firstNumber = floor(random() * 10);
      secondNumber = floor(random() * 10);
      
      document.querySelector('#firstNum').innerHTML = firstNumber;
      document.querySelector('#secondNum').innerHTML = secondNumber;
    }
    
    generateTask();
    
    document.querySelector('#check-btn').addEventListener('click', () => {
      const correctResult = firstNumber * secondNumber;
      const userResult = +document.querySelector('#userInput').value;
    
      if (userResult === correctResult) {
        correctScore += 1;
        document.getElementById('correct-score').innerHTML = correctScore;
        document.querySelector('#userInput').value = '';
        generateTask();
        document.querySelector('#userInput').focus();
      } else {
        document.getElementById('correct-answer').innerHTML = correctResult;
      }
    });
    
    document.querySelector('#next-task').addEventListener('click', generateTask);
