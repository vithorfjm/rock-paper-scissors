const startGame= () => {
    
    const emojis = ['✊', '🖐', '✌'];
    const btns = document.querySelectorAll('.square');
    const result = document.querySelector('.result');
    const playerScore = document.querySelector('.player-score');
    const enemyScore = document.querySelector('.enemy-score');
    const enemyEmoji = document.querySelector('.enemy-play');
    const playerEmoji = document.querySelector('.player-play');
    const toggleVisibility = document.querySelector('.toggle-visibility');
    let playerChoice;
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {         
            /* Define a number to the user depending on his choice */
            // 0 - rock,  1 - paper, 2 - scissors
            if (btn.classList.contains('rock')){
                playerChoice = 0;
            } else if (btn.classList.contains('paper')){
                playerChoice = 1;
            } else if (btn.classList.contains('scissors')){
                playerChoice = 2;
            }
            
            toggleVisibility.classList.add('visible');
            let playerScoreCount = playerScore.textContent;
            let enemyScoreCount = enemyScore.textContent;
            
            const enemyChoice = getRandomNum();
            
            /* Show to user what he and pc played */
            enemyEmoji.textContent = `Enemy plays ${emojis[enemyChoice]}`
            playerEmoji.textContent = `You play ${emojis[playerChoice]}`

            /* Condition to know who wins */
            
            if (playerChoice == enemyChoice){
                result.textContent = "It's a tie";
                result.style.color = '#FECD1A';
            } else if (playerChoice == 0 && enemyChoice == 1){
                changeScore(enemyScoreCount, enemyScore);
            } else if (playerChoice == 0 && enemyChoice == 2){
                changeScore(playerScoreCount, playerScore)
            } else if (playerChoice == 1 && enemyChoice == 0){
                changeScore(playerScoreCount, playerScore)
            } else if (playerChoice == 1 && enemyChoice == 2){
                changeScore(enemyScoreCount, enemyScore);
            } else if (playerChoice == 2 && enemyChoice == 0){
                changeScore(enemyScoreCount, enemyScore);
            } else if (playerChoice == 2 && enemyChoice == 1){
                changeScore(playerScoreCount, playerScore)
            }
        });
    });
    
    /* Function that add 1 to who scores and show a phrase saying who win. */
    function changeScore(count, whoScores){
        count++;
        whoScores.textContent = count;
        if (whoScores == enemyScore){
            result.textContent = 'You lost!';
            result.style.color = '#9D0191';
        } else if (whoScores == playerScore){
            result.textContent = 'You win!';
            result.style.color = '#FD3A69';
        }
    }

    function getRandomNum() {
        return Math.floor(Math.random() * 3);
    }
};

startGame();