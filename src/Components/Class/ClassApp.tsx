import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../constants/fishData";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  checkGuess = (name: string) => {
    const append =
      name ===
      initialFishes[this.state.correctCount + this.state.incorrectCount].name
        ? [1, 0]
        : [0, 1];
    this.setState({
      correctCount: this.state.correctCount + append[0],
      incorrectCount: this.state.incorrectCount + append[1],
    });
  };

  render() {
    const fishIndex = this.state.correctCount + this.state.incorrectCount;
    const totalCount: number = initialFishes.length;
    const isGameOver: boolean = fishIndex === initialFishes.length;
    const answersLeft: string[] = initialFishes
      .map((el) => el.name)
      .slice(fishIndex);
    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              checkGuess={this.checkGuess}
              fishData={initialFishes[fishIndex]}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
