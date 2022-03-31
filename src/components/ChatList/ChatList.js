import { Chat } from "../Chat/Chat";

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

export const ChatList = () => 
    arrChats.map((arr) => <Chat key={arr.id} id={arr.id} name={arr.name} text={arr.text} />);

