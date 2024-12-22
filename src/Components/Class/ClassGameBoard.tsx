import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

interface NextFishToName {
  name: string,
  url: string,
}

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

interface ClassGameBoardProps {
  updateStateCorrect: () => void,
  correctCount: number,
  updateStateIncorrect: () => void,
  incorrectCount: number,
}

interface ClassGameBoardState {
  fishState: number,
  fishName: string,
}

interface NextFishToName {
  name: string,
  url: string,
}

export class ClassGameBoard extends Component<ClassGameBoardProps, ClassGameBoardState> {
  state = {
    fishState: 0,
    fishName: '',
  }

  setFishState = (num: number): void => {
    this.setState({
      fishState: this.state.fishState +1
    })
  }

  setFishName = (str: string): void => {
    this.setState({
      fishName: this.state.fishName
    })
  }

  render() {
    const nextFishToName: NextFishToName = initialFishes[this.state.fishState];
    const checkGuess = () => {
      if (this.state.fishName === nextFishToName.name) {
        this.props.updateStateCorrect()
      } else {
        this.props.updateStateIncorrect()
      }
    }
    return (
      <div id="game-board">
        <div id="fish-container">
        {nextFishToName ? (
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      ) : (
        <></>
      )}
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishName}
            onChange={(e) => {
              this.setState({
                fishName: e.target.value
              })
            }}
            />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              checkGuess()
              this.setState({
                fishName: '',
                fishState: this.state.fishState + 1
              })
            }}
          />
        </form>
      </div>
    );
  }
}
