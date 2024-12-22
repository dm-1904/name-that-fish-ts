import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

interface FunctionalGameBoardProps {
  setCorrectCount: (number: number) => void,
  correctCount: number,
  setIncorrectCount: (number: number) => void,
  incorrectCount: number,
}

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

export function FunctionalGameBoard({ setCorrectCount, correctCount, setIncorrectCount, incorrectCount }: FunctionalGameBoardProps) {
  const [fishState, setFishState] = useState(0)
  const [fishName, setFishName] = useState('')

  let nextFishToName: NextFishToName = initialFishes[fishState];

  function checkGuess() {
    if (fishName === nextFishToName.name) {
      setCorrectCount(correctCount + 1);
      nextFishToName = initialFishes[+1];
    } else {
      setIncorrectCount(incorrectCount + 1);
      nextFishToName = initialFishes[+1];
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
          value={fishName}
          onChange={(e) => {
            setFishName(e.target.value)
          }}
          />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            checkGuess()
            setFishState(fishState + 1)
            setFishName('')
          }} />
      </form>
    </div>
  );
}
