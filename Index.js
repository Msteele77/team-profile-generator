const inquirer = require('inquirer');
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

//Prompt started onload
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
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        endPrompt();
    })
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
        name: 'githubUsername',
        message: "Enter the engineer's Github Username."
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const githubUsername = data.githubUsername
        endPrompt();
    })
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
        name: 'school',
        message: "Enter the name of the intern's school."        
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        endPrompt();
        })    
    
};


function endPrompt() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'role',
        message: "Would you like to add another employee or complete your team?",
        choices: ["Add an engineer", "Add an intern", "Complete team"]
        }
    ])
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
    
}




function completeTeam () {
    console.log(`
    ========================================
    Your team has been generated. Thank you!
    ========================================`);
    //FUNCTION WHERE THE HTML WILL BE GENERATED
    
}


initialPrompt()




