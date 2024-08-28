#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
])

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed the correct number");
}else{
    console.log("Sorry, you guessed the wrong number");
};


