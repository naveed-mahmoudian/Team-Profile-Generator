const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Instantiation", () => {
    it("should create an instance of the class Employee", () => {
      const newEmp = new Employee();

      expect(typeof newEmp).toEqual("object");
    });
  });

  describe("Setting properties via constructor arguments", () => {
    it("should set property name for Employee class", () => {
      const empName = new Employee("John");

      expect(empName.name).toEqual("John");
    });

    it("should set property id for Employee class", () => {
      const empId = new Employee("John", 23);

      expect(empId.id).toEqual(23);
    });

    it("should set property email for Employee class", () => {
      const empEmail = new Employee("John", 23, "john@email.com");

      expect(empEmail.email).toEqual("john@email.com");
    });
  });

  describe("Each method returns the correct output", () => {
    it("should return Employee class name", () => {
      const result = new Employee("John").getName();

      expect(result).toEqual("John");
    });

    it("should return Employee class id", () => {
      const result = new Employee("John", 23).getId();

      expect(result).toEqual(23);
    });

    it("should return Employee class email", () => {
      const result = new Employee("John", 23, "john@email.com").getEmail();

      expect(result).toEqual("john@email.com");
    });

    it("should return Employee class role", () => {
      const result = new Employee().getRole();

      expect(result).toEqual("Employee");
    });
  });
});
