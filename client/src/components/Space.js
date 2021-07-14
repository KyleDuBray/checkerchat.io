import React from "react";

const Space = ({ spaceType, spaceIndex }) => {
  const determineClassName = () => {
    switch (spaceType) {
      case "o":
      case "r":
      case "b":
        return "board__square--white";
      case "X":
        return "board__square--black";
      default:
        return null;
    }
  };

  const renderChecker = () => {
    switch (spaceType) {
      case "r":
        return <div className="checker red" />;
      case "b":
        return <div className="checker black" />;

      default:
        return null;
    }
  };

  return <div className={determineClassName()}>{renderChecker()}</div>;
};

export default Space;
