import { createStore, combineReducers } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./message/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messagesReducer 
});

export const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 
