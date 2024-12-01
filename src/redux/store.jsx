import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./contacts/slices";

const store = configureStore({
    reducer: {
        contacts: reducer
    }
})

export default store;