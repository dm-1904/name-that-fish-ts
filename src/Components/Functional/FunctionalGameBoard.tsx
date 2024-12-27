import "./styles/game-board.css";
import { useState } from "react";
import { Fish } from "../../types";

interface FunctionalGameBoardProps {
  checkGuess: (name: string) => void;
  fishData: Fish;
}

export function FunctionalGameBoard({
  checkGuess,
  fishData,
}: FunctionalGameBoardProps) {
  const [fishName, setFishName] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        {fishData && <img src={fishData.url} alt={fishData.name} />}
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishName}
          onChange={(e) => {
            setFishName(e.target.value);
          }}
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            checkGuess(fishName);
            setFishName("");
          }}
        />
      </form>
    </div>
  );
}
