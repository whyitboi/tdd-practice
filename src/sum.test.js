import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";
import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("capitalize module", () => {
  test("capitalize first letter of a string", () => {
    expect(capitalize("string")).toBe("String");
  });
});

describe("reverse string module", () => {
  test("reversing a string", () => {
    expect(reverseString("string")).toBe("gnirts");
  });
});
