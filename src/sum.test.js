import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";
import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
import { Calculator } from "./calculator";
import { cesarCipher } from "./cesarCipher";

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

describe("calculator module", () => {
  test("testing calculator object functions", () => {
    expect(Calculator).toBeTruthy();
    expect(Calculator.add(1, 2)).toEqual(3);
    expect(Calculator.divide(6, 2)).toEqual(3);
    expect(Calculator.multiply(2, 3)).toEqual(6);
    expect(Calculator.subtract(4, 1)).toEqual(3);
  });
});

describe("Cesar cipher module", () => {
  test("cesarCipher function", () => {
    expect(cesarCipher("abc", 3)).toBe("def");
    expect(cesarCipher("xyz", 3)).toBe("abc");
    expect(cesarCipher("Hello", 3)).toBe("Khoor");
    expect(cesarCipher("Hello, World!")).toBe("Khoor, Zruog!");
  });
});
