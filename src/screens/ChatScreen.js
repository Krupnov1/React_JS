import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { FormContainer } from '../components/Form/Container/FormContainer';
import { MsgList } from '../components/MessageList/MsgList';
import { addMessageWithReply } from "../store/message/action";
import { selectMessageListByChatId } from "../store/chats/selectors";

const newAuthor = 'Evgeniy';

export function ChatScreen() {
  const { id } = useParams();
  const messageList = useSelector(selectMessageListByChatId(id));
  const dispatch = useDispatch();
  
  const sendMessage = (newText) => {
    if (newText !== '') {
      dispatch(addMessageWithReply({ id: `msg-${Date.now()}`, text: newText, author: newAuthor }, id ));
    }; 
  };

  if (!messageList) {
    return <Navigate to="/chat" replace />
  }

  return ( 
    <div className='wrapper'>
      <FormContainer onSubmit={sendMessage} />
      <MsgList messageList={messageList} />
    </div> 
  );
};