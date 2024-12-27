import { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface ClassGameBoardProps {
  checkGuess: (name: string) => void;
  fishData: Fish;
}

interface ClassGameBoardState {
  fishName: string;
}

export class ClassGameBoard extends Component<
  ClassGameBoardProps,
  ClassGameBoardState
> {
  state = {
    fishName: "",
  };

  setFishName = (value: string): void => {
    this.setState({
      fishName: value,
    });
  };

  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          {this.props.fishData ? (
            <img
              src={this.props.fishData.url}
              alt={this.props.fishData.name}
            />
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
                fishName: e.target.value,
              });
            }}
          />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              this.props.checkGuess(this.state.fishName);
              this.setState({
                fishName: "",
              });
            }}
          />
        </form>
      </div>
    );
  }
}
