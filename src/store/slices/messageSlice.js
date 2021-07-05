import { createSlice } from "@reduxjs/toolkit";

export const showMessageAction = (message, severity) => dispatch => {
    dispatch(showMessage({
        message: message,
        severity: severity 
    }))
}

export const hideMessageAction = () => dispatch => {
    dispatch(hideMessage());
}

const messageSlice = createSlice({
    name: "message",
    initialState: {
        show: true,
        message: "",
        severity: ""
    },
    reducers: {
        showMessage: (state, action) => {
            state.show = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        hideMessage: (state) => {
            state.show = false;
            state.message = "";
            state.severity = "";
        }
    }
});

const { showMessage, hideMessage } = messageSlice.actions;

export default messageSlice.reducer;