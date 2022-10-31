const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should take in school", () => {
    //Arrange
    const testSchool = "ASU";

    //Act
    const intern = new Intern("Yupa", 3, "chalupa@example.com", testSchool);

    //Assert
    expect(intern.school).toBe(testSchool);
  });

  it("All functions should work properly", () => {
    //Arrange
    const test = "Intern";
    const testSchool = "ASU";

    //Act
    const intern = new Intern("Yupa", 3, "Chalupa", testSchool);

    //Assert
    expect(intern.getSchool()).toBe(testSchool);
    expect(intern.getRole()).toBe(test);
  });
});
