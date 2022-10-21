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

// Creates all the classes we need
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

// Parses the information and writes file
function writeToFile() {
  fs.writeFile(
    "./dist/index.html",
    `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
  </head>
  <body>
    <!-- Header -->
    <header>
      <div class="container-fluid bg-dark">
        <h1 class="row text-white justify-content-center p-5">Team Profile</h1>
      </div>
    </header>

    <!-- Profile Cards -->
    <section id="cards">
      <div class="container p-5">
        <div class="row justify-content-center">
          <div class="card p-0 text-center" style="width: 20rem">
            <div class="card-header bg-dark">
              <h4 class="card-title text-white">Name</h4>
              <h6 class="card-subtitle text-white">Role</h6>
            </div>
            <ul class="list-group p-4 bg-light">
              <li class="list-group-item">ID: 1234</li>
              <li class="list-group-item">
                Email: <a href="mailto: nav@gmail.com">nav@gmail.com</a>
              </li>
              <li class="list-group-item">Custom: xyz</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `,
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully generated HTML file!");
      }
    }
  );
}
