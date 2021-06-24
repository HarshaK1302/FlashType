import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";
const ChallengeSection = ({
  selectedParagraph,
  testInfo,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  onInputChange,
  startAgain,
}) => {
  return (
    <div>
      <div className="challenge-section-container">
        <h1 data-aos="fade-down" className="challenge-section-header">
          Take a speed test now!
        </h1>
        <TestContainer
          testInfo={testInfo}
          selectedParagraph={selectedParagraph}
          words={words}
          characters={characters}
          wpm={wpm}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          onInputChange={onInputChange}
          startAgain={startAgain}
        />
      </div>
    </div>
  );
};
export default ChallengeSection;
