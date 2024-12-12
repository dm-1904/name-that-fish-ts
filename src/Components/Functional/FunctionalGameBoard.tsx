import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

interface FunctionalGameBoardProps {
  setCorrectCount: (number: number) => any,
  correctCount: number,
}

interface NextFishToName {
  name: string,
  url: string,
}
// interface FishState {
//   fishState: number,
//   setFishState: React.Dispatch<React.SetStateAction<number>>
// }

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

export function FunctionalGameBoard({ setCorrectCount, correctCount }: FunctionalGameBoardProps) {
  const [fishState, setFishState] = useState(0)
  const [fishName, setFishName] = useState('')

  let nextFishToName: NextFishToName = initialFishes[fishState];




  function checkGuess() {

    if (fishName === nextFishToName.name) {
      setCorrectCount(correctCount + 1)
      nextFishToName = initialFishes[+1]
    }
  }


  return (
    <div id="game-board">
      {setCorrectCount(correctCount + 1)}
      {` correct count: ${correctCount}`}
      {` fishName: ${fishName}`}
      {` should match: ${nextFishToName.name}`}
      {` fishState: ${fishState}`}
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={checkGuess}

        >
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
            setFishState(fishState + 1)
            setFishName('')
          }} />

      </form>
    </div>
  );
}


// 1) How do we type props in TS?
// 2) Now that your component has the setter, how do we create logic around using it?
