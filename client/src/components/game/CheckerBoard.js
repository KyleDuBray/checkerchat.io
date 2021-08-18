import React from "react";
import { useSelector } from "react-redux";

import Row from "./Row";

const CheckerBoard = () => {
  const board = useSelector((state) => state.game.board);

  const renderBoardRows = () => {
    const rows = board.map((row, index) => {
      return <Row rowArray={row} rowIndex={index} key={index} />;
    });
    return rows;
  };

  return (
    <div className="grid grid-cols-8 grid-rows-8 h-3/5 w-3/6 border border-solid m-auto">
      {renderBoardRows()}
    </div>
  );
};

export default CheckerBoard;
