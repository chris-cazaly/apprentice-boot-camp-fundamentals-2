import { bowl } from "../../main/bowling/bowling";

describe("Bowling tests", () => {
  it("should calculate score of zero when zero pins are hit", () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const results = bowl(rolls);
    expect(results).toBe(0);
  });

  it("should calculate score for a regular game of bowling (no strikes or spares)", () => {
    const rollsOne = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const resultsOne = bowl(rollsOne);
    expect(resultsOne).toBe(20);

    const rollsTwo = [
      0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const resultsTwo = bowl(rollsTwo);
    expect(resultsTwo).toBe(11);
  });

  it("should calculate score for a regular game containing a spare", () => {
    const rolls = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = bowl(rolls);
    expect(result).toBe(12);

    const rolls2 = [5, 5, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const resultsTwo = bowl(rolls2);

    expect(resultsTwo).toBe(23);
  });

  it("should calculate score for a regular game containing a strike", () => {
    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = bowl(rolls);
    expect(result).toBe(14);
  });
});
