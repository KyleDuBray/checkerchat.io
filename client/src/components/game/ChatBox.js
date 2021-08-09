import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import TextBox from './TextBox';

const ChatBox = () => {
  const [state, setState] = useState({ message: '', name: '', room: '' });
  const [chat, setChat] = useState([]);

  const [room, setRoom] = useState('default');

  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const socketRef = useRef();

  const defaultRoom = 'default';

  useEffect(() => {
    const connectToSocketServer = async () => {
      socketRef.current = await io.connect('http://localhost:4000');
      setIsSocketConnected(true);
      socketRef.current.emit('join-room', defaultRoom);
    };
    connectToSocketServer();

    return () => socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    if (isSocketConnected) {
      socketRef.current.on('message', ({ name, message }) => {
        setChat([...chat, { name, message }]);
      });
    }
  }, [isSocketConnected, chat]);

  const onTextChange = (e) => {
    setState({ ...state, message: e.target.value });
  };

  const onMessageSubmit = (message) => {
    socketRef.current.emit('message', {
      name: socketRef.current.id,
      message,
      room,
    });
    setState({ message: '', name: socketRef.current.id });
  };

  const onRoomSubmit = (roomName) => {
    setRoom(roomName);
    socketRef.current.emit('join-room', roomName);
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="flex flex-col justify-end">
      {renderChat()}
      <TextBox
        onTextChange={onTextChange}
        onMessageSubmit={onMessageSubmit}
        onRoomSubmit={onRoomSubmit}
      />
    </div>
  );
};

export default ChatBox;
