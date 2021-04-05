const inquirer = require('inquirer');
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employeesArray = [];
const generateCards = require("./utils/generate-site");

//Prompt started onload
const initialPrompt = (data) => {
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
        const employee = new Manager(data.name, data.id, data.email, data.officeNumber)
        employeesArray.push(employee)
        endPrompt();
    })
};

const engineerOption = (data) => {
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
        const engineer = new Engineer(data.name, data.id, data.email, data.githubUsername)
        employeesArray.push(engineer)
        endPrompt();
    })
};

const internOption = (data) => {
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
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employeesArray.push(intern)
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
                fs.writeFile("./dist/index.html", generateCards(employeesArray), (err) => {
                    console.log(err);
                    console.log(`
                ========================================
                Your team has been generated. Thank you!
                ========================================`);
                })
                
                break;
        }})
}

initialPrompt()




