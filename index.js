// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// More Variables
let allEmployees = [];
let allManagers = [];
let allEngineers = [];
let allInterns = [];

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
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add another team member?",
    choices: ["Yes", "No"],
  },
];
const engineerQuestionsArr = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add another team member?",
    choices: ["Yes", "No"],
  },
];
const internQuestionsArr = [
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add another team member?",
    choices: ["Yes", "No"],
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
  allEmployees.push(ansObject);

  if (ansObject.addEmployee === "Yes") {
    getUserInput(employeeQuestionsArr);
    return;
  }

  createClasses();
}

function createClasses() {
  for (var i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].role === "Manager") {
      allManagers.push(
        new Manager(
          allEmployees[i].name,
          allEmployees[i].id,
          allEmployees[i].email,
          allEmployees[i].officeNumber
        )
      );
    } else if (allEmployees[i].role === "Engineer") {
      allEngineers.push(
        new Engineer(
          allEmployees[i].name,
          allEmployees[i].id,
          allEmployees[i].email,
          allEmployees[i].github
        )
      );
    } else if (allEmployees[i].role === "Intern") {
      allInterns.push(
        new Intern(
          allEmployees[i].name,
          allEmployees[i].id,
          allEmployees[i].email,
          allEmployees[i].school
        )
      );
    }
  }

  writeToFile();
}

function writeToFile() {
  // write html to file
  allManagers.forEach((managerInfo) => console.log(managerInfo));
  allEngineers.forEach((engineerInfo) => console.log(engineerInfo));
  allInterns.forEach((internInfo) => console.log(internInfo));
}
