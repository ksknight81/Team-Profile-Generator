// const inquirer = require('inquirer');
// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

// class Employee {
//     constructor(name = '') {
//         this.name = name;
//         this.employeeId = employeeId();
//         this.emailAddress = emailAddress();
//     }
// };

// employeeId() {
//     inquirer
//         .prompt({
//             type: 'text',
//             name: 'name',
//             message: 'What is your name?'
//         })
//         .then(({ name }) => {
//             this.employee = new Employee(name);

//         })

// }

class Employee {
  constructor(name = "") {
    this.name = name;
    console.log(name);
  }
}
module.exports = Employee;
