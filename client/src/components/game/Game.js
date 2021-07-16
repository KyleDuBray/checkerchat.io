import React from 'react';
import CheckerBoard from './CheckerBoard';
import ChatBox from './ChatBox';

const Game = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <CheckerBoard />
      <ChatBox />
    </div>
  );
};

export default Game;
