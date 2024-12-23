import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../constants/fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);

  const totalCount: number = initialFishes.length
  const fishIndex: number = correctCount + incorrectCount
  const isGameOver: boolean = fishIndex === initialFishes.length
  const answersLeft: string[] = initialFishes.map((el) => el.name)

  function checkGuess(name: string) {
    const append: number[] = name === initialFishes[fishIndex].name ? [1, 0] : [0, 1]
      setCorrectCount(correctCount + append[0]);
      setIncorrectCount(incorrectCount + append[1]);
    }

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            checkGuess={checkGuess}
            fishData={initialFishes[fishIndex]}
          />
      </>
      )}
      {isGameOver && <FunctionalFinalScore
      correctCount={correctCount}
      totalCount={totalCount}
      />}
    </>
  );
}
