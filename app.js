function playWithMe() {
    event.preventDefault();
    let userChoice = prompt("Challenge accepted 😉. Pick your choice: rock, paper, scissors");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.trim();
    let options = ["rock", "paper", "scissors"];
    if (!options.includes(userChoice)) {
        alert("That's not a valid choice... Are you getting cold feet? 😇");
    } else {
        let myChoice = Math.random();
        if (myChoice < 0.34) {
            myChoice = "rock";
        } else if (myChoice <= 0.67) {
            myChoice = "paper";
        } else {
            myChoice = "scissors";
        }
        compare(userChoice, myChoice);
    }
};
function compare(choice1, choice2) {
    event.preventDefault();
    if (choice1 === choice2) {
        alert("It's a tie! We are both pretty good at this 🙌🏽");
    } else {
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                alert("Rock wins! You are good! 🤓");
            } else {
                alert("Paper wins! Try again! You might win next time 😛");
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                alert("Paper wins! You are good! 🤓");
            } else {
                alert("Scissors win! Try again! You might win next time 😛");
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                alert("Scissors win! You are good! 🤓");
            } else {
                alert("Rock wins! Try again! You might win next time 😛");
            }
        }
    }
}
let game = document.getElementById("challenge");
game.addEventListener("click", playWithMe);