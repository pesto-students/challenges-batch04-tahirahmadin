import { flipArgs } from "./flipArgs";

describe("arguments reversed", () => {
  test("should get the correct result", () => {
    const add = (x, y) => x - y;
    const resultFunction = flipArgs(add);
    expect(resultFunction(5, 10)).toBe(5);
  });
});
