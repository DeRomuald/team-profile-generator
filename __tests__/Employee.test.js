const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

// checks all the arguments were assigned to the employee object
test('creates an employee object', () => {
    const employee = new Employee('Alex', 1, 'al.gurino@gmail.com');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('al.gurino@gmail.com');
});

// gets the employee's name
test('returns the employee\'s name value', () => {
    const employee = new Employee('Alex');

    expect(employee.getName()).toBe('Alex');
});

// gets the employee's id
test("returns the employee's id", () => {
    const employee = new Employee('Alex', 1);

    expect(employee.getId()).toBe(1);
});

// gets the employee's email
test("returns the employee's email", () => {
    const employee = new Employee('Alex', 1, 'al.gurino@gmail.com');

    expect(employee.getEmail()).toBe('al.gurino@gmail.com');
});

// get's the employee's role
test("returns the employee's role", () => {
    const employee = new Employee('Alex', 1, 'al.gurino@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});