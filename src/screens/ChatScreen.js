import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { MsgList } from '../components/MessageList/MsgList';
import { addNewMessage } from "../store/message/action";
import { selectMessageList } from "../store/chats/selectors";

const newAuthor = 'Evgeniy';
let botName = 'Bot';
let botText = 'Messenger bot welcomes you!';

export function ChatScreen() {
  const messageList = useSelector(selectMessageList); 
  const dispatch = useDispatch();
  const { id } = useParams();

  const addMessage = (newMsg, id) => {
    dispatch(addNewMessage(newMsg, id)) 
  }

  const sendMessage = (newText) => {
    if (newText !== '') {
      addMessage({id: `msg-${Date.now()}`, text: newText, author: newAuthor}, id);
    }; 
  };

  const timer = useRef(null);

  const addBotMessage = () => {
    const msgAuthor = messageList[id]?.[messageList[id]?.length - 1]?.author;
    if (msgAuthor !== 'Bot' && msgAuthor !== '' && msgAuthor !== undefined) {
      timer.current = setTimeout(() => {
        addMessage({id: `msg-${Date.now()}`, text: botText, author: botName}, id);
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