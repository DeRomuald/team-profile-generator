const Manager = require('../lib/Manager');

test("returns the manager's office number", () => {
    const manager = new Manager('Alex', 2, 'al.gurino@gmail.com', 10);

    expect(manager.officeNumber).toBe(10);
});

test("returns the manager's name", () => {
    const manager = new Manager('Alex', 2, 'al.gurino@gmail.com', 10);

    expect(manager.getName()).toBe('Alex');
    expect(manager.name).toBe('Alex');
});

test("returns the manager's id", () => {
    const manager = new Manager('Alex', 2, 'al.gurino@gmail.com', 10);

    expect(manager.getId()).toBe(2);
    expect(manager.id).toBe(2);
});

test("returns the manager's email", () => {
    const manager = new Manager('Alex', 2, 'al.gurino@gmail.com', 10);


    expect(manager.getEmail()).toBe('al.gurino@gmail.com');
    expect(manager.email).toBe('al.gurino@gmail.com');
});

test("returns the manager's role", () => {
    const manager = new Manager('Alex', 2, 'al.gurino@gmail.com', 10);

    expect(manager.getRole()).toBe('Manager');
});