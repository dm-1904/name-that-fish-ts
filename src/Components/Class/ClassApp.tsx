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

  totalCount: number = initialFishes.length
  fishIndex = 0
  isGameOver: boolean = this.fishIndex === initialFishes.length
  answersLeft: string[] = initialFishes.map((el) => el.name)

  checkGuess = (name: string) => {
    const append = name === initialFishes[this.fishIndex].name ? [1, 0] : [0, 1]
      this.setState({
        correctCount: this.state.correctCount + append[0],
        incorrectCount: this.state.incorrectCount + append[1]
      })
  }

  render() {
    {this.fishIndex = this.state.correctCount + this.state.incorrectCount}
    {this.isGameOver = this.fishIndex === initialFishes.length}
    return (
      <>
        {!this.isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={this.answersLeft}
            />
            <ClassGameBoard
              checkGuess={this.checkGuess}
              fishData={initialFishes[this.fishIndex]}
              />
          </>
        )}
        {this.isGameOver && <ClassFinalScore
          correctCount={this.state.correctCount}
          totalCount={this.totalCount}
        />}
      </>
    );
  }
}
