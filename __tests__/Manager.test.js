const Manager = require('../lib/Manager.js');

test("get office number", () => {
    const testValue = 100;
    const manager = new Manager("john", 1, "test@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager("john", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe(testValue);
  });
  
  test("get office number from getOffice()", () => {
    const testValue = 100;
    const manager = new Manager("john", 1, "test@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
  });