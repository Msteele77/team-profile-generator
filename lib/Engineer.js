const Employee = require('../lib/Employee.js');
const axios = require("axios");


class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        super(name, id, email);
        //this.github = githubInfo;
        const githubInfo = {
            getGithubUsername(githubUsername) {
        axios.get("https://api.github.com/users/" + githubUsername)
            }}
            
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.githubInfo;
    }
}



module.exports = Engineer;


