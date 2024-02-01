const choices = document.querySelectorAll('.choices');
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");


const options = ["Rock", "Paper", "Scissors"];

const computer = Math.floor(Math.random("012") * options.length);

computerChoice.innerHTML = options[computer]; 

console.log(options[computer]);

choices.forEach(
    (choice => {
        choice.addEventListener("click", (event) => {
            const choiceId = event.target.id;
            console.log(choiceId); 
            playerChoice.innerHTML = options[choiceId];
            
        });
    })
);
