import { Component } from "react";

interface ClassFinalScoreProps {
  correctCount: number,
  incorrectCount: number,
}

export class ClassFinalScore extends Component<ClassFinalScoreProps> {
  render() {
    return (
      <div id="final-score">
        {/* {console.log(this.props)} */}
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{this.props.correctCount + this.props.incorrectCount}</p>
        </div>
      </div>
    );
  }
}
