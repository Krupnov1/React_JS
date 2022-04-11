import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [
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

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload];
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }
        default:
            return state; 
    }
};