const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');


test("create Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
  
test("get name from constructor", () => {
    const name = "john";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  
  test("get id from constructor", () => {
    const testValue = 1;
    const employee = new Employee("john", testValue);
    expect(employee.id).toBe(testValue);
  });
  
  test("get email from constructor", () => {
    const testValue = "test@test.com";
    const employee = new Employee("john", 1, testValue);
    expect(employee.email).toBe(testValue);
  });
  
  test("get name from getName()", () => {
    const testValue = "john";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });
  
  test("get id from getId()", () => {
    const testValue = 100;
    const employee = new Employee("john", testValue);
    expect(employee.getId()).toBe(testValue);
  });
  
  test("get email from getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("john", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("john", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
  });