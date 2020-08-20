var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your README title?",
    name: "apptitle",
  },

  {
    type: "input",
    message: "Please describe your application",
    name: "appdescription",
  },

  
  {
    type: "input",
    message: "Please give installation instructions for your application",
    name: "appinstallation",
  },
  {
    type: "input",
    message: "Please give usage instructions for your application",
    name: "appusage",
  },

  {
    type: "list",
    choices: ["GPLv3", "Apache",  "BSD", "MIT"],
    message: "Please specify the license type for your application",
    name: "applicense",
  },

  {
    type: "input",
    message: "Please list the contributors for your application",
    name: "appcontributors",
  },

  {
    type: "input",
    message: "Please list the test method for your for your application",
    name: "apptest",
  },

  {
    type: "input",
    message: "Please please enter your Github username for your application",
    name: "github",
  },

  {
    type: "input",
    message: "Please please enter your email address",
    name: "email",
  },
];
// function to write README file

function writeToFile(filename, data) {
  return fs.writeFileSync(filename, data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

init();
