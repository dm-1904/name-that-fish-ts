import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  updateStateIncorrect = () => {
    this.setState({
      incorrectCount: this.state.incorrectCount +1
    })
  }

  updateStateCorrect = () => {
      this.setState({
       correctCount: this.state.correctCount +1
      })
  }

  render() {
    return (
      <>
        <>
         {this.state.correctCount + this.state.incorrectCount < 4 && <ClassScoreBoard
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          />}
         {this.state.correctCount + this.state.incorrectCount < 4 && <ClassGameBoard
          updateStateCorrect={this.updateStateCorrect}
          correctCount={this.state.correctCount}
          updateStateIncorrect={this.updateStateIncorrect}
          incorrectCount={this.state.incorrectCount}
          />}
        </>
        {this.state.correctCount + this.state.incorrectCount === 4 && <ClassFinalScore
        correctCount={this.state.correctCount}
        incorrectCount={this.state.incorrectCount}
        />}
      </>
    );
  }
}
