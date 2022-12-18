const factorial = require("../src/index");

describe("Factorial function", () => {
  it("correctly calculates the factorial of 0", () => {
    expect(factorial(3)).toBe(6);
  });

  it("throws an error if a negative input is provided", () => {
    expect(() => factorial(-1)).toThrow(
      "Factorial is only defined for non-negative integers"
    );
  });
});
