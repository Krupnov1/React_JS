import React, { useEffect, useState, useRef} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { MsgList } from '../components/MessageList/MsgList';

const newAuthor = 'Evgeniy';
let botName = 'Bot';
let botText = 'Messenger bot welcomes you!';

const initMessages = {
  "1": [],
  "2": [],
  "3": [],
  "4": [],
  "5": [],
  "6": [],
}

export function ChatScreen() {
  const [messageList, setMessage] = useState(initMessages);
  const { id } = useParams();

  const addMessage = (newMsg) => {
    setMessage({...messageList, [id]: [...messageList[id], newMsg]});
  }

  const sendMessage = (newText) => {
    if (newText !== '') {
      addMessage({id: `msg-${Date.now()}`, text: newText, author: newAuthor});
    }; 
  };

  const timer = useRef(null);

  const addBotMessage = () => {
    const msgAuthor = messageList[id]?.[messageList[id]?.length - 1]?.author;
    if (msgAuthor !== 'Bot' && msgAuthor !== '' && msgAuthor !== undefined) {
      timer.current = setTimeout(() => {
        addMessage({id: `msg-${Date.now()}`, text: botText, author: botName});
      }, 1500);
    };
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
      addBotMessage();
  }, [messageList]);

  if (!messageList[id]) {
    return <Navigate to="/chat" replace />
  }

  return ( 
    <div className='wrapper'>
      <Form onSubmit={sendMessage} />
      <MsgList messageList={messageList[id]} />
    </div> 
  );
};