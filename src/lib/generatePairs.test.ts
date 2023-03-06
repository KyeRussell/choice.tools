import { describe, expect, it } from "vitest";
import generatePairs from "./generatePairs";

describe("Pair generation tests", () => {
  it("Generates pairs as expected.", () => {
    const items = ["a", "b", "c"];
    const expected = [
      ["a", "b"],
      ["a", "c"],
      ["b", "c"],
    ];
    expect(generatePairs(items)).toStrictEqual(expected);
  });

  it("Handles arrays with duplicates correctly.", () => {
    expect(generatePairs(["a", "b", "b"])).toStrictEqual([["a", "b"]]);
  });

  it("Throws an error if the array has less than two items.", () => {
    expect(() => generatePairs(["a"])).toThrow();
  });
});
