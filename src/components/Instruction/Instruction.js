import "./Instruction.css";

const Instruction = () => {
  return (
    <div className="list">
      <h2 className="list-title">Instructions</h2>
      <ul className="instructions">
        <li>
          The main aim of the game is to catch a fish and maximise the profit
        </li>
        <li>
          In every round a player can either catch 1 fish or 2 fish and the
          profit is decided by the number of fish caught by you and the other
          players
        </li>
        <li>
          During the end of the 3rd round and 6th round , there will be a
          discussion between the players to work on their strategies
        </li>
        <li>
          At the end of the game , the player with maximum profit wins the game
        </li>
        <li>
          <p>
            Below is the table with number of fish caught and the corresponding
            profit
          </p>
          <ul className="table">
            <li className="grid-container center-align">
              <p className="table-title">Total Capture</p>
              <p className="table-title">Capture</p>
              <p className="table-title">Total Profit</p>
            </li>
            <li className="grid-container">
              <p>8</p>
              <div className="inner-container">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <div className="inner-container">
                <p>-25</p>
                <p>-25</p>
                <p>-25</p>
                <p>-25</p>
              </div>
            </li>
            <li className="grid-container">
              <p>7</p>
              <div className="inner-container">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>1</p>
              </div>
              <div className="inner-container">
                <p>25</p>
                <p>25</p>
                <p>25</p>
                <p>-25</p>
              </div>
            </li>
            <li className="grid-container">
              <p>6</p>
              <div className="inner-container">
                <p>2</p>
                <p>2</p>
                <p>1</p>
                <p>1</p>
              </div>
              <div className="inner-container">
                <p>50</p>
                <p>50</p>
                <p>-12.5</p>
                <p>-12.5</p>
              </div>
            </li>
            <li className="grid-container">
              <p>5</p>
              <div className="inner-container">
                <p>2</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
              <div className="inner-container">
                <p>75</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
            </li>
            <li className="grid-container">
              <p>4</p>
              <div className="inner-container">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
              <div className="inner-container">
                <p>25</p>
                <p>25</p>
                <p>25</p>
                <p>25</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Instruction;
