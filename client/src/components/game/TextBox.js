import React, { useState } from 'react';
import Button from '../Button';

import '../../styles/textbox.css';

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
    <div className="textbox--content">
      <div className="textbox--head">
        <h1>Hello there</h1>
      </div>
      <hr />
      <form className="textbox">
        <div className="textbox--fields">
          <div className="field">
            <label>Send Message</label>
            <input type="text" value={chatText} onChange={onChatTextChange} />
          </div>
          <Button
            content={'Send'}
            handleClick={handleMessageSubmit}
            innerClass="textbox-send-span"
            outerClass="textbox-send-btn"
          />
        </div>
      </form>
      <form className="textbox">
        <div className="textbox--fields">
          <div className="field">
            <label>Room</label>
            <input type="text" value={roomText} onChange={onRoomTextChange} />
          </div>
          <Button
            handleClick={handleRoomSubmit}
            content="Change Room"
            innerClass="textbox-cancel-span"
            outerClass="textbox-cancel-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default TextBox;
