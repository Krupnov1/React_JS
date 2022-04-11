import { TOGGLE_CHECKBOX } from "./action";

const initialState = {
    showName: false,
    name: "CHECKBOX_YES",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        default:
            return state; 
    }
};