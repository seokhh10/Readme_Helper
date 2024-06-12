// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

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
        name: 'description',
        message: 'Enter Description of your project',
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
        name: 'contributing',
        message: 'Provide the names of any contributors, if applicable',
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
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)

    .then((answers.license) => {
        let badge = ""
        console.log(answers.license);
    })
}

// Function call to initialize app
init();
