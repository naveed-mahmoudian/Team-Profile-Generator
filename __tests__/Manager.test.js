const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Instantiation", () => {
    it("should create an instance of the Manager class", () => {
      const newManager = new Manager();

      expect(typeof newManager).toEqual("object");
    });
  });

  describe("Setting properties via constructor", () => {
    it("should set the officeNumber property of Manager class", () => {
      const newManager = new Manager("John", 23, "john@email.com", 12);

      expect(newManager.officeNumber).toEqual(12);
    });
  });

  describe("Correct output for methods of Manager class", () => {
    it("should return the office number through getOfficeNumber() method", () => {
      const result = new Manager(
        "John",
        23,
        "john@email.com",
        12
      ).getOfficeNumber();

      expect(result).toEqual(12);
    });

    it("should return role for Manager class", () => {
      const result = new Manager().getRole();

      expect(result).toEqual("Manager");
    });
  });
});
