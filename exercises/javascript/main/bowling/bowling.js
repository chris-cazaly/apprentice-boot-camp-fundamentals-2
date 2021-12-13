export const bowl = (rolls) => {
  const getFrames = (rolls) => {
    const frames = [];

    for (let i = 0; i < rolls.length; i += 2) {
      if (rolls[i] === 10) {
        frames.push([rolls[i]]);
        i--;
      } else {
        frames.push([rolls[i], rolls[i + 1]]);
      }
    }
    return frames;
  };

  const calculateScoreForFrame = (frame, nextFrame) => {
    const isStrike = frame.length === 1;

    if (isStrike) {
      const scoreForCurrentFrame = frame[0];
      const scoreForNextFrame = nextFrame ? nextFrame[0] + nextFrame[1] : 0;

      return scoreForCurrentFrame + scoreForNextFrame;
    } else {
      const scoreForCurrentFrame = frame[0] + frame[1];
      const scoreForNextFrame = nextFrame ? nextFrame[0] : 0;

      const isSpare = scoreForCurrentFrame === 10;

      if (isSpare) {
        return scoreForCurrentFrame + scoreForNextFrame;
      }

      return scoreForCurrentFrame;
    }
  };

  const calculateScoreForGame = (frames) => {
    let total = 0;
    let scoreForFrame = 0;

    for (let i = 0; i < frames.length; i++) {
      scoreForFrame += calculateScoreForFrame(frames[i], frames[i + 1]);
    }

    return total + scoreForFrame;
  };

  const frames = getFrames(rolls);
  const score = calculateScoreForGame(frames);

  return score;
};
