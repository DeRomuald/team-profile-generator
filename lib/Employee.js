const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        // returns this name if any
        return this.name;
    };
    getId() {
        // returns this id if any
        return this.id;
    };

    getEmail() {
        // returns this email if any
        return this.email;
    };

    getRole() {
        // gets the class name
        // !return this.constructor.name; - write a comment later
        return "Employee";
    };
};

module.exports = Employee;