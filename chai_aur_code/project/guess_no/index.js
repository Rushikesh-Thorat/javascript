let randomNo = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sbt')
const userInput = document.querySelector('#field')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if (guess< 1){
        alert('please enter a valid number')
    }
    else if (guess> 100){
        alert('please enter a valid number')
    }
    else{
        preGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over , Randome number was ${randomNo}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNo){
        displayMessage(`You guessed it right number `)
        endGame()
    }
    else if(guess< randomNo){
        displayMessage(`number is too low`)
    }
    else if(guess> randomNo){
        displayMessage(`number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBut = document.querySelector('#newGame')
    newGameBut.addEventListener('click',function(e){
       let randomNo = parseInt(Math.random() * 100 + 1);
        preGuess =[]
        newGuess =1 
        guessSlot.innerHTML= ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
    