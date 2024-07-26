import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice"

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
});

export default store;
