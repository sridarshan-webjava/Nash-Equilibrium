import ScoreCard from "../ScoreCard/ScoreCard";
import "./ScoreList.css";

const ScoreList = ({ playersScore }) => {
  return (
    <div className="score-list">
      <h2 className="title">Score Card</h2>
      <div className="flex-container">
        {playersScore.map(player => {
          console.log(player);
          return (
            <ScoreCard
              key={player.id}
              playerName={player.playerData}
              score={player.score}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScoreList;
