#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please gussed a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you gassed a right number");
}
else {
    console.log(" sorry  you gussed a wronge number, please try again");
}
