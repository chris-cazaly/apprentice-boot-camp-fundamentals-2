export class Frame {
  constructor(rolls) {
    this.rolls = rolls;
    this.score = this.calculateScore();
    this.isSpare = this.checkifSpare();
    this.isStrike = this.checkIfStrike();
  }

  checkifSpare() {
    const hasTwoRolls = this.rolls.length === 2;
    const score = this.calculateScore();

    return hasTwoRolls && score === 10;
  }

  checkIfStrike() {
    const hasOneRoll = this.rolls.length === 1;
    const score = this.calculateScore();

    return hasOneRoll && score === 10;
  }

  calculateScore() {
    const firstRoll = this.rolls[0];
    const secondRoll = this.rolls[1] || 0;

    return firstRoll + secondRoll;
  }
}

export class BowlingGame {
  constructor() {
    this.score = 0;
  }

  frames(rolls) {
    const frames = [];

    for (let i = 0; i < rolls.length; i += 2) {
      if (rolls[i] === 10) {
        frames.push(new Frame([rolls[i]]));
        i--;
      } else {
        frames.push(new Frame([rolls[i], rolls[i + 1]]));
      }
    }

    return frames;
  }

  calculateScore(frames) {
    return frames.reduce((total, frame, index) => {
      const previousFrame = frames[index - 1] || null;
      const currentFrame = frame;

      const {
        score: currentFrameScore,
        rolls: [currentFrameFirstRoll],
      } = currentFrame;

      if (previousFrame && previousFrame.isStrike) {
        return total + currentFrameScore * 2;
      }

      if (previousFrame && previousFrame.isSpare) {
        return total + currentFrameScore + currentFrameFirstRoll;
      }

      return total + currentFrameScore;
    }, 0);
  }

  bowl(rolls) {
    const frames = this.frames(rolls);
    const score = this.calculateScore(frames);

    return score;
  }
}
