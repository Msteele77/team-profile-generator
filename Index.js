const inquirer = require('inquirer');
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

const initialPrompt = () => {
    return inquirer.prompt([
        {
        tpye: 'input',
        name: 'name',
        message: "Enter your team member's name:",
        },
        {
        type: 'list',
        name: 'role',
        message: "Select your team member's role.",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ]},
        {
        type: 'input',
        name: 'id',
        message: "Enter the team member's ID"
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter the team member's email address."
        }
    ]);
};



initialPrompt();