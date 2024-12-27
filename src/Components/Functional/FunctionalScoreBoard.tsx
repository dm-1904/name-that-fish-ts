import "./styles/score-board.css";

interface CountProps {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
}

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  answersLeft,
}: CountProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
