const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }

    getName() {
        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: 'What is your name?'
        })
        .then(({ name }) => {
          this.Employee = new Employee(name);
  
          console.log(Player)
        });
    }

    getEmployeeId() {

    }

    getEmailAddress() {

    }
}
getName();
module.exports = Manager;