// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ['What is your project title?','Describe your project', 'How do you install this project?','How do you use this project?',
'What license is used?','Who are the contributors?','What are the instructions for testing?','What is your github username?','What is your email?'];

// TODO: Create a function to write README file

const writeToFile = async ({data,fileName}) => {
    const {
        title,
        projectDescription,
        installation,
        usage,
        license,
        tests,
        github,
        email,
        contributing,
    } = await inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
    },
    {
        type:'input',
        name:'projectDescription',
        message:questions[1],
    },
    {
        type:'input',
        name:'installation',
        message:questions[2],
    },
    {
        type:'input',
        name:'usage',
        message:questions[3]
    },
    {
        type:'checkbox',
        name:'license',
        choices:['Academic Free License v3.0','MIT','Microsoft Public License'],
    },
    {
        type:'input',
        name:'contributing',
        message:questions[5],
    },
    {
        type:'input',
        name:'tests',
        message:questions[6],
    },
    {
        type:'input',
        name:'github',
        message:questions[7],
    },
    {
        type:'input',
        name:'email',
        message:questions[8],
    },
]);
content = `#${title}

## Description
${projectDescription}

## Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For additional questions reachout to github.com/${github} or you can email me at ${email}`

fs.writeFile(fileName,content,(err) =>
    err ? console.log(err) : console.log('You Successfully created a README markdown file!')
  );

}
function init() {
    const data = {};
    const fileName = 'README.md';
    writeToFile({data,fileName});
} 

// Function call to initialize app
init();
