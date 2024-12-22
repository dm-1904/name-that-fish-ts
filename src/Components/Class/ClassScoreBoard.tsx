import { Component } from "react";
import "./styles/score-board.css";


const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface ClassScoreBoardProps {
  incorrectCount: number,
  correctCount: number,
}

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          )).slice(this.props.correctCount + this.props.incorrectCount)}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
