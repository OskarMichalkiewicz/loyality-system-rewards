import calculatePoints from "./calculatePoints";
import { describe, test, expect } from "vitest";

describe("testing calculatePoints", () => {
  test("less and equal to 50", () => {
    expect(calculatePoints(-10)).toBe(0);
    expect(calculatePoints(0)).toBe(0);
    expect(calculatePoints(25)).toBe(0);
    expect(calculatePoints(50)).toBe(0);
  });

  test("more than 50 and less or equal to 100", () => {
    expect(calculatePoints(51)).toBe(1);
    expect(calculatePoints(75)).toBe(25);
    expect(calculatePoints(75.01)).toBe(25);
    expect(calculatePoints(99)).toBe(49);
    expect(calculatePoints(99.999999999)).toBe(49);
    expect(calculatePoints(100)).toBe(50);
  });

  test("more than 100", () => {
    expect(calculatePoints(101)).toBe(52);
    expect(calculatePoints(120)).toBe(90);
    expect(calculatePoints(300)).toBe(450);
    expect(calculatePoints(9999)).toBe(19848);
    expect(calculatePoints(9999.999999)).toBe(19848);
  });
});
