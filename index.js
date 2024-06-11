// TODO: Include packages needed for this application

const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }else{
                console.log('Please enter your GitHub username!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'Enter the name of your project:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please, Enter the installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please, provide any specific instructions for app usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please, choose your license',
        Choices: ["MIT", "EPL v2" , "GNU GPL v2", "Apache-2.0"],
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Please, list the name of your collaborators, if any',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide the tests and instructions for how to conduct the testing?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide a list of frequently asked questions and your contact information',
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
