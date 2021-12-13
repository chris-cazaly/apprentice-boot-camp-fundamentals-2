export const bowl = (rolls) => {
  let total = 0;
  const frames = [];

  for (let i = 0; i < rolls.length; i += 2) {
    if (rolls[i] === 10) {
      frames.push([rolls[i]]);
      i--;
    } else {
      frames.push([rolls[i], rolls[i + 1]]);
    }
  }

  for (let i = 0; i < frames.length; i++) {
    const currentFrame = frames[i];

    let scoreForFrame;

    const isStrike = currentFrame.length === 1;
    // const scoreFromCurrentFrame = isStrike ? currentFrame[0] : currentFrame[0] + currentFrame[1]
    // const scoreFromNextFrame = isStrike ? nextFrame[0] + nextFrame[1] : nextFrame[0]
    // condition ? true : false

    if (isStrike) {
      scoreForFrame = currentFrame[0];

      const nextFrame = frames[i + 1];
      scoreForFrame += nextFrame[0] + nextFrame[1];
    } else {
      scoreForFrame = currentFrame[0] + currentFrame[1];
      const isSpare = scoreForFrame === 10;
      const nextFrame = frames[i + 1];

      if (isSpare) {
        scoreForFrame += nextFrame[0];
      }
    }

    total += scoreForFrame;
  }

  return total;

  //   return rolls.reduce((score, roll) => score + roll, 0);
};
