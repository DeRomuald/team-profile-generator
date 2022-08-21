const { inflateRaw } = require('zlib');
const Intern = require('../lib/Intern');

// tests the getName() and name
test("returns the intern's name", () => {
    const intern = new Intern('Josh', 4, 'josh@gmail.com', 'nikki beach');

    expect(intern.getName()).toBe('Josh');
    expect(intern.name).toBe('Josh');
});

// tests the getId() and id
test("returns the intern's id", () => {
    const intern = new Intern('Josh', 4, 'josh@gmail.com', 'nikki beach');

    expect(intern.getId()).toBe(4);
    expect(intern.id).toBe(4);
});

// tests the getEmail() and email
test("returns the intern's email", () => {
    const intern = new Intern('Josh', 4, 'josh@gmail.com', 'nikki beach');

    expect(intern.getEmail()).toBe('josh@gmail.com');
    expect(intern.email).toBe('josh@gmail.com');
});


// tests the getSchool() and school
test("creates school value and checks the returns of the intern's school", () => {

    const intern = new Intern('Josh', 4, 'josh@gmail.com', 'nikki beach');

    expect(intern.getSchool()).toBe("nikki beach");
    expect(intern.school).toBe('nikki beach');
});

// tests the getRole()
test("returns intern's role", () => {
    const intern = new Intern('Josh', 4, 'josh@gmail.com', 'nikki beach');

    expect(intern.getRole()).toBe("Intern")
});