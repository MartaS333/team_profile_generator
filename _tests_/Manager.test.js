const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should be able to set and retrive office number", () => {
    //Arrange
    const testOfficeNumber = 333;

    //Act
    const manager = new Manager(
      "Tater",
      4,
      "toottoot@example.com",
      testOfficeNumber
    );

    //Assert
    expect(manager.officeNumber).toBe(testOfficeNumber);
  });

  it("Should return as manager", () => {
    //Arrange
    const test = "Manager";
    const testOfficeNumber = 444;

    //Act
    const manager = new Manager(
      "Tater",
      4,
      "toottoot@example.com",
      testOfficeNumber
    );

    //Assert
    expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    expect(manager.getRole()).toBe(test);
  });
});
