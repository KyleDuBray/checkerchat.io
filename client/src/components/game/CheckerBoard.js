import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from './Row';
import '../../styles/checkers.css';

const CheckerBoard = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);

  const renderBoardRows = () => {
    const rows = board.map((row, index) => {
      return <Row rowArray={row} rowIndex={index} key={index} />;
    });
    return rows;
  };

  return <div className="board">{renderBoardRows()}</div>;
};

export default CheckerBoard;
