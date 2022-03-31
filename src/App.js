import './App.css';
import React, { useEffect, useState, useRef} from 'react';
import { Form } from './components/Form/Form';
import { ChatList } from './components/ChatList/ChatList';
import { MsgList } from './components/MessageList/MsgList';
import { theme } from './components/Theme/Theme';

const newAuthor = 'Evgeniy';
let botName = 'Bot';
let botText = 'Messenger bot welcomes you!';

function App() {
  const [messageList, setMessage] = useState([]);

  const addMessage = (newText) => {
    if (newText !== '') {
      setMessage([...messageList, {id: `msg-${Date.now()}`, text: newText, author: newAuthor}]);
    }; 
  };

  const timer = useRef(null);

  const addBotMessage = () => {
    let msgAuthor = messageList[messageList.length - 1]?.author;
    if (msgAuthor !== 'Bot' && msgAuthor !== '' && msgAuthor !== undefined) {
      timer.current = setTimeout(() => {
        setMessage([...messageList, {id: `msg-${Date.now()}`, text: botText, author: botName}]);
      }, 1500);
    };
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
      addBotMessage();
  }, [messageList]);

  return (
    <div className="App" style={{ backgroundColor: theme.palette.primary.main }}>
      <div>
        <ChatList /> 
      </div>
      <div className='wrapper'>
        <Form onSubmit={addMessage} />
        <MsgList messageList={messageList} />
      </div>
    </div>
  );
};

export default App;