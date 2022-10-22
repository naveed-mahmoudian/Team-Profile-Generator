const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Instantiation", () => {
    it("should create an instance of the Engineer class", () => {
      const newEngineer = new Engineer();

      expect(typeof newEngineer).toEqual("object");
    });
  });

  describe("Setting github property from constructor", () => {
    it("should set the github property for the Engineer class", () => {
      const newEngineer = new Engineer(
        "John",
        23,
        "john@email.com",
        "john-hub"
      );

      expect(newEngineer.github).toEqual("john-hub");
    });
  });

  describe("Methods return the correct output", () => {
    it("should return the github username for Engineer class", () => {
      const result = new Engineer(
        "John",
        23,
        "john@email.com",
        "john-hub"
      ).getGithub();

      expect(result).toEqual("john-hub");
    });

    it("should return the correct role for Engineer class", () => {
      const result = new Engineer().getRole();

      expect(result).toEqual("Engineer");
    });
  });
});
