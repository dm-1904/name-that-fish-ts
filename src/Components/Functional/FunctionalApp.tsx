import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const totalCount: number = correctCount + incorrectCount
  return (
    <>
      {totalCount < 4 && <FunctionalScoreBoard
      correctCount={correctCount}
      incorrectCount={incorrectCount}
      />}
      {totalCount < 4 && <FunctionalGameBoard
      setCorrectCount={setCorrectCount}
      correctCount={correctCount}
      setIncorrectCount={setIncorrectCount}
      incorrectCount={incorrectCount}
      />}
      {totalCount === 4 && <FunctionalFinalScore
      correctCount={correctCount}
      totalCount={totalCount}
      />}
    </>
  );
}
