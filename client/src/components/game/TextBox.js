import React, { useState } from "react";
import Button from "../Button";

const TextBox = ({ onTextChange, onMessageSubmit, onRoomSubmit }) => {
  const [chatText, setChatText] = useState("");
  const [roomText, setRoomText] = useState("");

  // ONSUBMIT HANDLERS
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    onMessageSubmit(chatText);
    setChatText("");
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    onRoomSubmit(roomText);
    setRoomText("");
  };

  // ONCHANGE HANDLERS
  const onChatTextChange = (e) => {
    setChatText(e.target.value);
    onTextChange(e);
  };

  const onRoomTextChange = (e) => {
    setRoomText(e.target.value);
  };
  return (
    <div className="w-auto flex justify-center flex-col">
      <div className="p-2">
        <h1>Chat</h1>
      </div>
      <hr />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="">
          <div className="">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={chatText}
              onChange={onChatTextChange}
            />
          </div>
          <Button
            content={"Send"}
            handleClick={handleMessageSubmit}
            kind="primary"
          />
        </div>
      </form>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="">
          <div className="">
            <label>Change Room</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={roomText}
              onChange={onRoomTextChange}
            />
          </div>
          <Button
            handleClick={handleRoomSubmit}
            content="Change Room"
            kind="secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default TextBox;
