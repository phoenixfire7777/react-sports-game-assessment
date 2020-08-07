import React from "react";
import Game from "./components/game/Game";
import "./App.css";
import BunnyImg from "./assets/images/bunny.png";
import HoundImg from "./assets/images/hound.png";
import RaccoonImg from "./assets/images/raccoon.png";
import SquirrelImg from "./assets/images/squirrel.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: RaccoonImg,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: SquirrelImg,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: BunnyImg,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: HoundImg,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
