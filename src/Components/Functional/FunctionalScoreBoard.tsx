import "./styles/score-board.css";
//  Where the score is presented

const incorrectCount = 0;
const correctCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface CountProps {
  incorrectCount: number,
  correctCount: number,
}

export function FunctionalScoreBoard({incorrectCount, correctCount}: CountProps) {
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
