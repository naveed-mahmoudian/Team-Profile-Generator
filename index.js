// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Arrays of questions
const employeeQuestionsArr = [
  {
    type: "input",
    name: "name",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "list",
    name: "role",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];
const managerQuestionsArr = [
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
];
const engineerQuestionsArr = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
];
const internQuestionsArr = [
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
  },
];

// Init starts the application
init();
function init() {
  getUserInput(employeeQuestionsArr);
}

// Gets user input
function getUserInput(questions) {
  inquirer.prompt(questions).then((employeeAns) => {
    if (employeeAns.role === "Manager") {
      inquirer
        .prompt(managerQuestionsArr)
        .then((managerAns) => Object.assign(employeeAns, managerAns))
        .then((managerAns) => handleUserInput(managerAns));
    } else if (employeeAns.role === "Engineer") {
      inquirer
        .prompt(engineerQuestionsArr)
        .then((engineerAns) => Object.assign(employeeAns, engineerAns))
        .then((engineerAns) => handleUserInput(engineerAns));
    } else if (employeeAns.role === "Intern") {
      inquirer
        .prompt(internQuestionsArr)
        .then((internAns) => Object.assign(employeeAns, internAns))
        .then((internAns) => handleUserInput(internAns));
    }
  });
}

// Handles user input
function handleUserInput(ansObject) {
  console.log(ansObject);
}
