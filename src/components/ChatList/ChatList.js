import './ChatList.style.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { FormContainer } from "../Form/Container/FormContainer";
import { theme } from '../Theme/Theme';
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessageArray, deleteMessageArray } from "../../store/message/action"; 
import { selectChats, selectMessages } from "../../store/chats/selectors";

export const ChatList = () => { 

    const chats = useSelector(selectChats);
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    
    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName, 
        };
        dispatch(addMessageArray(newChat.id));
        dispatch(addChat(newChat));   
    };

    const deleteChats = (id) => {
      dispatch(deleteChat(id));
      const newMessages = {...messages};
      dispatch(deleteMessageArray(id, newMessages));  
  };

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
