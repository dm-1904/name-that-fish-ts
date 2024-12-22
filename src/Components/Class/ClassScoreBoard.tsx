import { Component } from "react";
import "./styles/score-board.css";


const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface ClassScoreBoardProps {
  incorrectCount: number,
  correctCount: number,
}

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
  render() {
    // console.log(`test ${this.props.correctCount}`)
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
