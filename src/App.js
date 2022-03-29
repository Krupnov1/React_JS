import './App.css';
import React, { useEffect, useState, useRef} from 'react';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

const newAuthor = 'Evgeniy';
let botName = 'Bot';
let botText = 'Messenger bot welcomes you!';

function App() {
  const [messageList, setMessage] = useState([]);

  const addMessage = (newText) => {
    if (newText !== '') {
      setMessage([...messageList, {text: newText, author: newAuthor}]);
    }; 
  };

  const timer = useRef(null);

  const addBotMessage = () => {
    let msgAuthor = messageList[messageList.length - 1]?.author;
    if (msgAuthor !== 'Bot' && msgAuthor !== '' && msgAuthor !== undefined) {
      timer.current = setTimeout(() => {
        setMessage([...messageList, {text: botText, author: botName}]);
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
    <div className="App">
      <Form onSubmit={addMessage}/>
      {messageList.map(msg =>
        <Message text={msg.text} author={msg.author}/>
      )}
    </div>
  );
};

export default App;