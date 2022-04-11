export const ADD_MESSAGE_ARRAY = "MESSAGE::ADD_MESSAGE_ARRAY";
export const DELETE_MESSAGE_ARRAY = "MESSAGE::DELETE_MESSAGE_ARRAY";
export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
//export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addMessageArray = (id) => ({
    type: ADD_MESSAGE_ARRAY,
    payload: id
});

export const deleteMessageArray = (id, newMessages) => ({
    type: DELETE_MESSAGE_ARRAY, 
    id,
    payload: newMessages
});

export const addNewMessage = (newMsg, id) => ({
    type: ADD_MESSAGE,
    id,
    newMsg
});