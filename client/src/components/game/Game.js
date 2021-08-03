import React from "react";
import CheckerBoard from "./CheckerBoard";
import ChatBox from "./ChatBox";

const Game = (props) => {
  console.log(`game ID: ${props.match.params.id}`);
  return (
    <div className="w-screen h-screen ">
      <CheckerBoard />
      <ChatBox />
    </div>
  );
};

export default Game;
