import React from 'react';
import Space from './Space';

const Row = ({ rowArray, rowIndex }) => {
  const renderBoardSpaces = () => {
    return rowArray.map((space, index) => {
      return <Space spaceType={space} key={index} spaceIndex={index} />;
    });
  };
  return <div className="row">{renderBoardSpaces()}</div>;
};

export default Row;
