const Intern = require('../lib/Intern');

test("sets school", () => {
  const testValue = "Utahv";
  const intern = new Intern("john", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("john", 1, "test@test.com", "Utahv");
  expect(intern.getRole()).toBe(testValue);
});

test("get school from getSchool()", () => {
  const testValue = "Utahv";
  const intern = new Intern("john", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});