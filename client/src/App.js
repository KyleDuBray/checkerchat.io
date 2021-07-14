import React from 'react';
import './styles/base.css';
import ChatBox from './components/ChatBox';
import CheckerBoard from './components/CheckerBoard';

const App = () => {
  return (
    <>
      <CheckerBoard />
      <ChatBox />
    </>
  );
};

export default App;
