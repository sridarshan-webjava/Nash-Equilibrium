import "./ScoreCard.css";

const ScoreCard = ({ playerName, score }) => {
  return (
    <div className="card">
      <p className="card-name">{playerName}</p>
      <p className="card-score">{score}</p>
    </div>
  );
};

export default ScoreCard;
