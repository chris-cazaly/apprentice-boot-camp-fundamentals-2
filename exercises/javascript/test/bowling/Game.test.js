import { Frame, BowlingGame } from "../../main/bowling/Game";

describe("Frame", () => {
  it("should return true if the frame is a spare", () => {
    const frame = new Frame([5, 5]);
    expect(frame.isSpare).toBeTruthy();
    expect(frame.score).toEqual(10);
  });

  it("should return true if the frame is a strike", () => {
    const frame = new Frame([10]);
    expect(frame.isStrike).toBeTruthy();
    expect(frame.score).toEqual(10);
  });

  it("should calculate the correct score for a normal roll", () => {
    const frame = new Frame([4, 5]);
    expect(frame.score).toEqual(9);
  });
});

describe("Bowling tests", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it("should calculate score of zero when zero pins are hit", () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const results = game.bowl(rolls);
    expect(results).toBe(0);
  });

  it("should calculate score for a regular game of bowling (no strikes or spares)", () => {
    const rollsOne = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const resultsOne = game.bowl(rollsOne);
    expect(resultsOne).toBe(20);
  });

  it("should calculate score for a regular game containing a spare", () => {
    const rolls = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = game.bowl(rolls);
    expect(result).toBe(12);
  });

  it("should calculate score for a regular game containing a strike", () => {
    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = game.bowl(rolls);
    expect(result).toBe(14);
  });
});
