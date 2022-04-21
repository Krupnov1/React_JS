import './ChatList.style.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { FormContainer } from "../Form/Container/FormContainer";
import { theme } from '../Theme/Theme';
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessageArray, deleteMessageArray } from "../../store/message/action";  
import { selectChats, selectMessages } from "../../store/chats/selectors";
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMessagesRefById } from '../../services/firebase';

export const ChatList = () => { 
    const [chats, setChats] = useState([]);

    //const chats = useSelector(selectChats);
    //const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    
    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName, 
        };
        //dispatch(addMessageArray(newChat.id));
        //dispatch(addChat(newChat)); 
        set(getChatRefById(newChat.id), newChat);
        set(getMessagesRefById(newChat.id), { exists: true });  
    };

    const deleteChats = (id) => {
      //dispatch(deleteChat(id));
      remove(getChatRefById(id)); 
      //const newMessages = {...messages};
      //dispatch(deleteMessageArray(id, newMessages));
      set(getMessagesRefById(id), null);  
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            setChats(Object.values(snapshot.val() || {}));
        });
        
        return unsubscribe;
    }, []);

    return (
        <div className="App" style={{ backgroundColor: theme.palette.primary.main }}>
            <div>    
                {chats.map((data) => (
                    <Link to={`/chat/${data.id}`} key={data.id}> 
                        <Chat id={data.id} name={data.name} text={data.text} deleteChats={deleteChats}/>
                    </Link>    
                ))}
                <div className="addChatForm">
                    <FormContainer onSubmit={handleSubmit} />
                </div>
            </div>
            <Outlet />
        </div>
    );
};
