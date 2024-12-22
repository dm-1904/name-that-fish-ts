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
      <FunctionalScoreBoard
      correctCount={correctCount}
      incorrectCount={incorrectCount}
      />
      <FunctionalGameBoard
      setCorrectCount={setCorrectCount}
      correctCount={correctCount}
      setIncorrectCount={setIncorrectCount}
      incorrectCount={incorrectCount}
      />
      <FunctionalFinalScore
        correctCount={correctCount}
        totalCount={totalCount} />
      {/* {totalCount < 4 ?
        false && <FunctionalFinalScore /> :
        true && <FunctionalFinalScore correctCount={correctCount} totalCount={totalCount} /> } */}
    </>
  );
}
