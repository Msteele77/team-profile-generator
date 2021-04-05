const Employee = require('../lib/Employee.js');
const axios = require("axios");


class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        super(name, id, email);

        this.github = githubUsername;
    
            
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
}



module.exports = Engineer;


