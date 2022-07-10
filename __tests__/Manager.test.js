const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe('Bob');
    
})

module.exports = Manager; 
console.log(Manager);