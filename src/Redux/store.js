import { configureStore } from "@reduxjs/toolkit";
import chatSlices from "../reducers/Slices/chatSlices";


export const store  = configureStore({
    reducer: chatSlices
})