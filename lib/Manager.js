const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.office = OfficeNumber;
    }
        getRole() {
            return "Manager"
        }
}

module.exports = Manager;