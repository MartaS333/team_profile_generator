const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should set name, id and email in an object", () => {
    //Arrange
    const testName = "Marta";
    const testId = 28;
    const testEmail = "marta@test.com";

    //Act
    const employee = new Employee(testName, testId, testEmail);

    //Assert
    expect(typeof employee).toBe("object");
    expect(employee.name).toBe(testName);
    expect(employee.id).toBe(testId);
    expect(employee.email).toBe(testEmail);
  });

  it("all functions shoul work properly", () => {
    //Arrange
    const testName = "Haru";
    const testId = 1;
    const testEmail = "hunnysenpai@example.com";
    const test = "Employee";

    //Act
    const employee = new Employee(testName, testId, testEmail);

    //Assert
    expect(employee.getName()).toBe(testName);
    expect(employee.getId()).toBe(testId);
    expect(employee.getEmail()).toBe(testEmail);
    expect(employee.getRole()).toBe(test);
  });
});
