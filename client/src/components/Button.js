import React from "react";
import "../styles/button.css";

export default function Button(props) {
  return (
    <>
      <button className={props.outerClass} onClick={props.handleClick}>
        <span className={`${props.innerClass} fix-focus`} tabIndex="-1">
          {props.content}
        </span>
      </button>
    </>
  );
}
