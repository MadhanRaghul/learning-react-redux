import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice"
import chocoReducer from "./chocoSlice"
import userReducer from "./userSlice"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        choco: chocoReducer,
        user: userReducer
    },
});

export default store;
