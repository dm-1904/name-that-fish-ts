import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

// export default function App() {
//   const [correctCount, setCorrectCount] = useState<number>(0);
//   const [incorrectCount, setIncorrectCount] = useState<number>(0);
//   return (
//     <div className="App">

//       <ClassApp setCorrectCount={setCorrectCount} />
//     </div>
//   )
// }



export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  // totalCount: number = this.state.correctCount + this.state.incorrectCount

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
          {/* {`correct ${this.state.correctCount} `} */}
          {/* {console.log(this.props.setCorrectCount(5))} */}
          <ClassScoreBoard
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          />
          <ClassGameBoard
          updateStateCorrect={this.updateStateCorrect}
          correctCount={this.state.correctCount}
          updateStateIncorrect={this.updateStateIncorrect}
          incorrectCount={this.state.incorrectCount}
          />
        </>
        {/* {false && <ClassFinalScore />} */}
        <ClassFinalScore
        correctCount={this.state.correctCount}
        incorrectCount={this.state.incorrectCount}
        />
      </>
    );
  }
}
