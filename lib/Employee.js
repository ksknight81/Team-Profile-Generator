const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.employeeId = employeeId;
        this.emailAddress = emailAddress;
    }
    startProgram() {
        {
            inquirer
                .prompt({
                    type: 'text',
                    name: 'name',
                    message: 'What is your name?'
                })
                .then(({ name }) => {
                    this.Employee = new this.Employee(name);
        
                    this.startNewManager();
                });
        }
    }
}

module.exports = Employee; 