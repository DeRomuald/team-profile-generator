//
const inquirer = require ('inquier');

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

const templateData = require ('./src/page-template');
const {writeFile, copyFile} = require('./src/generate-page');

const dataArr = [];
//
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
        validate: (input) => {
            if (input !== "") {
                return true;
            }
            else {
                return 'Name required!';
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's id?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID number required!';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return 'Email address required!';
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

//
const internQuestions =[
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: (input) => {
            return (!input) ? 'Name required!' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id#?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID number required!';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is intern's email address?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return 'Email address required!';
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?",
        validate: (input) => {
            return (!input) ? 'School name required!' : true;
        }
    },
];
//
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: (input) => {
            return (!input) ? 'Name required!' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id#?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'ID number required!';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return 'Email address required!';
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: (input) => {
            if (isNaN(parseInt(input))) {
                return 'Office number required!';
            }
            return true;
        }
    },
];
//
const addTeamMember = [
    {
        type: 'list',
        name: 'addTeamMember',
        choices: ['engineer','intern','manager','done'],
        messsage: 'Would you like to add another teammate?',

    },
];

//Prompts
const addTeammate = () =>{
    return inquirer.prompt (addTeamMember)
        .then(answer => {
            switch(answer.addTeamMember){
              case 'Engineer':
                console.log('Engineer selected');
                addEngineer();
                break;
              case 'Intern':
                console.log('Intern selected'); 
                addIntern();
                break;
              case 'Manager':
                console.log ('Manager selected');
                addManager();
                break;
            case 'Done':
                writeFile(templateData(dataArr));
                copyFile();
                console.log('Input complete!')

            }
        })
};
const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
        .then(answers => {
            const {name,id,email,github} = answers;
            const engineer = new Engineer(name, id, email, github);
            dataArr.push(engineer);
            addTeammate();
        })
};
const addIntern = () => {
    return inquirer.prompt(internQuestions)
        .then(answers => {
            const {name,id,email,school} = answers;
            const intern = new Intern(name, id, email,school);
            dataArr.push(intern);
            addTeammate();
        })
};
const addManager = () => {
    return inquirer.prompt(managerQuestions)
        .then(answers => {
            const {name,id,email,officeNumber} = answers;
            const manager = new Manager(name, id, email, officeNumber);
            dataArr.push(manager);
            addTeammate();
        })
}

addEngineer();