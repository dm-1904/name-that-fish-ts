import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);

  return (
    <>
    {`correct guesses: ${correctCount}`}
      <FunctionalScoreBoard
      correctCount={correctCount}
      incorrectCount={incorrectCount}
      />
      <FunctionalGameBoard
      setCorrectCount={setCorrectCount}
      correctCount={correctCount}
      />
      {false && <FunctionalFinalScore />}
    </>
  );
}
