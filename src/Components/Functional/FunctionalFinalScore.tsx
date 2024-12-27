import "./styles/final-score.css";

interface CountProps {
  totalCount: number;
  correctCount: number;
}

export const FunctionalFinalScore = ({
  correctCount,
  totalCount,
}: CountProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
