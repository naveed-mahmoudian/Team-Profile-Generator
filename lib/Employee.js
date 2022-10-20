class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`My name is ${this.name}.`);
  }

  getId() {
    console.log(`My ID is: ${this.id}`);
  }

  getEmail() {
    console.log(`My email is: ${this.email}`);
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
