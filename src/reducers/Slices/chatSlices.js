import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Chats: [{}],
  Status: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sentChat: (state, action) => {
      const chat = {
        id: nanoid(),
        message: action.payload.inputText,
      };
      state.Chats.push(chat);
    },
    recieveChat: (state, action) => {
      const recieveChats = {
        id: nanoid(),
        response: action.payload.response,
      };
      state.Chats.push(recieveChat);
    },
  },
});

export const { sentChat, recieveChat } = chatSlice.actions;

export default chatSlice.reducer;
