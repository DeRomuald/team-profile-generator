//
const inquirer = require ('inquirer');

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

const templateData = require ('./src/page-template');
const {writeFile, copyFile} = require('./src/generate-page');

const dataArr = [];
//Manager Questions
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?",
        validate: (input) => {
            if (input !== "") {
                return true;
            }
            else {
                return "Name Required!";
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's ID#?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID # Required!';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email address?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'Office Number Required!';
            }
            return true;
        }
    },
];

const addTeammate= [
    {
        type: 'list',
        name: 'choice',
        choices: ['Manager','Engineer', 'Intern', 'Done'],
        message: "Would you like to add another teammate?",
    },
];

//Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
        validate: (input) => {
            return (!input) ? 'Name Required!' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID#?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID # Required!';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's github?",
        validate: (input) => {
            return (!input) ? 'Github required!' : true;
        }
    },
];

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
        validate: (input) => {
            return (!input) ? 'Name Required!' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID#?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID # Required';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the Intern attend?",
        validate: (input) => {
            return (!input) ? 'School Name Required!' : true;
        }
    },
];

//Switch cases for team members
const addTeamMember = () => {
    return inquirer.prompt(addTeammate)
        .then(answer => {
            switch (answer.choice) {
                case 'Engineer':
                    // addEngineer();
                    console.log('Engineer Selected');
                    addEngineer();
                    break;
                case 'Manager':
                        // addManager();
                        console.log('Manager Selected');
                        addManager();
                        break;    
                case 'Intern':
                    // addIntern();
                    console.log('Intern Selected');
                    addIntern();
                    break;
                case 'Done':
                    // writeFile Function
                    writeFile(templateData(dataArr));
                    copyFile();
                    console.log('Done. Check the dist folder!');
                    break;
            }
        })
};

//Add Manager Function
const addManager = () => {
    dataArr.length = 0;
    return inquirer.prompt(managerQuestions)
        .then(answers => {
            const { name, id, email, officeNumber } = answers;
            const manager = new Manager(name, id, email, officeNumber);
            dataArr.push(manager);
            addTeamMember();
        })
};

//Add Enigneer Function
const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
        .then(answers => {
            const { name, id, email, github } = answers;
            const engineer = new Engineer(name, id, email, github);
            dataArr.push(engineer);
            addTeamMember();
        })

};

//Add Intern Function
const addIntern = () => {
    return inquirer.prompt(internQuestions)
        .then(answers => {
            const { name, id, email, school } = answers;
            const engineer = new Intern(name, id, email, school);
            dataArr.push(engineer);
            addTeamMember();
        })
}

addManager();



