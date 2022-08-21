const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        // assign a school name
        this.school = school;
    }

    // getSchool() 
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    }
    // getRole() already overwritten;
};





module.exports = Intern;