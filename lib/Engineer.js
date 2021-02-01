const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor (name, email, id, githubUsername) {
        super(name, email, id);
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