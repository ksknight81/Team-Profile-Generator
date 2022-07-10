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
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@gmail.com');
});

