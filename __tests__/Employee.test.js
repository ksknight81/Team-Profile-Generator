// needs the following:
//Name
//ID
//Email
//getName()
//getId()
//getEmail()
//getrole() or returns employee  
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toBe('');
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toBe('email@gmail.com');
});

