import { Link, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { theme } from '../Theme/Theme';

let arrChats = [
    {
        id: "1",
        name: "Ali Connors",
        text: "I'll be in your neighborhood doing errands this…",
    },
    {
        id: "2",
        name: "Scott",
        text: "Wish I could come, but I'm out of town this…",
    },
    {
        id: "3",
        name: "Sandra Adams",
        text: "Do you have Paris recommendations? Have you ever…",
    },
    {
        id: "4",
        name: "John",
        text: "Ok",
    },
    {
        id: "5",
        name: "John",
        text: "Ok",
    },
    {
        id: "6",
        name: "John",
        text: "Ok",
    },
  ];

export const ChatList = () => (
    <div className="App" style={{ backgroundColor: theme.palette.primary.main }}>
        <div>    
            {arrChats.map((data) => (
                <Link to={`/chat/${data.id}`} key={data.id}> 
                    <Chat name={data.name} text={data.text} />
                </Link>
            ))}
        </div>
        <Outlet />
    </div>
);
