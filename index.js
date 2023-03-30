// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Title
    ['What is the title of your project?', 'title'],

    // Description
    ['What was your motivation?', 'dsMotivation'],
    ['Why did you build this project?', 'dsWhy'],
    ['What problem does it solve?', 'dsProblem'],
    ['What did you learn?', 'dsLearn'],

    // Installation
    ['What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.', 'installation'],

    // Usage
    ['Provide instructions and examples for use.', 'usage'],

    // Credits
    [`List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.`, 'credits'],

    // License

    ['What license did you use?', 'license', ['MIT', 'Apache license 2.0', 'Open Software License 3.0']]
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app

function init() {
    console.log(questions[8].length)
    let answersObj = [];
    let promises = [];
    for (const question of questions){
    
        if (question.length === 3){
            
            inquirer
            .prompt([
                {
                type: 'list',
                message: question[0],
                name: question[1],
                choices: question[2]
                },
            ])
            .then((response) =>
                answersObj.push(response))
        } else {
            inquirer
            .prompt([
                {
                type: 'input',
                message: question[0],
                name: question[1]
                },
            ])
            .then((response) =>
                answersObj.push(response))
        };
    }; 
    console.log(answersObj)      
};

// Function call to initialize app
init();

// function init() {
//     inquirer
//     .prompt([
//         {
//         type: 'input',
//         message: questions[0],
//         name: 'title',
//         },
//         {
//         type: 'input',
//         message: questions[1],
//         name: 'dsMotivation',
//         },
//         {
//         type: 'input',
//         message: questions[2],
//         name: 'dsWhy',
//         },
//         {
//         type: 'input',
//         message: questions[3],
//         name: 'dsProblem',
//         },
//         {
//         type: 'input',
//         message: questions[4],
//         name: 'dsLearn',
//         },
//         {
//         type: 'input',
//         message: questions[5],
//         name: 'installation',
//         },
//         {
//         type: 'input',
//         message: questions[6],
//         name: 'usage',
//         },
//         {
//         type: 'input',
//         message: questions[7],
//         name: 'credits',
//         },
//         {
//         type: 'list',
//         message: questions[8],
//         name: 'license',
//         choices: ['MIT', 'Apache license 2.0', 'Open Software License 3.0' ]
//         },
//     ])
//     .then((response) =>
//         writeToFile(response.title, response))
// };

