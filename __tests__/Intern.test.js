const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Instantiation", () => {
    it("should create an instance of the Intern class", () => {
      const newIntern = new Intern();

      expect(typeof newIntern).toEqual("object");
    });
  });

  describe("Setting the school property via constructor arguments", () => {
    it("should set the school property for the Intern class", () => {
      const newIntern = new Intern("John", 23, "john@email.com", "UCLA");

      expect(newIntern.school).toEqual("UCLA");
    });
  });

  describe("Methods returning correct output", () => {
    it("should return the school of Intern getSchool() method", () => {
      const result = new Intern(
        "John",
        23,
        "john@email.com",
        "UCLA"
      ).getSchool();

      expect(result).toEqual("UCLA");
    });

    it("should return the role of Intern class", () => {
      const result = new Intern().getRole();

      expect(result).toEqual("Intern");
    });
  });
});
