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
        message: "Enter your team managers's name:",
        },
        {
        type: 'input',
        name: 'id',
        message: "Enter the team member's employee ID"
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter the team member's email address."
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team member's office number."
        },
        {
        type: 'list',
        name: 'role',
        message: "Please choose the type of employee you want to add, or choose to finish builing your team.",
        choices: ["Add an engineer", "Add an intern", "Complete team"
            ]
        }
    ])
};

const engineerOption = () => {
    return inquirer.prompt([
        {
        tpye: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
        },
        {
        type: 'input',
        name: 'id',
        message: "Enter the eningeer's employee ID"
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address."
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the engineer's Github Username."
        },
        {
        type: 'list',
        name: 'role',
        message: "Would you like to add another employee or complete your team?",
        choices: ["Add an engineer", "Add an intern", "Complete team"]
        }
    ])
};

const internOption = () => {
    return inquirer.prompt([
        {
        tpye: 'input',
        name: 'name',
        message: "Enter the intern's name:",
        },
        {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID"
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address."
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the name of the intern's school."        
        },
        {
        type: 'list',
        name: 'role',
        message: "Would you like to add another employee or complete your team?",
        choices: ["Add an engineer", "Add an intern", "Complete team"]
        }
    ])
};

const mainMenu = () => {
    console.log(`
    =========
    MAIN MENU
    =========
    `);
}

function completeTeam () {
    console.log(`
    ========================================
    Your team has been generated. Thank you!
    ========================================`);
    //FUNCTION WHERE THE HTML WILL BE GENERATED
    
}



initialPrompt()
.then(data => {
    switch (data.role) {
        case "Add an engineer":
            engineerOption();
            break;
        case "Add an intern":
            internOption();
            break;
        case "Complete team":
            completeTeam();
            break;
}})



