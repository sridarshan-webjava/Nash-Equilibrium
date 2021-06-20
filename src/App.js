import React, { Component } from "react";
import io from "socket.io-client";
import Message from "./components/Message/Message";
import Loader from "./components/Loader/Loader";
import ScoreList from "./components/ScoreList/ScoreList";
import Instruction from "./components/Instruction/Instruction";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Intro",
      round: "",
      playerName: "",
      playersScore: [],
    };
  }

  onInputChange = e => {
    this.setState({ playerName: e.target.value });
  };

  onButtonClick1 = () => {
    const socket = io.connect("http://localhost:5000");
    socket.emit("player-details", this.state.playerName);
    socket.on("waiting", msg => {
      this.setState({ message: msg });
    });
    socket.on("start", msg => {
      this.setState({ message: msg });
    });
    socket.on("update-scores", data => {
      this.setState({ playersScore: data });
    });
    socket.on("next-round", roundNo => {
      this.setState({ round: roundNo });
    });
  };

  sendValueTwo = () => {
    const socket = io.connect("http://localhost:5000");
    socket.emit("play-round", 2);
  };

  sendValueOne = () => {
    const socket = io.connect("http://localhost:5000");
    socket.emit("play-round", 1);
  };

  render() {
    return (
      <div>
        <h1 className="main-title">Fish And Profit</h1>
        {this.state.message.includes("Intro") ? (
          <div className="flex-container intro">
            <Instruction />
            <div className="flex-container inputs">
              <Input onInputChange={this.onInputChange} />
              <Button text={"Ready to Play"} event={this.onButtonClick1} />
            </div>
          </div>
        ) : this.state.message.includes("Waiting") ? (
          <div className="message-div flex-container">
            <Message message={this.state.message} />
            <Loader />
          </div>
        ) : (
          <div className="game-area">
            <ScoreList playersScore={this.state.playersScore} />
            <Message message={this.state.round} />
            <div className="flex-container input-group">
              <Button text={"Catch 2 Fish"} event={this.sendValueTwo} />
              <Button text={"Catch 1 Fish"} event={this.sendValueOne} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
