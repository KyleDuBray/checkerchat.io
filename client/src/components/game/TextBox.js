import React, { useState } from 'react';
import Button from '../Button';

const TextBox = ({ onTextChange, onMessageSubmit, onRoomSubmit }) => {
  const [chatText, setChatText] = useState('');
  const [roomText, setRoomText] = useState('');

  // ONSUBMIT HANDLERS
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    onMessageSubmit(chatText);
    setChatText('');
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    onRoomSubmit(roomText);
    setRoomText('');
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
      <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div className="">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={chatText}
            onChange={onChatTextChange}
          />
        </div>

        <div className="flex">
          <Button
            content={'Send'}
            handleClick={handleMessageSubmit}
            kind="primary"
          />
          <div className="flex justify-end items-center">
            <label>Change Room</label>
            <input
              className="shadow appearance-none border rounded w-1/5 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={roomText}
              onChange={onRoomTextChange}
            />
            <Button
              handleClick={handleRoomSubmit}
              content="Go"
              kind="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
