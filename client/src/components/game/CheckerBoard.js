import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "./Row";

const CheckerBoard = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);

  const renderBoardRows = () => {
    const rows = board.map((row, index) => {
      return <Row rowArray={row} rowIndex={index} key={index} />;
    });
    return rows;
  };

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-9/12 h-4/5 border border-solid mt-10">
      {renderBoardRows()}
    </div>
  );
};

export default CheckerBoard;
