import inquirer from "inquirer";
let score = 0;
for (let i = 1; i <= 10; i++) {
    let computerguess = Math.floor(Math.random() * 10);
    let result = await inquirer.prompt([
        {
            type: "number",
            name: "mynumber",
            message: "Enter your guessing number"
        },
    ]);
    if (computerguess < result.mynumber && result.mynumber <= 10) {
        console.log("You Win");
        score++;
        console.log("Computer guessing number is ", computerguess);
        console.log("Your guessing number is ", result.mynumber);
    }
    else if (computerguess > result.mynumber) {
        console.log("You Lose");
        console.log("Computer guessing number is ", computerguess);
        console.log("Your guessing number is ", result.mynumber);
    }
    else if (computerguess === result.mynumber) {
        console.log("Game is Draw!!");
        console.log("Computer guessing number is ", computerguess);
        console.log("Your guessing number is ", result.mynumber);
    }
    else if (result.mynumber > 10) {
        console.log("Your guessing number is too high");
        console.log("Please try again and enter a number upto 10");
    }
    else {
        console.log("Invalid input");
        console.log("Please try again and enter a number upto 10");
    }
}
console.clear();
console.log("Your total score is ", score, "out of 10");
