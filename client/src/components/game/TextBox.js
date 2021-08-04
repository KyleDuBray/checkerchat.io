import React, { useState } from 'react';
import Button from '../Button';
import { ReactComponent as SendImg } from '../../icons/send.svg';

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
        <div className="flex mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={chatText}
            onChange={onChatTextChange}
          />
          <Button
            content={<SendImg width="20px" height="20px" />}
            handleClick={handleMessageSubmit}
            kind="primary"
          />
        </div>

        <div className="flex">
          <div className="flex items-center">
            <label className="mr-2">Change Room</label>
            <input
              className="shadow appearance-none border rounded w-1/5 py-2 px-3 mr-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
